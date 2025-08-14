import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        
        {/* Columna izquierda */}
        <div className={styles.left}>
          <h3>Estamos ubicados en:</h3>
          <p>Medellín, Colombia</p>
          <p>Calle 8 b 65 191 oficina 409 Marinilla.</p>
          <p>PBX: (+57) 604 444 51 11</p>
          <div className={styles.colombia}>
            <Image src="/apodex.jpg" alt="Colombia" width={140} height={40} />
          </div>
        </div>

        {/* Columna central */}
        <div className={styles.center}>
          <p>También puedes escribirnos un correo electrónico a:</p>
          <Link href="mailto:contactenos@apodex.co">
            contactenos@apodex.co
          </Link>
          <div className={styles.iconRow}>
            <Image src="/apodex.jpg" alt="Línea Ética" width={50} height={50} />
            <Image src="/apodex.jpg" alt="PQRS" width={50} height={50} />
          </div>
        </div>

        {/* Columna derecha */}
        <div className={styles.right}>
          <div className={styles.badges}>
            <Image src="/apodex.jpg" alt="People First" width={70} height={70} />
            <Image src="/apodex.jpg" alt="Building Happiness" width={110} height={50} />
            <Image src="/apodex.jpg" alt="Compra lo Nuestro" width={130} height={40} />
            <Image src="/apodex.jpg" alt="Mejores Lugares" width={70} height={50} />
            <Image src="/apodex.jpg" alt="Great Culture" width={90} height={60} />
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className={styles.bottom}>
        <p>
          © 2025 Apodex Software. Última actualización: Agosto 2025 · Política de tratamiento de datos personales · Diseñado y desarrollado por Apodex Software
        </p>
        <div className={styles.social}>
          <Link href="#"><Image src="/apodex.jpg" alt="Facebook" width={20} height={20} /></Link>
          <Link href="#"><Image src="/apodex.jpg" alt="Twitter" width={20} height={20} /></Link>
          <Link href="#"><Image src="/apodex.jpg" alt="LinkedIn" width={20} height={20} /></Link>
          <Link href="#"><Image src="/apodex.jpg" alt="YouTube" width={20} height={20} /></Link>
          <Link href="#"><Image src="/apodex.jpg" alt="Instagram" width={20} height={20} /></Link>
        </div>
      </div>
    </footer>
  );
}
