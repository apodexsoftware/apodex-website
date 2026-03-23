import { client } from "@/lib/sanity";
import { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {
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