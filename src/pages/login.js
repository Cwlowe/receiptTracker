import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Receipt Tracker</title>
        <meta name="description" content="Track all your receipts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div>Login Page</div>
      </main>
    </div>
  )
}
