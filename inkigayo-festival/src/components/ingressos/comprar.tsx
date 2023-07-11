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
      { ingresso: "ARENA PISTA INTEIRA", valor: "R$ 459,00" },
      { ingresso: "ARENA PISTA MEIA-ESTRADA", valor: "R$ 229,00" },
      { ingresso: "CAMAROTE VIP", valor: "R$ 699,00" },
    ],
    sabado: [
      { ingresso: "ARENA PISTA INTEIRA", valor: "R$ 559,00" },
      { ingresso: "ARENA PISTA MEIA-ESTRADA", valor: "R$ 329,00" },
      { ingresso: "CAMAROTE VIP", valor: "R$ 799,00" },
    ],
    domingo: [
      { ingresso: "ARENA PISTA INTEIRA", valor: "R$ 659,00" },
      { ingresso: "ARENA PISTA MEIA-ESTRADA", valor: "R$ 429,00" },
      { ingresso: "CAMAROTE VIP", valor: "R$ 899,00" },
    ],
  };

  const [quantitiesFriday, setQuantitiesFriday] = useState<number[]>([0, 0, 0]);
  const [quantitiesSaturday, setQuantitiesSaturday] = useState<number[]>([
    0, 0, 0,
  ]);
  const [quantitiesSunday, setQuantitiesSunday] = useState<number[]>([0, 0, 0]);

  function handleAddQuantityFriday(index: number) {
    const updatedQuantities = [...quantitiesFriday];
    const totalSelected = updatedQuantities.reduce(
      (total, quantity) => total + quantity,
      0
    );

    if (totalSelected < 3) {
      updatedQuantities[index] += 1;
      setQuantitiesFriday(updatedQuantities);
    }
  }

  function handleSubtractQuantityFriday(index: number) {
    const updatedQuantities = [...quantitiesFriday];

    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantitiesFriday(updatedQuantities);
    }
  }

  function handleAddQuantitySaturday(index: number) {
    const updatedQuantities = [...quantitiesSaturday];
    const totalSelected = updatedQuantities.reduce(
      (total, quantity) => total + quantity,
      0
    );

    if (totalSelected < 3) {
      updatedQuantities[index] += 1;
      setQuantitiesSaturday(updatedQuantities);
    }
  }

  function handleSubtractQuantitySaturday(index: number) {
    const updatedQuantities = [...quantitiesSaturday];

    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantitiesSaturday(updatedQuantities);
    }
  }

  function handleAddQuantitySunday(index: number) {
    const updatedQuantities = [...quantitiesSunday];
    const totalSelected = updatedQuantities.reduce(
      (total, quantity) => total + quantity,
      0
    );

    if (totalSelected < 3) {
      updatedQuantities[index] += 1;
      setQuantitiesSunday(updatedQuantities);
    }
  }

  function handleSubtractQuantitySunday(index: number) {
    const updatedQuantities = [...quantitiesSunday];

    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantitiesSunday(updatedQuantities);
    }
  }

  function calculateTotal(): number {
    let totalPrice = 0;

    const selectedPricesFriday = prices.sexta;
    const selectedPricesSaturday = prices.sabado;
    const selectedPricesSunday = prices.domingo;

    for (let i = 0; i < selectedPricesFriday.length; i++) {
      const quantityFriday = quantitiesFriday[i];
      const quantitySaturday = quantitiesSaturday[i];
      const quantitySunday = quantitiesSunday[i];

      const priceStringFriday = selectedPricesFriday[i].valor
        .replace("R$", "")
        .trim();
      const priceStringSaturday = selectedPricesSaturday[i].valor
        .replace("R$", "")
        .trim();
      const priceStringSunday = selectedPricesSunday[i].valor
        .replace("R$", "")
        .trim();

      const priceFriday = parseFloat(priceStringFriday);
      const priceSaturday = parseFloat(priceStringSaturday);
      const priceSunday = parseFloat(priceStringSunday);

      const totalFriday = quantityFriday * priceFriday;
      const totalSaturday = quantitySaturday * priceSaturday;
      const totalSunday = quantitySunday * priceSunday;

      totalPrice += totalFriday + totalSaturday + totalSunday;
    }

    return totalPrice;
  }

  return (
    <>
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
                <hr className={styles.divider} />
                <tr className={styles.tableItensList} key={index}>
                  <td className={styles.td}>{price.ingresso}</td>
                  <td className={styles.td}>{price.valor}</td>
                  <td className={styles.buttonAddSubtract}>
                    <div className={styles.buttonAddSubtract}>
                      <button
                        className={styles.btnMinus}
                        onClick={() => handleSubtractQuantityFriday(index)}
                        disabled={quantitiesFriday[index] === 0}
                      >
                        −
                      </button>
                      <p className={styles.workTime}>
                        {quantitiesFriday[index]}
                      </p>
                      <button
                        className={styles.btnPlus}
                        onClick={() => handleAddQuantityFriday(index)}
                        disabled={
                          quantitiesFriday.reduce(
                            (total, quantity) => total + quantity,
                            0
                          ) >= 3
                        }
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
                <hr className={styles.divider} />
                <tr className={styles.tableItensList} key={index}>
                  <td className={styles.td}>{price.ingresso}</td>
                  <td className={styles.td}>{price.valor}</td>
                  <td className={styles.buttonAddSubtract}>
                    <div className={styles.buttonAddSubtract}>
                      <button
                        className={styles.btnMinus}
                        onClick={() => handleSubtractQuantitySaturday(index)}
                        disabled={quantitiesSaturday[index] === 0}
                      >
                        −
                      </button>
                      <p className={styles.workTime}>
                        {quantitiesSaturday[index]}
                      </p>
                      <button
                        className={styles.btnPlus}
                        onClick={() => handleAddQuantitySaturday(index)}
                        disabled={
                          quantitiesSaturday.reduce(
                            (total, quantity) => total + quantity,
                            0
                          ) >= 3
                        }
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
                <hr className={styles.divider} />
                <tr className={styles.tableItensList} key={index}>
                  <td className={styles.td}>{price.ingresso}</td>
                  <td className={styles.td}>{price.valor}</td>
                  <td className={styles.buttonAddSubtract}>
                    <div className={styles.buttonAddSubtract}>
                      <button
                        className={styles.btnMinus}
                        onClick={() => handleSubtractQuantitySunday(index)}
                        disabled={quantitiesSunday[index] === 0}
                      >
                        −
                      </button>
                      <p className={styles.workTime}>
                        {quantitiesSunday[index]}
                      </p>
                      <button
                        className={styles.btnPlus}
                        onClick={() => handleAddQuantitySunday(index)}
                        disabled={
                          quantitiesSunday.reduce(
                            (total, quantity) => total + quantity,
                            0
                          ) >= 3
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>{" "}
              </>
            ))}
        </table>

        <span className={styles.totalCart}>
          TOTAL: R${" "}
          {calculateTotal().toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
        <a href="#" className={styles.btnNext}>
          COMPRAR
        </a>
      </section>
      <div className={styles.imagemArena}>
        <Image
          src="/imagens/ingressos/arena.png"
          alt="Mapa da Arena Fonte Nova"
          width={580}
          height={678}
        />
      </div>
    </>
  );
}
