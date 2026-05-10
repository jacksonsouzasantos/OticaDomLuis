/**
 * Óculos de Grau Products Page
 * Galeria de produtos com 5 imagens
 */

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const grauProducts = [
  {
    id: 1,
    name: "Transparente Cristal",
    description: "Moldura transparente elegante e moderna",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/grau-1-SK9YS8U8QmAARWxaq7MPqm.webp",
  },
  {
    id: 2,
    name: "Metal Preto Sofisticado",
    description: "Design minimalista em metal preto",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/grau-2-EFjPHDuNJKTobq2gmGbhiv.webp",
  },
  {
    id: 3,
    name: "Tartaruga Clássico",
    description: "Padrão tartaruga atemporal",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/grau-3-DbEPVkAaRJPdqeBVHDgzCs.webp",
  },
  {
    id: 4,
    name: "Rose Gold Elegante",
    description: "Metal rose gold com acabamento premium",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/grau-4-Wq6RVqfa2XtovvfpeNG6PK.webp",
  },
  {
    id: 5,
    name: "Marrom Acetato",
    description: "Acetato marrom com design contemporâneo",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/grau-5-9oE9pDKTfhSGNT37xn2Ccy.webp",
  },
];

export default function GrauPage() {
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
            Óculos de <span className="text-accent">Grau</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Lentes de alta tecnologia com armações exclusivas. Conforto e estilo
            para seu dia a dia.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {grauProducts.map((product) => (
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
            Encontre seu Estilo
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nossos especialistas ajudam você a escolher as lentes e armações
            perfeitas para seu rosto.
          </p>
          <motion.a
            href="https://wa.me/5583982050815"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Agende seu Exame
            </button>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
