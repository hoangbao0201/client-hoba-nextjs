import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/app.scss";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon-01.png" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
