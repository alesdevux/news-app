import Head from 'next/head'
import Link from 'next/link'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        <h1>Aprendiendo Next.js desde 0</h1>
        <Link href="/about">Ir a about</Link>
      </div>
    </PageLayout>
  )
}
