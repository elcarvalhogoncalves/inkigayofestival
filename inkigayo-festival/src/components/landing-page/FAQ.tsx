"use client";
import Image from "next/dist/client/image";
import styles from "@/styles/components/landing-page/FAQ.module.css";
import React, { useState } from "react";
import setaCima from "@/../public/imagens/setas/seta-cima.svg";
import setaBaixo from "@/../public/imagens/setas/seta-baixo.svg";
import Festival from "./Festival";

export default function FAQ() {
  const [Q1, setQ1] = useState(false);
  const [Q2, setQ2] = useState(false);
  const [Q3, setQ3] = useState(false); //const q pra mostrar ou n resposta dos cards
  const [S1, setSeta1] = useState(setaBaixo);
  const [S2, setSeta2] = useState(setaBaixo);
  const [S3, setSeta3] = useState(setaBaixo);

  function toggleS(S: boolean) {
    if (S === true) {
      return setaBaixo;
    } else {
      return setaCima;
    }
  }

  function toggleQ(Q: string) {
    let n = 0;
    if (Q === "Q1") {
      setQ1(!Q1);
      setSeta1(toggleS(Q1));
    }
    if (Q === "Q2") {
      setQ2(!Q2);
      setSeta2(toggleS(Q2));
    }
    if (Q === "Q3") {
      setQ3(!Q3);
      setSeta3(toggleS(Q3));
    }
  }
  return (
    <>
      <section className={styles.conteiner} id="faq">
        <div className={styles.body}>
          <div className={styles.title}>
            <h1 className={styles.h1}>F.A.Q</h1>
          </div>
          <div className={styles.FAQ}>
            <div className={styles.QandA}>
              <div className={styles.question}>
                <h2 className={styles.h2}>
                  {" "}
                  O que é o{" "}
                  <span className={styles.colortext}>Festival Inkigayo?</span>
                </h2>
                <button onClick={() => toggleQ("Q1")}>
                  <Image src={S1} alt="o que é isso?" />
                </button>
              </div>
              {Q1 === true && (
                <>
                  <div className={styles.answer}>
                    O Festival Inkigayo é uma celebração vibrante e emocionante
                    da música coreana, que atrai entusiastas e fãs de K-pop de
                    todo o Nordeste. Sendo reconhecido como o maior festival
                    desse gênero na região. O Inkigayo reúne artistas talentosos
                    e amantes da cultura coreana em uma experiência
                    inesquecível.
                  </div>
                </>
              )}
            </div>
            <div className={styles.QandA}>
              <div className={styles.question}>
                <h2 className={styles.h2}>
                  {" "}
                  Quando e Onde será o{" "}
                  <span className={styles.colortext}>Festival Inkigayo?</span>
                </h2>
                <button onClick={() => toggleQ("Q2")}>
                  <Image src={S2} alt="o que é isso?" />{" "}
                </button>
              </div>
              {Q2 === true && (
                <>
                  <div className={styles.answer}>
                    O Festival Inkigayo será realizado em na Itaipava Arena
                    Fonte Nova, em Salvador, nos dias 08, 09 e 10 de Setembro.
                  </div>
                </>
              )}
            </div>
            <div className={styles.QandA}>
              <div className={styles.question}>
                <h2 className={styles.h2}>
                  {" "}
                  Quais serão as atrações do{" "}
                  <span className={styles.colortext}>Festival Inkigayo?</span>
                </h2>
                <button onClick={() => toggleQ("Q3")}>
                  <Image src={S3} alt="o que é isso?" />
                </button>{" "}
              </div>
              {Q3 === true && (
                <>
                  <div className={styles.answer}>
                    Já temos algumas atrações confirmadas. Contaremos com os
                    maiores grupos de k-pop coreanos da atualidade, como BTS,
                    BLACKPINK, TWICE entre outros. Para saber mais sobre as
                    atrações, acesse: (colocar o link da página da lineup)
                  </div>
                </>
              )}
            </div>
            <p className={styles.vermais}> ver mais</p>
          </div>
        </div>
      </section>
    </>
  );
}
