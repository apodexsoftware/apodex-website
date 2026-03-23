import styles from "../styles/Section.module.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sobre Nosotros
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Somos un equipo especializado en desarrollo de software, consultoría y
        automatización. Transformamos ideas en productos digitales robustos,
        escalables y fáciles de mantener.
      </motion.p>

      <div className={styles.aboutGrid}>
        {["Misión", "Visión", "Valores"].map((title, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {title === "Misión" && (
              <>
                <h3>Misión</h3>
                <p>
                  Impulsar a nuestros clientes con soluciones tecnológicas
                  simples, seguras y efectivas que generen valor real.
                </p>
              </>
            )}

            {title === "Visión" && (
              <>
                <h3>Visión</h3>
                <p>
                  Ser aliados estratégicos de innovación, construyendo productos
                  que perduren y escalen con el negocio.
                </p>
              </>
            )}

            {title === "Valores" && (
              <>
                <h3>Valores</h3>
                <ul>
                  <li>Calidad y simplicidad</li>
                  <li>Transparencia</li>
                  <li>Aprendizaje continuo</li>
                  <li>Orientación a resultados</li>
                </ul>
              </>
            )}
          </motion.div>
        ))}
      </div>

      <div className={styles.stats}>
        {[
          { number: "10+", label: "Años de experiencia" },
          { number: "25", label: "Clientes activos" },
          { number: "50+", label: "Proyectos entregados" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className={styles.stat}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <span className={styles.number}>{stat.number}</span>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}