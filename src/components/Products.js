import Image from "next/image";
import styles from "../styles/Section.module.css";

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

  return (
    <section id="products" className={styles.section}>
      <h2>Productos</h2>
      <p>
        Ofrecemos productos de alta calidad, diseñados para satisfacer las
        necesidades específicas de nuestros clientes.
      </p>

      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <Image
              src={product.image}
              alt={product.name}
              className={styles.productImage}
              width={40}
              height={40}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
