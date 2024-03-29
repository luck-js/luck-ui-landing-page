import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="preload"
            href={'/static/fonts/lato-v16-latin_latin-ext-300.woff2'}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={'/static/fonts/lato-v16-latin_latin-ext-regular.woff2'}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={'/static/fonts/lato-v16-latin_latin-ext-700.woff2'}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
