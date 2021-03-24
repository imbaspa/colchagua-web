import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colchagua Club de Fútbol</title>
      </Head>

      <main className={styles.main}>
        <img src='/img/colchagua.png'></img>
        <h1>Sitio en contrucción</h1>
      </main>

    </div>
  )
}
