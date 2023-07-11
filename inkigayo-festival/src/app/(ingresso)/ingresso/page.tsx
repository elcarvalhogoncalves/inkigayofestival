import styles from "@/styles/components/ingresso/Ingresso.module.css";
import Navbar from "@/components/ui/Navbar";
import IngressoCompras from "@/components/ingressos/comprar";
import IngressoPagamento from "@/components/ingressos/pagamento";
import IngressoFinalizar from "@/components/ingressos/finalizar";

export default function Ingresso() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.stepWizard}>
        <ul className={styles.stepWizardList}>
          <li className={styles.stepWizardItem}>
            <span className={styles.progressCount}>1</span>
            <span className={styles.progressLabel}>Comprar Ingresso(s)</span>
          </li>

          <li className={styles.stepWizardItem}>
            <span className={styles.progressCount}>2</span>
            <span className={styles.progressLabel}>Pagamento</span>
          </li>

          <li className={styles.stepWizardItem}>
            <span className={styles.progressCount}>3</span>
            <span className={styles.progressLabel}>Finalizar</span>
          </li>
        </ul>
      </section>
      <IngressoCompras />
      <IngressoPagamento />
      <IngressoFinalizar />
    </main>
  );
}
