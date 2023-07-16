"use client";
import styles from "@/styles/components/ingresso/IngressoSuccess.module.css";
import Image from "next/image";
import Link from "next/link";



export default function Sucesso() {
 
  return (
    <main className={styles.main}>
      <section className={styles.successSection}>
        <span className={styles.successTitle}>
          COMPRA FINALIZADA COM SUCESSO!
        </span>
        <div className={styles.pdfBox}>
          <p className={styles.successText}>Baixe seus ingressos</p>
          <Image
            className={styles.imagemPdfLogo}
            src="/imagens/ingressos/pdfLogo.svg"
            alt="Imagem ilustrativa do PDF"
            width={40}
            height={40}
          />
        </div>
        <Link href={"../meus-ingressos"}>
          <button className={styles.btnFinish}>VER MEUS INGRESSOS</button>
        </Link>
      </section>
    </main>
  );
}
