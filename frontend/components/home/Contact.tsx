import styles from "../styles/Section.module.css";
import { motion } from "framer-motion";

export default function Contact() {
  let numberRows = 5;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className={styles.section}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        Contacto
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Si quieres más información sobre nuestros productos o servicios, o deseas
        agendar una reunión, completa el siguiente formulario y te responderemos
        lo antes posible.
      </motion.p>

      <div className={styles.contactWrapper}>
        {/* FORM */}
        <motion.form
          className={styles.contactForm}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Tu nombre" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="tucorreo@ejemplo.com" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              rows={numberRows}
              placeholder="Escribe tu mensaje aquí..."
              required
            />
          </div>

          <button type="submit" className={styles.btnPrimary}>
            Enviar mensaje
          </button>
        </motion.form>

        {/* INFO */}
        <motion.div
          className={styles.contactInfo}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ delay: 0.5 }}
        >
          <p>📍 Dirección: Calle Ejemplo 123, Ciudad, País</p>
          <p>📞 Teléfono: +1 234 567 890</p>
          <p>📧 Email: contacto@apodex.co</p>
        </motion.div>
      </div>
    </section>
  );
}