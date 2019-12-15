import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
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
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preload" href={'/static/fonts/lato-v16-latin_latin-ext-300.woff2'} as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href={'/static/fonts/lato-v16-latin_latin-ext-300.woff'} as="font" type="font/woff" crossOrigin="anonymous" />
          <link rel="preload" href={'/static/fonts/lato-v16-latin_latin-ext-regular.woff2'} as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href={'/static/fonts/lato-v16-latin_latin-ext-regular.woff'} as="font" type="font/woff" crossOrigin="anonymous" />
          <link rel="preload" href={'/static/fonts/lato-v16-latin_latin-ext-700.woff2'} as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href={'/static/fonts/lato-v16-latin_latin-ext-700.woff'} as="font" type="font/woff" crossOrigin="anonymous" />
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
