import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faSpotify,
  faYoutube,
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import styles from "@/styles/components/ui/Footer.module.css";
export default function Footer() {
  return (
    <>
    <section className={styles.container}>
        <div className={styles.up}>
          <h1 className={styles.h1}> ASSINE NOSSA NEWSLETTER</h1>
          <h2 className={styles.h2}>
            {" "}
            Receba nossas novidades em primeira mão
          </h2>{" "}
        </div>

        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            id="email"
            name="email"
            placeholder="Digite o seu Email"
          />
          <button className={styles.buttonEnviar}>ENVIAR</button>
        </div>

        <footer className={styles.bottom}>
          <div className={styles.iconLine}>
            <Link href="https://twitter.com/inkigayofestival/" target="_blank">
              <div className={styles.twitter}>
              </div>
            </Link>
            <Link href="https://www.instagram.com/inkigayofestival" target="_blank">
              <div className={styles.instagram}>
              </div>
            </Link>
            <Link href="https://www.youtube.com/@inkigayofestival" target="_blank">
              <div className={styles.youtube}>
              </div>
            </Link>
            <Link href="https://open.spotify.com/user/inkigayofestival" target="_blank">
              <div className={styles.spotify}>
              </div>
            </Link>
            <Link href="https://facebook.com/user/inkigayofestival" target="_blank">
              <div className={styles.facebook}>
              </div>
            </Link>
            <Link href="https://tiktok.com/user/inkigayofestival" target="_blank">
              <div className={styles.tiktok}>
              </div>
            </Link>
          </div>
          <div className={styles.infos}>
            <div className={styles.info1}>
              <p className={styles.p}>Política de Privacidade</p>
              <p className={styles.p}> Termos e Condições</p>
            </div>
            <div className={styles.info2}>
              <p className={styles.p}> Patrocinadores</p>
              <p className={styles.p}> Ajuda </p>
            </div>
            <div className={styles.info3}>
              <p className={styles.p}> Produtos Oficiais </p>
              <p className={styles.p}> Trabalhe conosco </p>
            </div>
          </div>
        </footer>


    </section>
    </>
  );
}
