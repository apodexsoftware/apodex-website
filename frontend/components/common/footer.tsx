import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { PhoneIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        {/* Columna izquierda */}
        <div className={styles.left}>
          <h3>Oficina administrativa:</h3>
          <p>Marinilla, Colombia</p>
          <p>CoCrecer Coworking, Carrera 30b # 37 - 44 Barrio los Giraldos</p>
          <p>Telefonos:</p>
          <div style={{ paddingLeft: "1em" }}>
            <p>
              <PhoneIcon
                style={{ verticalAlign: "middle", color: "#25D366" }}
              />{" "}
              (+57) 321 488 4195
            </p>
            <p>
              <PhoneIcon
                style={{ verticalAlign: "middle", color: "#25D366" }}
              />{" "}
              (+57) 301 268 6790
            </p>
            <p>
              <PhoneIcon
                style={{ verticalAlign: "middle", color: "#25D366" }}
              />{" "}
              (+57) 311 603 0458
            </p>
          </div>
        </div>

        {/* Columna central */}
        <div className={styles.center}>
          <p>También puedes escribirnos un correo electrónico a:</p>
          <Link href="mailto:contactenos@apodex.co">contactenos@apodex.co</Link>
          {/* <div className={styles.iconRow}>
            <Link href="#">
              PQRS
              <PsychologyAltIcon fontSize="large" />
            </Link>
          </div> */}
        </div>

        {/* Columna derecha */}
        <div className={styles.right}>
          <div className={styles.badges}>
            <Image
              src="/apodex-logo-title-blue.svg"
              alt="People First"
              width={200}
              height={100}
            />
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className={styles.bottom}>
        <div>
          <p>
            © 2025 Apodex Software. Última actualización: Agosto 2025 · Política
            de tratamiento de datos personales · Diseñado y desarrollado por
            Apodex Software
          </p>
        </div>
        <div className={styles.social}>
          <Link href="#">
            <Facebook fontSize="large" />
          </Link>
          <Link href="#">
            <Instagram fontSize="large" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
