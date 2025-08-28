"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.shrink : ""}`}>
      <div className={styles.brand}>
        <Image
          src="/apodex-logo-blue.svg"
          alt="Apodex Logo"
          width={40}
          height={40}
        />
        <span>Apodex</span>
      </div>

      {/* Botón hamburguesa */}
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menú"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* Menú */}
      <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link>
        </li>
        <li>
          <Link href="/#about" onClick={() => setIsOpen(false)}>Sobre Nosotros</Link>
        </li>
        <li>
          <Link href="/#clients" onClick={() => setIsOpen(false)}>Clientes</Link>
        </li>
        <li>
          <Link href="/#products" onClick={() => setIsOpen(false)}>Productos</Link>
        </li>
        <li>
          <Link href="/#services" onClick={() => setIsOpen(false)}>Servicios</Link>
        </li>
        <li>
          <Link href="/#contact" onClick={() => setIsOpen(false)}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

