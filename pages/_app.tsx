// pages/_app.tsx
import { AppProps } from 'next/app'; // Import AppProps
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) { // Type the props
  return (
    <>
      <Head>
        <title>SACRED Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
