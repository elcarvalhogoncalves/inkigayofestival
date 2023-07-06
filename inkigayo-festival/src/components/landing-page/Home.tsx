import styles from '@/styles/components/landing-page/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <>
      <section className={styles.container}>

        <footer className={styles.footer}>
            <ul>
                <li><FontAwesomeIcon icon={faHome} /></li>
            </ul>
        </footer>
      </section>
    </>
  )
}
