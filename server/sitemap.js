const path = require('path');
const glob = require('glob');
const fs = require('fs');
const axios = require('axios');
const { getPathnameByKey, isRouteDisabled, withousSlash } = require('./utils');
// If you use Dotenv you can include your .env variables uncommenting the following line
require("dotenv").config();

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// SITE_ROOT is the domain of your app
// Update example.com with your domain or set the env variable
const SITE_ROOT = process.env.SITE_ROOT || 'https://luck.org.pl';

// SOURCE is where are stored all pages files
// By default it tracks all files in the pages folder
// without considering the ones starting with `_` (e.g. _document.tsx and _app.tsx)
const SOURCE = process.env.SOURCE || path.join(resolveApp('pages'), '/**/!(_*).tsx');

// API_SOURCE is the endpoint of you api
// Update example.com/api with your endpoint or set the env variable
const API_SOURCE = `${process.env.CLIENT_URL}/graphql`;

// DESTINATION is where the real file is exported
// By default is .next/static/sitemap.xml
const DESTINATION = process.env.DESTINATION || path.join(resolveApp('.next/static'), 'sitemap.xml');

const dateTemplate = (date) => `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`

async function authenticate(identifier, password) {
  return await axios
    .post(`${process.env.CLIENT_URL}/admin/auth/local`, { identifier, password })
    .then(response => response.data.jwt)
}

//https://www.sitemaps.org/pl/protocol.html
const createSitemap = async () => {
  /**
   * STEP 1: Store all static pages url
   **/
  let diskPages = glob.sync(SOURCE);
  let xml = '';
  xml += '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  xml += '<url>';
  xml += `<loc>${SITE_ROOT}/robots.txt</loc>`;
  xml += `<changefreq>always</changefreq>`;
  xml += `<priority>0.1</priority>`;
  xml += '</url>';


  diskPages.forEach( page => {
    let stats = fs.statSync(page);
    let lastMod = dateTemplate(new Date(stats.mtime));

    page = page.replace(resolveApp('pages'), '');
    page = page.replace(/.tsx$/, '');

    if (page.match(/.*\/index$/)) {
      page = page.replace(/(.*)index$/, '$1');
    }

    if(isRouteDisabled(page)){
      return;
    }

    const pathname = getPathnameByKey(page);
    page = pathname !== undefined ? pathname : withousSlash(page);
    page = page ? `${SITE_ROOT}/${page}` : SITE_ROOT;

    xml += '<url>';
    xml += `<loc>${page}</loc>`;
    xml += `<lastmod>${lastMod}</lastmod>`;
    xml += `<changefreq>always</changefreq>`;
    xml += `<priority>0.5</priority>`;
    xml += '</url>';
  });

  /**
   * STEP 2: Store all dynamic pages url
   * In the following snippet we gather all posts available
   * TODO: Add <lastmod>${lastMod}</lastmod> tag and set priority order
   **/
  const token = await authenticate(process.env.CMS_USERNAME, process.env.CMS_PASSWORD);

  xml = await axios
    .post(
      API_SOURCE,
      {
        query: `{
        posts(limit: 999, sort: "date:desc", where: {isDraft: false}) {
          slug 
          updatedAt 
        }
      }`,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then(resp => {
      let { posts } = resp.data.data;
      posts.forEach((post, index) => {
        xml += '<url><loc>';
        xml += `${SITE_ROOT}/blog/${post.slug}`;
        xml += `</loc><lastmod>${dateTemplate(new Date(post.updatedAt))}</lastmod><changefreq>always</changefreq><priority>0.5</priority></url>`;
      });
      return xml;
    })
    .catch(error => {
      console.log(error.message, error.name);
    });

  xml = await axios
    .post(
      API_SOURCE,
      {
        query: `{
        hashtags(limit: 999, sort: "date:desc") {
          name 
          updatedAt 
        }
      }`,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then(resp => {
      let { hashtags } = resp.data.data;
      hashtags.forEach((hashtag, index) => {
        xml += '<url><loc>';
        xml += `${SITE_ROOT}/tag/${hashtag.name}`;
        xml += `</loc><lastmod>${dateTemplate(new Date(hashtag.updatedAt))}</lastmod><changefreq>always</changefreq><priority>0.5</priority></url>`;
        if (index === hashtags.length - 1) {
          xml += '</urlset>';
        }
      });
      return xml;
    })
    .catch(error => {
      console.log(error.message, error.name);
    });

  return xml

};

module.exports = { DESTINATION, createSitemap };
