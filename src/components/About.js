import styles from "../styles/Section.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h2>Sobre Nosotros</h2>
      <p>
        Somos un equipo especializado en desarrollo de software, consultoría y
        automatización. Transformamos ideas en productos digitales robustos,
        escalables y fáciles de mantener.
      </p>

      <div className={styles.aboutGrid}>
        <div className={styles.card}>
          <h3>Misión</h3>
          <p>
            Impulsar a nuestros clientes con soluciones tecnológicas simples,
            seguras y efectivas que generen valor real.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Visión</h3>
          <p>
            Ser aliados estratégicos de innovación, construyendo productos que
            perduren y escalen con el negocio.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Valores</h3>
          <ul>
            <li>Calidad y simplicidad</li>
            <li>Transparencia</li>
            <li>Aprendizaje continuo</li>
            <li>Orientación a resultados</li>
          </ul>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.number}>10+</span>
          <span>Años de experiencia</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.number}>25</span>
          <span>Clientes activos</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.number}>50+</span>
          <span>Proyectos entregados</span>
        </div>
      </div>
    </section>
  );
}
