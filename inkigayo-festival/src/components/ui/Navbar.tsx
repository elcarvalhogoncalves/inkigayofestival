"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/components/ui/Navbar.module.css";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <Link href={"http://localhost:3000/"}>
        <figure className={styles.logo} />
      </Link>
      <ul className={styles.menu}>
        <Link
          className={styles.link}
          href={"http://localhost:3000/#o_festival"}
        >
          <li className={styles.list_item}>O festival</li>
        </Link>
        <Link className={styles.link} href={"http://localhost:3000/#line_up"}>
          <li className={styles.list_item}>Line-Up</li>
        </Link>
        <Link className={styles.link} href={"http://localhost:3000/#faq"}>
          <li className={styles.list_item}>F.A.Q.</li>
        </Link>
        <Link className={styles.link} href={"http://localhost:3000/#galeria"}>
          <li className={styles.list_item}>Galeria</li>
        </Link>
        <Link className={styles.link} href={"http://localhost:3000/ingresso"}>
          <li className={styles.list_item}>Ingresso</li>
        </Link>
        {session && (
            <Link className={styles.link} href={"http://localhost:3000/profile"}>
              <li className={styles.list_item}>Minha conta</li>
            </Link>
        )}
      </ul>
      {session ? (
          <button onClick={() => signOut()} className={styles.login_button}>Logout</button>
      ) : (
        <Link
          className={styles.link}
          href={
            pathname === "/ingresso"
              ? `http://localhost:3000/login?callback=ingresso`
              : `http://localhost:3000/login`
          }
        >
          <button className={styles.login_button}>Login</button>
        </Link>
      )}
    </nav>
  );
}
