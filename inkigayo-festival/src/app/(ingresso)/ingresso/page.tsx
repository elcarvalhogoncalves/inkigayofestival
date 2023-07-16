"use client";
import { useState } from "react";

import styles from "@/styles/components/ingresso/Ingresso.module.css";
import Navbar from "@/components/ui/Navbar";
import IngressoCompras from "@/components/ingressos/comprar";
import IngressoPagamento from "@/components/ingressos/pagamento";
import IngressoFinalizar from "@/components/ingressos/finalizar";
import Sucesso from "@/components/ingressos/success";

import { signIn, signOut, useSession } from "next-auth/react"
import { redirect } from 'next/navigation'
import Loading from "@/app/loading";

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

export default function Ingresso() {
  const { data: session, status } = useSession()

  const [carrinho, setCarrinho] = useState<Cart>({
    name: "string",
    total: 0,
    quantity: 0,
    metodoPagamento: "string",
    tiposIngresso: "string",
    userEmail: "string",
    cart: [],
  });
  const [total, setTotal] = useState(0);
  const [etapaAtual, setEtapaAtual] = useState(1);

  const handleTotal = (total: number) => {
    setTotal(total);
  };

  const handleCart = (object: Cart) => {
    // console.log(object, "Ola AnaPoli");
    setCarrinho(object);
  };

  const handlePagamento = (pgt: string) => {
    const aux = carrinho;
    aux["name"] = session.user.name;
    aux["metodoPagamento"] = pgt;
    aux["userEmail"] = session.user.email;
    setCarrinho(aux);
  };

  const handleAvancar = () => {
    setEtapaAtual(etapaAtual + 1);
  };

  const handleVoltar = () => {
    setEtapaAtual(etapaAtual - 1);
  };

  if (status === "loading") {
    return <Loading/>
  }

  if(status === "unauthenticated"){
    redirect('../login')
  }

  return (
    <main className={styles.main}>
      <section className={styles.stepWizard}>
        <ul className={styles.stepWizardList}>
          <li className={styles.stepWizardItem}>
            <span
              className={`${styles.progressCount}  ${
                etapaAtual === 1 ? styles.progressCountActive : ""
              }
              ${etapaAtual === 2 && styles.progressCountActive}
              ${etapaAtual === 3 && styles.progressCountActive}
              ${etapaAtual === 4 && styles.progressCountActiveSucesso}`}
            >
              1
            </span>
            <span className={styles.progressLabel}>Comprar Ingresso(s)</span>
          </li>

          <li className={styles.stepWizardItem}>
            <span
              className={`${styles.progressCount}  ${
                etapaAtual === 2 ? styles.progressCountActive : ""
              }
              ${etapaAtual === 3 && styles.progressCountActive}
              ${etapaAtual === 4 && styles.progressCountActiveSucesso}
              `}
            >
              2
            </span>
            <span className={styles.progressLabel}>Pagamento</span>
          </li>

          <li className={styles.stepWizardItem}>
            <span
              className={`${styles.progressCount}  ${
                etapaAtual === 3 ? styles.progressCountActive : ""
              }
              ${etapaAtual === 4 && styles.progressCountActiveSucesso}
              `}
            >
              3
            </span>
            <span className={styles.progressLabel}>Finalizar</span>
          </li>
        </ul>
      </section>
      {etapaAtual === 1 && (
        <IngressoCompras
          handleAvancar={handleAvancar}
          totalPrice={handleTotal}
          objectCart={handleCart}
        />
      )}
      {etapaAtual === 2 && (
        <IngressoPagamento
          totalPrice={total}
          handleAvancar={handleAvancar}
          handleVoltar={handleVoltar}
          handlePagamento={handlePagamento}
        />
      )}
      {etapaAtual === 3 && (
        <IngressoFinalizar
          handleAvancar={handleAvancar}
          handleVoltar={handleVoltar}
          handleCart={carrinho}
        />
      )}
      {etapaAtual === 4 && <Sucesso />}
    </main>
  );
}
