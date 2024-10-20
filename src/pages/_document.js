import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"

import { GA_TRACKING_ID } from "../lib/gtag"
import Script from "next/script"
export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <Script src="https://chat.pepsico-staging.onereach.ai/lib/richWebChat.umd.min.js" id={"rich-web"}></Script>
          <link
            rel="stylesheet"
            href="https://chat.pepsico-staging.onereach.ai/lib/richWebChat.css"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}

          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            id={"gtag"}
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
            id={"something"}
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@500&family=Roboto+Mono:ital,wght@1,500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/tb_50.png" type="image/icon type" />
          <meta property="og:url" content="https://www.Mukesh.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Mukesh Lohumi" />
          <meta name="twitter:card" content="summary" />
          <meta
            property="og:image"
            content="https://www.Mukesh.com/tb_50.png"
          />
          <meta
            property="og:description"
            content="Portfolio site of Mukesh Lohumi."
          />
          <meta
            name="description"
            content="Portfolio site of Mukesh Lohumi."
          ></meta>
          <meta
            name="og:keywords"
            content="HTML, CSS, NEXTJS, JavaScript, PHP, Python, Automation, Regex, JS"
          />
          <meta name="og:author" content="Mukesh Lohumi" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <div id="rwc"></div> {/* Insert the div for richWebChat */}
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              document.addEventListener("DOMContentLoaded", function () {
                var RWC = richWebChat.default;
                var app = new RWC({
                  container: '#rwc', // DOM element selector where chat will be inserted
                  chatUrl: 'https://chat.pepsico-staging.onereach.ai/3zeMP9wRQjSmCAIaqPYzmA/04t95qy?loader=light', // url of your chat. required
                  
                  appearance: {
                    blurredBackground: false,
                    resizeable: false,
                    draggable: true,
                    saveChatSize: true,
                  },
                  
                  widget: {
                    position: 'bottom-right',
                    animation: 'pulse', // 'pulse', 'ring', 'zoom',
                    color: '#409fec',
                    logoUrl: '',
                    revealDelay: 0,
                    openDelay: 15000,
                  },
                  
                  invitation: {
                    closeable: false,
                    imageUrl: '',
                    message: '',
                    buttonLabel: '',
                    appearDelay: 5000,
                  },
                  
                  pageData: {
                    fname: 'foo'
                  }
                });
              });
              `,
            }}
            id={"css"}
          />
          <NextScript />
        </body>
      </Html>
    )
  }
}
