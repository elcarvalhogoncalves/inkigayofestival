"use client";
import styles from "@/styles/components/landing-page/LineUp.module.css";
import React, { useState } from "react";
import título from "@/../../public/imagens/títulos_coreanos/Line-up.svg"
import Image from "next/dist/client/image";

export default function LineUp() {
  const [Dia, setDia] = useState("sexta"); //cada número um card


  const showbts = false;
  console.log(Dia);
  return (
    <>
      <section className={styles.container} id="#line_up">
        <div className={styles.body}>
          <div className={styles.title}>
            <h1> LINE-UP</h1>
          </div>
          <div className={styles.dias}>
            <button className={styles.date} onClick={() => setDia("sexta")}>
              <h1>SEXTA</h1>
              <p>08 DE SETEMBRO</p>
            </button>
            <button className={styles.date} onClick={() => setDia("sabado")}>
              <h1>SÁBADO</h1>
              <p>09 DE SETEMBRO</p>
            </button>
            <button className={styles.date} onClick={() => setDia("domingo")}>
              <h1>DOMINGO</h1>
              <p>10 DE SETEMBRO</p>
            </button>
          </div>
          <div className={styles.cards}>
            {Dia === "sexta" && (
              <>
                <div className={styles.Psy} >
                  <h1> PSY </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Diam semper est diam
                    nunc egestas dui tincidunt sit
                  </p>
                </div>
                <div className={styles.aespa} >
                  <h1> AESPA </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Diam semper est diam
                    nunc egestas dui tincidunt sit
                  </p>
                </div>
                <div className={styles.EXO} id="EXO">
                  <h1> EXO </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Diam semper est diam
                    nunc egestas dui tincidunt sit
                  </p>
                </div>
              </>
            )}
            {Dia === "sabado" && (
              <>
                <div className={styles.Twice}>
                  <h1> TWICE </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Diam semper est diam
                    nunc egestas dui tincidunt sit
                  </p>
                </div>
                <div className={styles.Jungkook}>
                  <h1> JUNGKOOK</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Diam semper est diam
                    nunc egestas dui tincidunt sit
                  </p>
                </div>
                <div className={styles.Loona}>
                  <h1> LOONA </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Diam semper est diam
                    nunc egestas dui tincidunt sit
                  </p>
                </div>
              </>
            )}
            {Dia === "domingo" && (
              <>
                <div className={styles.IU}>
                  <h1> IU </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Diam semper est diam
                    nunc egestas dui tincidunt sit
                  </p>
                </div>
                <div className={styles.BP}>
                  <h1> BLACKPINK </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Diam semper est diam
                    nunc egestas dui tincidunt sit
                  </p>
                </div>
                <div className={styles.BTS}>
                  <h1> BTS </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Diam semper est diam
                    nunc egestas dui tincidunt sit
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
