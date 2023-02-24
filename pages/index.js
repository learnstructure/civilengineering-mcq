import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Civil mcq</title>
        <meta name="civil engineering mcq" content="practise civil engineering mcq" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <main className={styles.main}>
        This is home page
      </main>
    </>
  )
}
