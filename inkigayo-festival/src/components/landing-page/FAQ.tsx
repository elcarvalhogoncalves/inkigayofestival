'use client'

import styles from "@/styles/components/landing-page/FAQ.module.css";
import React, { useState } from "react";

export default function FAQ() {
  const [Q1, setQ1] = useState(false);
  const [Q2, setQ2] = useState(false);
  const [Q3, setQ3] = useState(false); //const q pra mostrar ou n resposta dos cards
  return (
    <>
      <div className={styles.title}>
        <h2>F.A.Q</h2>
        <h1>질문</h1>
      </div>
      <div className={styles.question}>
        <h2> O que é o Festival Inkigayo?</h2>
        <button> ver </button>
      </div>
      <div className={styles.question}>
        <h2> Quando e Onde será o Festival Inkigayo?</h2>
        <button> ver </button>
      </div>
      <div className={styles.question}>
        <h2> Quais serão as atrações do Festival Inkigayo?</h2>
        <button> ver </button>
      </div>
    </>
  );
}
