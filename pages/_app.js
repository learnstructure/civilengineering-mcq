import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <link rel='shortcut icon' href='/favicon.JPG' />
    </Head>
    <Navbar />
    <Component {...pageProps} />
  </>)
}
