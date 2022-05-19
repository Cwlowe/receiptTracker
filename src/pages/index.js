import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Head>
        <title>Receipt Tracker</title>
        <meta name="description" content="Track all your receipts" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
      </Head>
      <main className={styles.main}>
          <h1>Hello world this is the main pages</h1>
      </main>
    </div>
  )
}
