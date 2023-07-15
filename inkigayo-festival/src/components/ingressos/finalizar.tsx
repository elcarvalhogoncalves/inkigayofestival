"use client";
import styles from "@/styles/components/ingresso/IngressoFinalizar.module.css";
import Image from "next/image";

interface Props {
  handleVoltar: () => void;
  handleAvancar: () => void;
  handleCart: Cart;
}
interface Cart {
  name: string;
  total: number;
  quantity: number;
  metodoPagamento: string;
  tiposIngresso: string;
}

export default function IngressoFinalizar({
  handleAvancar,
  handleVoltar,
  handleCart,
}: Props) {
  const infoCart = handleCart;
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
            <li className={styles.informationListItem}>
              Nome: {infoCart.name}
            </li>
            <li className={styles.informationListItem}>
              Tipo(s) de Ingresso(s): {infoCart.tiposIngresso}
            </li>
            <li className={styles.informationListItem}>
              Quantidade de ingressos: {infoCart.quantity}
            </li>
            <li className={styles.informationListItem}>
              Valor total: R$ {infoCart.total}
            </li>
            <li className={styles.informationListItem}>
              Método de pagamento: {infoCart.metodoPagamento}
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
          <button className={styles.btnNext} onClick={handleAvancar}>
            FINALIZAR COMPRA
          </button>
        </aside>
      </section>
    </>
  );
}
