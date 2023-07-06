import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faSpotify, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from '@/styles/components/landing-page/Home.module.css'

export default function Home() {
  return (
    <>  
      
      <section className={styles.container}>
        <div className={styles.bottom_gradient}>
          <ul className={styles.social_medias}>
            <li><Link href="https://twitter.com/inkigayofestival/" target='_blank'><FontAwesomeIcon icon={faTwitter} style={{color: '#fff', height: '2.5rem', width: '3rem'}} /></Link></li>
            <li><Link href="https://www.instagram.com/inkigayofestival" target='_blank'><FontAwesomeIcon icon={faInstagram} style={{color: '#fff', height: '3rem', width: '3rem'}} /></Link></li>
            <li><Link href="https://www.youtube.com/@inkigayofestival" target='_blank'><FontAwesomeIcon icon={faYoutube} style={{color: '#fff', height: '2.1rem', width: '3rem'}} /></Link></li>
            <li><Link href="https://open.spotify.com/user/inkigayofestival" target='_blank'><FontAwesomeIcon icon={faSpotify} style={{color: '#fff', height: '3rem', width: '3rem'}} /></Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}