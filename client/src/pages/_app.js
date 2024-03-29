import Head from 'next/head';
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Music Player</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}