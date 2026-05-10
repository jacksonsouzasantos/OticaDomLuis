/**
 * Clip-On Products Page
 * Galeria de produtos Clip-on com 5 imagens
 */

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const cliponProducts = [
  {
    id: 1,
    name: "Clip-on Premium Black & Gold",
    description: "Sistema magnético com acabamento em ouro",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/clipon-1-4HUgDeLBPefQiHwNm7CdN4.webp",
  },
  {
    id: 2,
    name: "Clip-on Tortoiseshell",
    description: "Elegância clássica em tartaruga",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/clipon-2-PKqJzx44MYVx6dZ9wATgWr.webp",
  },
  {
    id: 3,
    name: "Clip-on Rose Gold",
    description: "Sofisticação em rose gold",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/clipon-3-AmMhXMDgHFT36YNyJTJtqf.webp",
  },
  {
    id: 4,
    name: "Clip-on Gunmetal",
    description: "Design contemporâneo em cinza chumbo",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/clipon-4-8wTRjpZRb7KvejhEusfAxD.webp",
  },
  {
    id: 5,
    name: "Clip-on Champagne",
    description: "Luxo em dourado champagne",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/clipon-5-AfeVAd7GHSveLWquWoZSX7.webp",
  },
];

export default function ClipOnPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/">
            <motion.a
              whileHover={{ x: -5 }}
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </motion.a>
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Clip-on <span className="text-accent">Especialidade</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Inovação em óculos inteligentes. Sistema magnético revolucionário que
            combina estilo e funcionalidade.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cliponProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* Image Container */}
              <motion.div
                className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-muted mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-accent text-accent-foreground rounded-full font-semibold"
                  >
                    Consultar
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                animate={{ y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl border border-accent/20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interessado em Clip-on?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Agende uma consulta com nossos especialistas e descubra o sistema
            magnético revolucionário.
          </p>
          <motion.a
            href="https://wa.me/5583982050815"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Fale com a Gente
            </button>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
