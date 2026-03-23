// ============================================
// SHAREBUTTONS.TSX (Componente separado)
// ============================================
"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Link as LinkIcon } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareData = [
    { 
      icon: Twitter, 
      label: "Twitter", 
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}` 
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` 
    },
    { 
      icon: LinkIcon, 
      label: "Copiar", 
      onClick: () => {
        navigator.clipboard.writeText(url);
      } 
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-400 font-medium uppercase tracking-wider hidden sm:block">Compartir</span>
      <div className="flex gap-2">
        {shareData.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href ? "_blank" : undefined}
            rel={item.href ? "noopener noreferrer" : undefined}
            onClick={item.onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
            aria-label={item.label}
          >
            <item.icon className="w-4 h-4" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}