import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Usman Hanafi | Portfolio</title>
        <meta name="description" content="Tholib Usman Hanafi Portfolio | Experience in frontend developer, fullstack developer, and project manajer." />
        <meta name="keywords" content="tholib, usman, hanafi, portfolio, frontend developer, fullstack developer, project manager, informatic system, utdi" />
        <meta name="author" content="Tholib Usman Hanafi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.usmanhanafi.github.io.com/" />
        <meta property="og:title" content="Usman Hanafi | Portfolio" />
        <meta property="og:description" content="Tholib Usman Hanafi Portfolio | Experience in frontend developer, fullstack developer, and project manajer." />
        <meta property="og:image" content="https://www.usmanhanafi.github.io.com/images/logo.svg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.usmanhanafi.github.io.com/" />
        <meta property="twitter:title" content="Usman Hanafi | Portfolio" />
        <meta property="twitter:description" content="Tholib Usman Hanafi Portfolio | Experience in frontend developer, fullstack developer, and project manajer." />
        <meta property="twitter:image" content="https://www.usmanhanafi.github.io.com/images/logo.svg" />

        {/* <!-- Theme Color --> */}
        <meta name="theme-color" content="#0C0C0C" />

        {/* <!-- Other Meta Tags -- /> */}
        <meta name="language" content="id"></meta>
      </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  );
}
