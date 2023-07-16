import styles from "@/styles/components/landing-page/Festival.module.css";
import Image from "next/image";

export default function Festival() {
  return (
    <>
      <section className={styles.container} id="o_festival">
        <div className={styles.body}>
          <div className={styles.texto}>
            <div className={styles.title}>
              <h1> O FESTIVAL</h1>
            </div>
            <p className={styles.desc}>
              O <span className={styles.colortext}>Festival Inkigayo </span> é
              uma celebração vibrante e emocionante da música coreana, que atrai
              entusiastas e{" "}
              <span className={styles.colortext}>
                {" "}
                fãs de K-pop de todo o Nordeste
              </span>
              . Sendo reconhecido como o maior festival desse gênero na região.{" "}
              <span className={styles.colortext}>O Inkigayo </span> reúne
              artistas talentosos e amantes da cultura coreana em uma
              experiência inesquecível.
            </p>
            <div className={styles.quote}>
              <p className={styles.frase}>
                “Maior festival de música coreana na américa latina. Reune os
                maiores artistas coreanos da atualidade.”
              </p>
              <p className={styles.autor}>CORREIO DA BAHIA</p>
            </div>
          </div>
          <div className={styles.image}>
            <div className={styles.image_shadow}></div>
          </div>
        </div>
      </section>
    </>
  );
} 