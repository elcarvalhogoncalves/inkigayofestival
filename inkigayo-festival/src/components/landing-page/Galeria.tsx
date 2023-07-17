'use client'
import styles from '@/styles/components/landing-page/Galeria.module.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function Galeria() {
  const [pictures, setPictures] = useState([
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      url: "https://inkigayofestival.vercel.app/imagens/gallery/picture02.jpeg",
    },
    {
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      url: "https://inkigayofestival.vercel.app/imagens/gallery/picture01.jpg",
    },
    {
      description: "Lorem ipsum dolor, sit amet adipisicing elit.",
      url: "https://inkigayofestival.vercel.app/imagens/gallery/picture03.jpg",
    },
    {
      description: "Lorem ipsum sit, dolor amet adipisicing elit.",
      url: "https://inkigayofestival.vercel.app/imagens/gallery/picture05.jpg",
    },
    {
      description: "Lorem ipsum sit, dolor adipisicing .",
      url: "https://inkigayofestival.vercel.app/imagens/gallery/picture04.jpg",
    },
  ]);
  const [carrouselIndex, setCarouselIndex] = useState(0);
  const [carrouselLimit, setCarrouselLimit] = useState(0);
  useEffect(() => {
    setCarrouselLimit(pictures.length);
  },[pictures.length]);

  function next() {
    if (carrouselIndex < carrouselLimit - 1) {
      setCarouselIndex(carrouselIndex + 1);
    } else {
      setCarouselIndex(0);
    }
  }
  function prev() {
    if (carrouselIndex > 0) {
      setCarouselIndex(carrouselIndex - 1);
    } else {
      setCarouselIndex(carrouselLimit - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [carrouselIndex]);

  return (
    <main id='galeria' className={styles.body}>
      <section className={styles.container}>

        <div className={styles.body_gallery}>
          <h1 className={styles.title}>Galeria</h1>
          <div className={styles.container_gallery}>

            <div className={styles.gallery}>
              <Image 
                src={pictures[carrouselIndex].url} 
                fill={true}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'end',
                  overflow: 'hidden',
                }}
                  alt={`Foto: ${pictures[carrouselIndex].description}`}
              />
            
              <span className={styles.description}>
                  <p>
                  {pictures[carrouselIndex].description} 
                  </p>
              </span>
              
              <span onClick={prev} className={`${styles.arrow} ${styles.arrow_left}`}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </span>
              <span onClick={next} className={`${styles.arrow} ${styles.arrow_right}`}>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
          </div>

        </div>

      </section>
    </main>
  )
}
