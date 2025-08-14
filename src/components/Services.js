import styles from "../styles/Section.module.css";

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

  return (
    <section id="services" className={styles.section}>
      <h2>Servicios</h2>
      <p>
        Ofrecemos una amplia gama de servicios para acompañar a tu empresa en
        cada etapa de su transformación digital.
      </p>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
