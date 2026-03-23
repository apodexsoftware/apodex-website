"use client";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {MenuIcon, SkipBackIcon, GithubIcon} from "lucide-react"
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event:any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <button className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? (
          <SkipBackIcon style={{ fontSize: 28, color: "#333" }} />
        ) : (
          <MenuIcon style={{ fontSize: 28, color: "#333" }} />
        )}
      </button>

      {/* Menú */}
      <ul
        ref={menuRef}
        className={`${styles.menu} ${isOpen ? styles.open : ""}`}
      >
        <li>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="https://github.com/apodexsoftware" onClick={() => setIsOpen(false)}>
            <GithubIcon style={{ fontSize: 20, marginRight: 5 }} />
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
}
