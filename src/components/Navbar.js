"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambia si se scrollea más de 50px
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.shrink : ''}`}>
      <div className={styles.brand}>
        <Image
          src="/apodex-logo-blue.svg"
          alt="Apodex Logo"
          width={40}
          height={40}
        />
        <span>Apodex</span>
      </div>

      <ul className={styles.menu}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/about">Sobre Nosotros</Link></li>
        <li><Link href="/clients">Clientes</Link></li>
        <li><Link href="/products">Productos</Link></li>
        <li><Link href="/services">Servicios</Link></li>
        <li><Link href="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}
