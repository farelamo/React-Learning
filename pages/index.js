import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#menus">Next.js!</a>
        </h1>
      </main>

      <div id='menus'>
        <Link href={'/'}>
          <h4>Home</h4>
        </Link>
        <Link href={'/blog'}>
          <h4>Blog</h4>
        </Link>
        <Link href={'/blog/1/comment/2'}>
          <h4>Comment</h4>
        </Link>
      </div>
    </div>
  )
}
