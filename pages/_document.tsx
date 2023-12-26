import { Html, Main, Head, NextScript } from "next/document";
import React from "react";

const Document: React.FC = () => {
  return (
    <>
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          {/* Google Analytics Code */}
          <script async src={`${process.env.ANALYTICS_URL}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.ANALYTICS_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          {/* Google Adsense Code In Below */}
          <script async src={process.env.ADSENSE_URL} crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
};

export default Document;
