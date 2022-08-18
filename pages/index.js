import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NewsApp - Home</title>
      </Head>
      <h1>Aprendiendo Next.js desde 0</h1>
    </div>
  )
}
