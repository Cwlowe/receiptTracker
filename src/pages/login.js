import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Login() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <main className={styles.main}>
          <div>Login Page</div>
      </main>
    </div>
  )
}
