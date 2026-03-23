import Link from "next/link";
import Image from "next/image";
import styles from "@/components/styles/Section.module.css";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/image";



interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: any;
  publishedAt: string;
  author?: {
    name: string;
  };
}

async function getPosts(): Promise<Post[]> {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author->{
        name
      }
    }
  `);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className={styles.section}>
      <h2>Blog</h2>
      <p>
        Ideas, tecnología y soluciones para impulsar tu negocio con software a medida.
      </p>

      <div className={styles.blogGrid}>
        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <div className={styles.blogCard}>
              
              {/* Imagen */}
              {post.mainImage && (
                <div className={styles.blogImageWrapper}>
                  <Image
                    src={urlFor(post.mainImage).width(400).height(200).url()}
                    alt={post.title}
                    width={400}
                    height={200}
                    className={styles.blogImage}
                  />
                </div>
              )}

              {/* Contenido */}
              <h3>{post.title}</h3>

              {post.excerpt && (
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
              )}

              <div className={styles.blogMeta}>
                {post.author?.name && <span>{post.author.name}</span>}
                <span>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </div>

              <span className={styles.blogLink}>
                Leer artículo →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}