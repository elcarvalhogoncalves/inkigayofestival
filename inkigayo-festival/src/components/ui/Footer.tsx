import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faSpotify,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "@/styles/components/ui/Footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={styles.up}>
        <h1> ASSINE NOSSA NEWSLETTER</h1>
        <h2> Receba nossas novidades em primeira mão</h2>{" "}
      </div>

      <div className={styles.input}>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Digite o seu Email"
        />
        <button className={styles.botao}>Enviar</button>
      </div>

      <footer className={styles.bottom}>
        <div className={styles.iconLine}>
          <li>
            <Link href="https://twitter.com/inkigayofestival/" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#fff", height: "2.5rem", width: "3rem" }}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/inkigayofestival"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#fff", height: "3rem", width: "3rem" }}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/@inkigayofestival"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ color: "#fff", height: "2.1rem", width: "3rem" }}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://open.spotify.com/user/inkigayofestival"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faSpotify}
                style={{ color: "#fff", height: "3rem", width: "3rem" }}
              />
            </Link>
          </li>
        </div>
        <div className={styles.infos}>
          <div className={styles.info1}>
            <p>Política de Privacidade</p>
            <p> Termos e Condições</p>
          </div>
          <div className={styles.info2}>
            <p> Patrocinadores</p>
            <p> Ajuda </p>
          </div>
          <div className={styles.info3}>
            <p> Produtos Oficiais </p>
            <p> Trabalhe conosco </p>
          </div>
        </div>
      </footer>
    </>
  );
}
