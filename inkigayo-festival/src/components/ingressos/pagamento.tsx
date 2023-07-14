"use client";
import styles from "@/styles/components/ingresso/IngressoPagamento.module.css";
import Image from "next/image";

interface Props {
  handleAvancar: () => void;
  handleVoltar: () => void;
}

type LoginFestival = {
  id: number;
  name: string;
  userId: number;
};

export default function IngressoPagamento({
  handleAvancar,
  handleVoltar,
}: Props) {
  return (
    <section className={styles.paymentSection}>
      <div className={styles.paymentTable}>
        <ul className={styles.titleSection}>
          <label className={styles.paymentTableTitle}>
            FORMAS DE PAGAMENTO
          </label>
        </ul>
        <ul className={styles.methodChoiceSection}>
          <hr className={styles.divider} />
          <li className={styles.li}>
            <input
              id="radio-1"
              type="radio"
              name="0"
              value="Cartao_de_Credito"
              className={styles.checkbox}
            />
            <Image
              className={styles.Image}
              src="/imagens/ingressos/cardLogo.svg"
              alt="Cartão de Crédito"
              width={47}
              height={47}
            />
            <label htmlFor="radio-1" className={styles.paymentMethod}>
              Cartão de Crédito
            </label>
          </li>
          <hr className={styles.divider} />
          <li className={styles.li}>
            <input
              id="radio-2"
              type="radio"
              name="0"
              value="Cartao_de_Debito"
              className={styles.checkbox}
            />
            <Image
              className={styles.Image}
              src="/imagens/ingressos/cardLogo.svg"
              alt="Cartão de Crédito"
              width={47}
              height={47}
            />
            <label htmlFor="radio-2" className={styles.paymentMethod}>
              Cartão de Débito
            </label>
          </li>
          <hr className={styles.divider} />
          <li className={styles.li}>
            <input
              id="radio-3"
              type="radio"
              name="0"
              value="GooglePlay"
              className={styles.checkbox}
            />
            <Image
              className={styles.Image}
              src="/imagens/ingressos/GooglePayLogo.svg"
              alt="GooglePlay"
              width={47}
              height={23}
            />
            <label htmlFor="radio-3" className={styles.paymentMethod}>
              GooglePlay
            </label>
          </li>
          <hr className={styles.divider} />
          <li className={styles.li}>
            <input
              id="radio-4"
              type="radio"
              name="0"
              value="PayPal"
              className={styles.checkbox}
            />
            <Image
              className={styles.Image}
              src="/imagens/ingressos/PayPalLogo.svg"
              alt="PayPal"
              width={47}
              height={47}
            />
            <label htmlFor="radio-4" className={styles.paymentMethod}>
              PayPal
            </label>
          </li>
          <hr className={styles.divider} />
          <li className={styles.li}>
            <input
              id="radio-5"
              type="radio"
              name="0"
              value="Pix"
              className={styles.checkbox}
            />
            <Image
              className={styles.Image}
              src="/imagens/ingressos/PixLogo.svg"
              alt="Pix"
              width={47}
              height={45}
            />
            <label htmlFor="radio-5" className={styles.paymentMethod}>
              Pix
            </label>
          </li>
        </ul>
      </div>
      <span className={styles.totalCart}>TOTAL: R$ 0,00</span>
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
  );
}
