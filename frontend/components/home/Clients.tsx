import Image from "next/image";
import styles from "../styles/Section.module.css";
import { motion } from "framer-motion";

export default function Clients() {
  const clients = [
    {
      name: "Renovación carismática católica, Diócesis Sonsón - Rionegro",
      logo: "/escuela.jpg",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="clients" className={styles.section}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        Nuestros Clientes
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Hemos colaborado con empresas de diferentes industrias, brindando
        soluciones que potencian su crecimiento y mejoran su eficiencia.
      </motion.p>

      <motion.div
        className={styles.clientsGrid}
        initial="hidden"
        whileInView="show"
        transition={{ staggerChildren: 0.15 }}
      >
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className={styles.clientCard}
            variants={fadeUp}
            whileHover={{ y: -5 }}
          >
            <div className={styles.clientLogoWrapper}>
              <Image
                src={client.logo}
                alt={client.name}
                width={80}
                height={80}
                className={styles.clientLogo}
              />
            </div>

            <span className={styles.clientName}>{client.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}