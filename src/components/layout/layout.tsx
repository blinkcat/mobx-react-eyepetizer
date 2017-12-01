import * as React from 'react';
import Head from 'next/head';

export default ({ children, title = 'react-eyepetizer' }) => (
  <div className="app">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge,chrome=1" />
      <link
        rel="shortcut icon"
        href="http://www.kaiyanapp.com/favicon.ico"
        type="image/vnd.microsoft.icon"
      />
    </Head>
    {children}
    <style jsx global>{`
      * {
        box-sizing: border-box;
        outline: none;
      }
      body,
      html {
        height: 100%;
      }
      body {
        margin: 0;
        font-family: Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Helvetica Neue, Helvetica,
          Arial, sans-serif;
        font-size: 13px;
        line-height: 1.5;
      }
    `}</style>
  </div>
);
