import styles from "../styles/Section.module.css";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Desarrollo Web",
      description:
        "Creamos sitios y aplicaciones web modernas, rápidas y seguras adaptadas a tus necesidades.",
      icon: "💻",
    },
    {
      title: "Consultoría Tecnológica",
      description:
        "Te ayudamos a definir e implementar estrategias digitales efectivas para tu negocio.",
      icon: "🧠",
    },
    {
      title: "Automatización de Procesos",
      description:
        "Optimizamos tareas repetitivas con soluciones de automatización que ahorran tiempo y costos.",
      icon: "⚙️",
    },
    {
      title: "Diseño UX/UI",
      description:
        "Creamos experiencias de usuario atractivas y fáciles de usar para maximizar la conversión.",
      icon: "🎨",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className={styles.section}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        Servicios
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Ofrecemos una amplia gama de servicios para acompañar a tu empresa en
        cada etapa de su transformación digital.
      </motion.p>

      <motion.div
        className={styles.servicesGrid}
        initial="hidden"
        whileInView="show"
        transition={{ staggerChildren: 0.15 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.serviceCard}
            variants={fadeUp}
            whileHover={{ y: -6 }}
          >
            <div className={styles.serviceIcon}>{service.icon}</div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <span
              style={{
                marginTop: "12px",
                display: "inline-block",
                color: "#0070f3",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              Saber más →
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}