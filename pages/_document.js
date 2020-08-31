import Document, { Html, Head, Main, NextScript } from 'next/document'
import Heads from 'next/head'


export default class Mydocument extends Document {
    // * _Document.js adalah file khusus yang hanya akan digunakan Server Side 
    // * ---untuk merender HTML dasar aplikasi.
    // * nextJS automatic CODE Splitting
    // * automatic routing
    // * Ini diperlukan karena halaman Next.js melewatkan definisi markup dokumen di sekitarnya.
    // ! React components outside of <Main /> will not be initialized by the browser.
    // ! --Do not add application logic here. If you need shared components in all your pages (like a menu or a toolbar), take a look at the App component instead
    // * NextJS ->framework to make react SSR to load content first and after that load css
    // *  tetap index yang akan dirender
    // * It allows me to create some meta tags and provide links to external stylesheets.
    // * _document is only rendered on the server side and not on the client side
    // * Event handlers like onClick can't be added to this file

    render() {
        return (
            <Html lang="en">

                <Head>
                    <div>
                        {/* </Heads> */}
                        <Heads>
                            <meta name="viewport" content="width=device-width, maximum-scale=1, user-scalable=no, initial-scale=1, shrink-to-fit=no" />
                            <script src="https://use.fontawesome.com/9f735b2780.js"/>
                        </Heads>

                        <title>Hendrikus Adi - Home | Software Engineer</title>
                        <meta property="og:image" content="static/img/test2.jpg" />
                        <meta property="og:title" content="software engineer" />
                        <meta property="og:description" content="software engineer" />
                        <link rel="stylesheet" href="/static/fontawesome-free/css/all.min.css" />

                        <link rel="stylesheet" href="static/bootstrap/css/bootstrap.css" />
                        <link rel="stylesheet" href="static/bootstrap/css/bootstrap.min.css" />
                        <link rel="stylesheet" href="static/css/style.css" />
                        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap" rel="stylesheet" />

                        <script src="https://use.fontawesome.com/9f735b2780.js"></script>
                        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                    </div>
                </Head>
                <body className="body-back">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
