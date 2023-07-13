"use client";
import styles from "@/styles/components/ingresso/IngressoFinalizar.module.css";
import Image from "next/image";

interface Props {
  handleVoltar: () => void;
}

export default function IngressoFinalizar({ handleVoltar }: Props) {
  return (
    <>
      <section className={styles.finalSection}>
        <span className={styles.pageTitle}>
          Confira as Informações do seu Pedido
        </span>
        <hr className={styles.dividerBox} />
        <table className={styles.informationTable}>
          <label className={styles.tableTitle}>INFORMAÇÕES DO PEDIDO</label>
          <ul className={styles.informationList}>
            <li className={styles.informationListItem}>Nome: Fulano de Tal</li>
            <li className={styles.informationListItem}>
              Tipo(s) de Ingresso(s): Arena Pista Inteira, Arena Pista
              Meia-Entrada
            </li>
            <li className={styles.informationListItem}>
              Quantidade de ingressos: 2
            </li>
            <li className={styles.informationListItem}>
              Valor total: R$ 687,00
            </li>
            <li className={styles.informationListItem}>
              Método de pagamento: Cartão de Débito
            </li>
          </ul>
        </table>
        <aside className={styles.buttonsContainer}>
          <button className={styles.btnBack} onClick={handleVoltar}>
            <Image
              className={styles.ImageBtn}
              src="/imagens/ingressos/btnBack.svg"
              alt="GooglePlay"
              width={56}
              height={56}
            />
            Voltar
          </button>
          <button className={styles.btnNext}>FINALIZAR COMPRA</button>
        </aside>
      </section>
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
      </section>
    </>
  );
}