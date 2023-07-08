'use client'
import styles from "@/styles/components/landing-page/LineUp.module.css";
import React, { useState } from 'react';

export default function LineUp() {
    const[Cards, setCards] = useState(["1","2","3"]) //cada número um card
  return (
    <>
      <div className={styles.title}>
        <h1> LINE-UP</h1>
        <h1> 예술가들</h1>
      </div>
      <div className={styles.dias}>
        <button className={styles.date} onClick={() => setCards(["1","2","3"])}>
          <h1>SEXTA</h1>
          <p>08 DE SETEMBRO</p>
        </button>
        <button className={styles.date} onClick={() => setCards(["4","5","6"])}>
          <h1>SÁBADO</h1>
          <p>09 DE SETEMBRO</p>
        </button>
        <button className={styles.date} onClick={() => setCards(["7","8","9"])}>
          <h1>DOMINGO</h1>
          <p>10 DE SETEMBRO</p>
        </button>
      </div>
      <div className={styles.cards}>
        <p> {Cards[0]} </p>
        <p> {Cards[1]} </p>
        <p> {Cards[2]} </p>
      </div> 
      
    </>
  );
}
