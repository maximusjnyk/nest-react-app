import { Head, Main, NextScript } from "next/document";


export default function Document() {
    return (
        <html lang='en'>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;900&family=Roboto:wght@100;300;400;500&display=swap"
                rel="stylesheet"/>

            <meta name='theme-color' content='#13E786'/>
            <meta name='msapplication-navbutton-color' content='#cd3a42'/>
            <meta name='apple-mobile-web-app-status-bar-style' content='#cd3a42'/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
        </html>
    )
}