"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/components/ui/Navbar.module.css";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Loading from "@/app/loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  // Condicional que vai fixar ou não o menu
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      var menu = document.getElementById("navbar");
      var scrollPosition = window.scrollY;
      if (scrollPosition > 135) {
        setScrolled(true);
      } else if (scrollPosition < 24) {
        setScrolled(false);
      }
    });
  }
  if(status === 'loading'){
    return <Loading />
  }
  return (
    <nav className={`${styles.navbar} ${showMenu ? styles.navbar_open :""} ${scrolled ? styles.scrolled : ""}`}>
      <header className={styles.header}>
        
        <Link href={"https://inkigayofestival.vercel.app/"}>
          <figure className={`${styles.logo} ${showMenu ? styles.logo_open :""}`} />
        </Link>

        <span onClick={toggleMenu} className={styles.icon}>
          <i className={`${styles.iconB} ${showMenu ? styles.iconB_open :""}`}>
            <FontAwesomeIcon icon={faBars} style={{color: '#FFF', height: '7.5rem', width: '7.5rem'}} />
          </i>
          
          <i  className={`${styles.iconX} ${showMenu ? styles.iconX_open : ""}`}>
            <FontAwesomeIcon icon={faXmark} style={{height: '7.5rem', width: '7.5rem'}} />
          </i>

        </span>

      </header>
      <ul className={`${styles.menu} ${showMenu ? styles.menu_open :""}`}>
        <Link
          className={styles.link}
          href={"https://inkigayofestival.vercel.app/#o_festival"}
        >
          <li className={styles.list_item}>O festival</li>
        </Link>
        <Link className={styles.link} href={"https://inkigayofestival.vercel.app/#line_up"}>
          <li className={styles.list_item}>Line-Up</li>
        </Link>
        <Link className={styles.link} href={"https://inkigayofestival.vercel.app/#faq"}>
          <li className={styles.list_item}>F.A.Q.</li>
        </Link>
        <Link className={styles.link} href={"https://inkigayofestival.vercel.app/#galeria"}>
          <li className={styles.list_item}>Galeria</li>
        </Link>
        <Link className={styles.link} href={"https://inkigayofestival.vercel.app/ingresso"}>
          <li className={styles.list_item}>Ingresso</li>
        </Link>
        {session && (
            <Link className={styles.link} href={"https://inkigayofestival.vercel.app/meus-ingressos"}>
              <li className={styles.list_item}>Meus Ingressos</li>
            </Link>
        )}
      </ul>
      {session ? (
          <button onClick={() => signOut()} className={`${styles.login_button} ${showMenu ? styles.login_button_open :""}`}>Logout</button>
      ) : (
        <Link
          className={styles.link}
          href={
            pathname === "/ingresso"
              ? `https://inkigayofestival.vercel.app/login?callback=ingresso`
              : `https://inkigayofestival.vercel.app/login`
          }
        >
          <button className={`${styles.login_button} ${showMenu ? styles.login_button_open :""}`}>Login</button>
        </Link>
      )}
    </nav>
  );
}
