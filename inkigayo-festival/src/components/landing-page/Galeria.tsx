'use client'

import styles from "@/styles/components/landing-page/Galeria.module.css";
import React, { useState } from 'react';

export default function Galeria() {
    const[description, setDesc] = useState("");
    return(
        <>
        <div className={styles.title}>
            <h1> Galeria</h1>
            <h1>이미지</h1>
        </div>
        
        <div className={styles.carrosel}>
            {/* carrosel de imagens */}
            <p>{description}</p>
        </div>
        </>
    )
}