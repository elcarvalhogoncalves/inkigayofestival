"use client";
import { useState } from "react";

import styles from "@/styles/components/ingresso/Ingresso.module.css";
import Navbar from "@/components/ui/Navbar";
import IngressoCompras from "@/components/ingressos/comprar";
import IngressoPagamento from "@/components/ingressos/pagamento";
import IngressoFinalizar from "@/components/ingressos/finalizar";

export default function Ingresso() {
  const [etapaAtual, setEtapaAtual] = useState(1);

  const handleAvancar = () => {
    setEtapaAtual(etapaAtual + 1);
  };

  const handleVoltar = () => {
    setEtapaAtual(etapaAtual - 1);
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.stepWizard}>
        <ul className={styles.stepWizardList}>
          <li className={styles.stepWizardItem}>
            <span
              className={`${styles.progressCount}  ${
                etapaAtual === 1 ? styles.progressCountActive : ""
              }`}
            >
              1
            </span>
            <span className={styles.progressLabel}>Comprar Ingresso(s)</span>
          </li>

          <li className={styles.stepWizardItem}>
            <span
              className={`${styles.progressCount}  ${
                etapaAtual === 2 ? styles.progressCountActive : ""
              }`}
            >
              2
            </span>
            <span className={styles.progressLabel}>Pagamento</span>
          </li>

          <li className={styles.stepWizardItem}>
            <span
              className={`${styles.progressCount}  ${
                etapaAtual === 3 ? styles.progressCountActive : ""
              }`}
            >
              3
            </span>
            <span className={styles.progressLabel}>Finalizar</span>
          </li>
        </ul>
      </section>
      {etapaAtual === 1 && <IngressoCompras handleAvancar={handleAvancar} />}
      {etapaAtual === 2 && (
        <IngressoPagamento
          handleAvancar={handleAvancar}
          handleVoltar={handleVoltar}
        />
      )}
      {etapaAtual === 3 && <IngressoFinalizar handleVoltar={handleVoltar} />}
    </main>
  );
}
