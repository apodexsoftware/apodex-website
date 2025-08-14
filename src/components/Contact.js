import styles from "../styles/Section.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2>Contacto</h2>
      <p>
        Si quieres más información sobre nuestros productos o servicios, o deseas
        agendar una reunión, completa el siguiente formulario y te responderemos
        lo antes posible.
      </p>

      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tucorreo@ejemplo.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.btnPrimary}>
          Enviar mensaje
        </button>
      </form>

      <div className={styles.contactInfo}>
        <p>📍 Dirección: Calle Ejemplo 123, Ciudad, País</p>
        <p>📞 Teléfono: +1 234 567 890</p>
        <p>📧 Email: contacto@apodex.co</p>
      </div>
    </section>
  );
}
