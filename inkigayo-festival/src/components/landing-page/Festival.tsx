import styles from "@/styles/components/landing-page/Festival.module.css";
import foto from "@/../public/imagens/festival.svg"
import Image from "next/image";

export default function Festival() {
  return (
    <> 
    <div className={styles.body} id="#o_festival">
    <div className={styles.texto }>
      <div className={styles.title}>
        <h1> O Festival</h1>
        <h1> 제전</h1> 
      </div>
      <p className={styles.desc}>
        O  <span className={styles.colortext}>Festival Inkigayo </span> é uma celebração vibrante e emocionante da música
        coreana, que atrai entusiastas e <span className={styles.colortext}> fãs de K-pop de todo o Nordeste</span>. Sendo
        reconhecido como o maior festival desse gênero na região. <span className={styles.colortext}>O Inkigayo </span> reúne artistas talentosos e amantes da cultura coreana em uma
        experiência inesquecível.
      </p>
      {/* img de reticiencias */}
      <div className={styles.quote}>
        <p className={styles.frase}>
        “Lorem ipsum dolor sit amet consectetur. Diam semper est diam nunc
        egestas dui tincidunt sit.”
        </p>
        <p className={styles.autor}> FULANO, CICLANO</p>
        </div>
      </div>
      
      <figure className={styles.image}>
        <Image src={foto} width={630} height={832} />
      </figure>
    </div>
    </>
  );
} 
