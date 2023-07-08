import styles from "@/styles/components/landing-page/Festival.module.css";
export default function Festival() {
  return (
    <>
    <div className={styles.texto }>
      <h1> O Festival</h1>
      <h1> 제전</h1>
      <p>
        O Festival Inkigayo é uma celebração vibrante e emocionante da música
        coreana, que atrai entusiastas e fãs de K-pop de todo o Nordeste. Sendo
        reconhecido como o maior festival desse gênero na região. O Inkigayo
        reúne artistas talentosos e amantes da cultura coreana em uma
        experiência inesquecível.
      </p>
      {/* img de reticiencias */}
      <p className={styles.quote}>
        “Lorem ipsum dolor sit amet consectetur. Diam semper est diam nunc
        egestas dui tincidunt sit.”
      </p>
      <p className={styles.autor}> Fulano, Ciclano</p>
      </div>
      {/* img do festival */}
    </>
  );
} 
