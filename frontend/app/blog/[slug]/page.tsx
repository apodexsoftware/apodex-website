// ============================================
// POSTPAGE.TSX (Server Component)
// ============================================
import { client } from "@/lib/sanity";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PostContent from "@/components/post/PostContent";

interface SanityAsset {
  _ref?: string;
  _type?: string;
  _key?: string;
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: {
    asset?: SanityAsset | string;
    alt?: string;
  };
  publishedAt: string;
  author?: {
    name?: string;
    image?: any;
    bio?: string;
  };
  body?: any;
  categories?: (string | any)[];
  tags?: (string | any)[];
  readTime?: number;
}

interface Props {
  params: Promise<{ slug: string }>;
}

function safeString(value: any): string {
  if (typeof value === 'string') return value;
  if (value === null || value === undefined) return '';
  if (typeof value === 'object') {
    if (value.name && typeof value.name === 'string') return value.name;
    if (value.current && typeof value.current === 'string') return value.current;
    if (value.toString && typeof value.toString === 'function') {
      const str = value.toString();
      if (str !== '[object Object]') return str;
    }
  }
  return '';
}

function safeDateISO(value: any): string {
  if (!value) return "";
  try {
    const date = new Date(value);
    if (isNaN(date.getTime())) return "";
    return date.toISOString();
  } catch {
    return "";
  }
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const post = await client.fetch(`
      *[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        excerpt,
        mainImage{
          asset->{_id, _ref},
          alt
        },
        publishedAt,
        author->{
          name,
          image,
          bio
        },
        categories,
        tags,
        body,
        "readTime": round(length(pt::text(body)) / 200)
      }
    `, { slug });
    
    return post || null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | Apodex Blog",
    };
  }

  const title = safeString(post.title);
  const excerpt = safeString(post.excerpt);

  return {
    title: `${title} | Apodex Blog`,
    description: excerpt || "Artículo sobre tecnología y desarrollo de software",
    openGraph: {
      title: title,
      description: excerpt,
      type: 'article',
      publishedTime: safeDateISO(post.publishedAt),
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return <PostContent post={post} slug={slug} />;
}

