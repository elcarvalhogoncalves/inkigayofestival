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
          <li className={styles.li}>
            <Link href="https://twitter.com/inkigayofestival/" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#fff", height: "4.5rem", width: "5.5rem" }}
              />
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              href="https://www.instagram.com/inkigayofestival"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#fff", height: "5.5rem", width: "5.5rem" }}
              />
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              href="https://www.youtube.com/@inkigayofestival"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ color: "#fff", height: "3.85rem", width: "5.5rem" }}
              />
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              href="https://open.spotify.com/user/inkigayofestival"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faSpotify}
                style={{ color: "#fff", height: "5.5rem", width: "5.5rem" }}
              />
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              href="https://facebook.com/user/inkigayofestival"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#fff", height: "5.5rem", width: "5.5rem" }}
              />
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              href="https://tiktok.com/user/inkigayofestival"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                style={{ color: "#fff", height: "5.5rem", width: "5.5rem" }}
              />
            </Link>
          </li>
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
    </>
  );
}
