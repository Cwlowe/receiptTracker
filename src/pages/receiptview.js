import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Receiptview() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <main className={styles.main}>
          <h1>Receipt view</h1>
      </main>
    </div>
  )
}
