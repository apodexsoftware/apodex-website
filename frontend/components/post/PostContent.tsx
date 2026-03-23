"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Bookmark, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { urlFor } from "@/lib/image";
import ShareButtons from "./ShareButtons";

// --- TIPOS ---
interface Post {
  _id: string; title: string; slug: { current: string }; excerpt?: string;
  mainImage?: { asset?: any; alt?: string }; publishedAt: string;
  author?: { name?: string; image?: any; bio?: string };
  body?: any; categories?: any[]; tags?: any[]; readTime?: number;
}

// --- UTILIDADES CONDENSADAS ---
const safeStr = (v: any) => typeof v === 'string' ? v : v?.name || v?.current || '';
const safeArr = (v: any) => Array.isArray(v) ? v : [];
const formatDate = (v: any) => v && !isNaN(new Date(v).getTime()) ? new Date(v).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" }) : "";

// --- COMPONENTES UI AUXILIARES ---
const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gray-900 origin-left z-50" style={{ scaleX: scrollYProgress }} />;
};

const ScrollTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return show ? (
    <motion.button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="fixed bottom-8 right-8 p-3 bg-gray-900 text-white rounded-full shadow-lg z-40">
      <ChevronUp className="w-5 h-5" />
    </motion.button>
  ) : null;
};

// --- COMPONENTE PRINCIPAL ---
export default function PostContent({ post, slug }: { post: Post; slug: string }) {
  const { title = "", excerpt = "", publishedAt, author, mainImage, body, categories, tags, readTime = 5 } = post;
  const authorName = safeStr(author?.name) || "Equipo Apodex";
  const authorInitial = authorName.charAt(0).toUpperCase();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apodex.com";

  return (
    <main className="min-h-screen bg-white selection:bg-gray-900 selection:text-white pb-24">
      <ProgressBar />
      
      

      {/* Header */}
      <header className="pt-32 pb-12 max-w-4xl mx-auto text-center px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{title}</motion.h1>
        <p className="text-lg md:text-xl text-gray-500 mb-10">{excerpt}</p>
        <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
          <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">{authorInitial}</div>
          <div className="text-left"><p className="font-medium text-gray-900">{authorName}</p></div>
          <div className="hidden md:block h-6 w-px bg-gray-200" />
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {formatDate(publishedAt)}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {readTime} min</span>
        </div>
      </header>

      {/* Imagen Principal */}
{/* Imagen Principal */}
{/* Imagen Principal */}
      {mainImage?.asset && (
        <div className="max-w-2xl mx-auto px-6 mb-8">
          <div className="relative aspect-[8/2] md:aspect-[2/1] rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <Image 
              src={urlFor(mainImage).width(1200).url()} 
              alt={title} 
              fill 
              priority 
              className="object-cover width-5" 
            />
          </div>
        </div>
      )}
      

      {/* Contenido Body */}
{/* Contenido Body */}
      <article className="max-w-3xl mx-auto px-6 prose prose-lg md:prose-xl text-gray-600 text-justify prose-headings:text-center">
        {body && <PortableText value={body} />}
      </article>

      {/* Etiquetas */}
      {safeArr(tags).length > 0 && (
        <div className="max-w-3xl mx-auto mt-16 flex justify-center gap-2">
          {safeArr(tags).map((tag, i) => safeStr(tag) && <Link key={i} href={`/blog/tag/${safeStr(tag)}`} className="px-4 py-2 bg-gray-50 rounded-full text-sm">#{safeStr(tag)}</Link>)}
        </div>
      )}

      {/* CTA Box */}
      <div className="max-w-4xl mx-auto mt-16 p-10 bg-gray-900 rounded-2xl text-center text-white">
        <h3 className="text-3xl font-bold mb-4">¿Te gustó este artículo?</h3>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">Trabajemos juntos en tu próximo proyecto.</p>
        <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:scale-105 transition">Hablemos <ArrowLeft className="w-4 h-4 rotate-180" /></Link>
      </div>

      <ScrollTopBtn />
    </main>
  );
}