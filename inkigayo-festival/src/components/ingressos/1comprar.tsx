"use client";
import styles from "@/styles/components/ingresso/IngressoComprar.module.css";
import Image from "next/image";
import { useState } from "react";

interface IDays {
  [key: string]: {
    ingresso: string;
    valor: string;
  }[];
}

export default function IngressoCompras() {
  const [selectedDay, setSelectedDay] = useState<string>("sexta");

  const prices: IDays = {
    sexta: [
      { ingresso: "ARENA PISTA INTEIRA", valor: "R$ 459,99" },
      { ingresso: "ARENA PISTA MEIA-ESTRADA", valor: "R$ 229,99" },
      { ingresso: "CAMAROTE VIP", valor: "R$ 699,99" },
    ],
    sabado: [
      { ingresso: "ARENA PISTA INTEIRA", valor: "R$ 559,99" },
      { ingresso: "ARENA PISTA MEIA-ESTRADA", valor: "R$ 329,99" },
      { ingresso: "CAMAROTE VIP", valor: "R$ 799,99" },
    ],
    domingo: [
      { ingresso: "ARENA PISTA INTEIRA", valor: "R$ 659,99" },
      { ingresso: "ARENA PISTA MEIA-ESTRADA", valor: "R$ 429,99" },
      { ingresso: "CAMAROTE VIP", valor: "R$ 899,99" },
    ],
  };

  const [quantities, setQuantities] = useState<number[]>(
    Array(prices.sexta.length).fill(0)
  );

  function handleAddQuantity(index: number) {
    const totalSelected = quantities.reduce(
      (total, quantity) => total + quantity,
      0
    );
    if (totalSelected < 6) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] += 1;
      setQuantities(updatedQuantities);
    }
  }

  function handleSubtractQuantity(index: number) {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  }

  function calculateTotal(): number {
    let totalPrice = 0;
    const selectedPrices = prices[selectedDay];

    for (let i = 0; i < selectedPrices.length; i++) {
      const quantity = quantities[i];
      const priceString = selectedPrices[i].valor.replace("R$", "").trim();
      const price = parseFloat(priceString);
      totalPrice += quantity * price;
    }

    return totalPrice;
  }

  return (
    <>
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

      <section className={styles.cardsDays}>
        <ul className={styles.cardsDaysList}>
          <li
            className={`${styles.cardsDaysItem} ${
              selectedDay === "sexta" ? styles.selected : ""
            }`}
            onClick={() => setSelectedDay("sexta")}
          >
            <span className={styles.daystitle}>SEXTA-FEIRA</span>
            <span className={styles.datetitle}>Dia/Mês/Ano</span>
          </li>
          <li
            className={`${styles.cardsDaysItem} ${
              selectedDay === "sabado" ? styles.selected : ""
            }`}
            onClick={() => setSelectedDay("sabado")}
          >
            <span className={styles.daystitle}>SÁBADO</span>
            <span className={styles.datetitle}>Dia/Mês/Ano</span>
          </li>
          <li
            className={`${styles.cardsDaysItem} ${
              selectedDay === "domingo" ? styles.selected : ""
            }`}
            onClick={() => setSelectedDay("domingo")}
          >
            <span className={styles.daystitle}>DOMINGO</span>
            <span className={styles.datetitle}>Dia/Mês/Ano</span>
          </li>
        </ul>
      </section>

      <section className={styles.sectionIngresso}>
        <table className={styles.tableInfomationIngresso}>
          <tr className={styles.tableTitles}>
            <td className={styles.titleTable}>INGRESSO</td>
            <td className={styles.titleTable}>VALOR</td>
            <td className={styles.titleTable}>QUANTIDADE</td>
          </tr>
          {selectedDay === "sexta" &&
            prices.sexta.map((price, index) => (
              <>
                <hr className={styles.line} />
                <tr className={styles.tableItensList} key={index}>
                  <td className={styles.td}>{price.ingresso}</td>
                  <td className={styles.td}>{price.valor}</td>
                  <td className={styles.buttonAddSubtract}>
                    <div className={styles.buttonAddSubtract}>
                      <button
                        className={styles.btnMinus}
                        onClick={() => handleSubtractQuantity(index)}
                      >
                        −
                      </button>
                      <p className={styles.workTime}>{quantities[index]}</p>
                      <button
                        className={styles.btnPlus}
                        onClick={() => handleAddQuantity(index)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            ))}

          {selectedDay === "sabado" &&
            prices.sabado.map((price, index) => (
              <>
                <hr className={styles.line} />
                <tr className={styles.tableItensList} key={index}>
                  <td className={styles.td}>{price.ingresso}</td>
                  <td className={styles.td}>{price.valor}</td>
                  <td className={styles.buttonAddSubtract}>
                    <div className={styles.buttonAddSubtract}>
                      <button
                        className={styles.btnMinus}
                        onClick={() => handleSubtractQuantity(index)}
                      >
                        −
                      </button>
                      <p className={styles.workTime}>{quantities[index]}</p>
                      <button
                        className={styles.btnPlus}
                        onClick={() => handleAddQuantity(index)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>{" "}
              </>
            ))}

          {selectedDay === "domingo" &&
            prices.domingo.map((price, index) => (
              <>
                <hr className={styles.line} />
                <tr className={styles.tableItensList} key={index}>
                  <td className={styles.td}>{price.ingresso}</td>
                  <td className={styles.td}>{price.valor}</td>
                  <td className={styles.buttonAddSubtract}>
                    <div className={styles.buttonAddSubtract}>
                      <button
                        className={styles.btnMinus}
                        onClick={() => handleSubtractQuantity(index)}
                      >
                        −
                      </button>
                      <p className={styles.workTime}>{quantities[index]}</p>
                      <button
                        className={styles.btnPlus}
                        onClick={() => handleAddQuantity(index)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>{" "}
              </>
            ))}
        </table>

        <span className={styles.totalCart}>TOTAL: R$ {calculateTotal()}</span>
        <a href="#" className={styles.btnNext}>
          COMPRAR
        </a>
      </section>

      <section className={styles.Imagens}>
        <Image
          src="/imagens/ingressos/arena.png"
          alt="Mapa da Arena Fonte Nova"
          width={580}
          height={678}
        />
      </section>
    </>
  );
}
