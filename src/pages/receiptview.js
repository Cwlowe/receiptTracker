import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Receiptview() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Receipt Tracker</title>
        <meta name="description" content="Track all your receipts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h1>Receipt view</h1>
      </main>
    </div>
  )
}
