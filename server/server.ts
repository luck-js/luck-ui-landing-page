// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
// @ts-ignore
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT ? process.env.PORT : 9000;
const app = next({ dev });
const handle = app.getRequestHandler();

const fs = require('fs');
const { DESTINATION, createSitemap } = require('./sitemap');
const { getKeyByPathname } = require('./utils');

console.log('dev: ', dev);
console.log('port: ', port);

const robots = `User-agent: *
Allow: /
Host: https://luck.org.pl
`;

app.prepare().then(() => {
  createServer((req: { url: any }, res: any) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    const key = getKeyByPathname(pathname);

    if (key) {
      app.render(req, res, `/${key}`, query);
    } else if (pathname === '/robots.txt') {
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
  }).listen(port, (err: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
