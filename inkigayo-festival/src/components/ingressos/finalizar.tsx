"use client";
import Loading from "@/app/loading";
import styles from "@/styles/components/ingresso/IngressoFinalizar.module.css";
import Image from "next/image";
import { useState } from "react";

interface Props {
  handleVoltar: () => void;
  handleAvancar: () => void;
  handleCart: Cart;
}
interface typeTicket{
  dia: string;
  nome: string;
  preco: number;
  quantidade: number;
}

interface Cart {
  name: string;
  total: number;
  quantity: number;
  metodoPagamento: string;
  tiposIngresso: string;
  userEmail: string;
  cart: typeTicket[];
}

export default function IngressoFinalizar({
  handleAvancar,
  handleVoltar,
  handleCart,
}: Props) {
  const infoCart = handleCart;
  const totalFloat = infoCart.total.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const [isLoading, setLoading] = useState(false);
  async function handleA() {
      setLoading(true);
      const data = await fetch("./api/cart", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  userEmail: infoCart.userEmail,
                  cart: infoCart.cart,
              }),
          });
      if(data.ok) {
        setLoading(false);
        handleAvancar();
      } else {
        setLoading(false);
        console.log(data);
      }
  }

  // console.log(infoCart);
  if(isLoading) {
    return <Loading />
  }
  return (
    <main className={styles.main}>
      <section className={styles.finalSection}>
        <span className={styles.pageTitle}>
          Confira as Informações do seu Pedido
        </span>
        <hr className={styles.dividerBox} />
        <div className={styles.informationTable}>
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
              Valor total: R$ {totalFloat}
            </li>
            <li className={styles.informationListItem}>
              Método de pagamento: {infoCart.metodoPagamento}
            </li>
          </ul>
        </div>
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
          <button className={styles.btnNext} onClick={handleA}>
            FINALIZAR COMPRA
          </button>
        </aside>
      </section>
    </main>
  );
}
