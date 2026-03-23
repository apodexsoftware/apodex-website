import Image from "next/image";
import styles from "../styles/Section.module.css";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      name: "Producto A",
      description:
        "Solución innovadora para optimizar procesos y mejorar la productividad.",
      image: "/apodex-logo-blue.svg",
    },
    {
      name: "Producto B",
      description:
        "Herramienta versátil para empresas que buscan digitalizar sus operaciones.",
      image: "/apodex-logo-blue.svg",
    },
    {
      name: "Producto C",
      description:
        "Tecnología de última generación para la gestión eficiente de recursos.",
      image: "/apodex-logo-blue.svg",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="products" className={styles.section}>
      <motion.h2
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        Productos
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Ofrecemos productos de alta calidad, diseñados para satisfacer las
        necesidades específicas de nuestros clientes.
      </motion.p>

      <motion.div
        className={styles.productsGrid}
        initial="hidden"
        whileInView="show"
        transition={{ staggerChildren: 0.2 }}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            className={styles.productCard}
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
          >
            <div style={{ marginBottom: "16px" }}>
              <Image
                src={product.image}
                alt={product.name}
                className={styles.productImage}
                width={60}
                height={60}
              />
            </div>

            <h3>{product.name}</h3>
            <p>{product.description}</p>

            {/* CTA sutil */}
            <span
              style={{
                marginTop: "12px",
                display: "inline-block",
                color: "#0070f3",
                fontWeight: "500",
                fontSize: "0.9rem",
              }}
            >
              Ver más →
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}