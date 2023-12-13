
import styles from './page.module.css'
import  Calculation  from './components/calculation'


export default function Home() {

  return (
    <main className={styles.main}>
      <h1>test page</h1>
      <Calculation />
    </main>
  )
}
