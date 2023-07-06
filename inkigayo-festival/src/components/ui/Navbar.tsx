'use client'
import { useState } from 'react';
import Link from 'next/link'
import styles from '@/styles/components/ui/Navbar.module.css'


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    if (typeof window !== "undefined") {
      window.addEventListener('scroll', function() {
        var menu = document.getElementById('navbar');
        var scrollPosition = window.scrollY;
        if (scrollPosition > 135) {
            setScrolled(true);
        } else if (scrollPosition < 24) {
          setScrolled(false);
        }
    });
    }


  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <Link href={'http://localhost:3000/'}>
            <figure className={styles.logo} />
        </Link>
        <ul className={styles.menu}>
            <Link className={styles.link} href={'http://localhost:3000/#o_festival'}><li className={styles.list_item}>O festival</li></Link>
            <Link className={styles.link} href={'http://localhost:3000/#line_up'}><li className={styles.list_item}>Line-Up</li></Link>
            <Link className={styles.link} href={'http://localhost:3000/#faq'}><li className={styles.list_item}>F.A.Q.</li></Link>
            <Link className={styles.link} href={'http://localhost:3000/#galeria'}><li className={styles.list_item}>Galeria</li></Link>
            <Link className={styles.link} href={'http://localhost:3000/ingresso'}><li className={styles.list_item}>Ingresso</li></Link>
        </ul>

        <Link className={styles.link} href={'http://localhost:3000/login'}><button className={styles.login_button}>Login</button></Link>
    </nav>
  )
}
