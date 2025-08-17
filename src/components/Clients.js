import Image from "next/image";
import styles from "../styles/Section.module.css";

export default function Clients() {
  const clients = [
    {
      name: "Renovación carismática católica, Diócesis Sonsón - Rionegro",
      logo: "/escuela.jpg",
    },
    { name: "Beta Corp", logo: "/apodex.jpg" },
    { name: "Gamma Ltd", logo: "/apodex.jpg" },
    { name: "Delta Group", logo: "/apodex.jpg" },
  ];

  return (
    <section id="clients" className={styles.section}>
      <h2>Nuestros Clientes</h2>
      <p>
        Hemos colaborado con empresas de diferentes industrias, brindando
        soluciones que potencian su crecimiento y mejoran su eficiencia.
      </p>

      <div className={styles.clientsGrid}>
        {clients.map((client, index) => (
          <div key={index} className={styles.clientCard}>
            <Image
              src={client.logo}
              alt={client.name}
              className={styles.clientLogo}
              width={40}
              height={40}
            />
            <span>{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
