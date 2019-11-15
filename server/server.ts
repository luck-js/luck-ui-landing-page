// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
// @ts-ignore
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const fs = require('fs');
const { DESTINATION, createSitemap } = require('./sitemap');

const robots = `User-agent: *
Allow: /
Host: https://luck.org.pl
`;

const ROUTE_MAP: { [key: string]: string[] } = {
  'bot-politics': ['polityka-prywatnosci-pan-mikolaj-luck'],
  'webiste-politics': ['polityka-prywatnosci-strony'],
  blog: ['posts', 'posty'],
};

app.prepare().then(() => {
  createServer((req: { url: any }, res: any) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    const isRendered = Object.keys(ROUTE_MAP).some(key => {
      if (ROUTE_MAP[key].some(p => pathname === `/${p}`)) {
        app.render(req, res, `/${key}`, query);
        return true;
      }
    });

    if (isRendered) return;

    if (pathname === '/robots.txt') {
      res.statusCode = 200;
      res.write(robots);
      res.end();
    } else if (pathname === '/sitemap.xml') {
      res.setHeader('Content-Type', 'application/xml');
      (async function sendXML() {
        let xmlFile = await createSitemap();
        // Send it to the browser
        res.statusCode = 200;
        res.write(xmlFile);
        // Create a file on the selected destination
        fs.writeFileSync(DESTINATION, xmlFile);
        res.end();
      })();
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err: any) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
