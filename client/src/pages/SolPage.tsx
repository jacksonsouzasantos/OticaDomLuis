/**
 * Óculos de Sol Products Page
 * Galeria de produtos com 5 imagens
 */

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const solProducts = [
  {
    id: 1,
    name: "Gradiente Preto Sofisticado",
    description: "Lentes com gradiente escuro e proteção UV400",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/sol-1-94KpCMGBfdbbnBL43fLYfG.webp",
  },
  {
    id: 2,
    name: "Espelhado Dourado",
    description: "Lentes espelhadas em tom dourado premium",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/sol-2-WnVrgVtNY3q3eifDs4JHnP.webp",
  },
  {
    id: 3,
    name: "Gradiente Marrom",
    description: "Clássico marrom com proteção polarizada",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/sol-3-3KFyXWMfh8GBt7L8hTQMen.webp",
  },
  {
    id: 4,
    name: "Azul Polarizado",
    description: "Lentes azuis polarizadas para máxima proteção",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/sol-4-fU8co6dT5d9GAzjQyHtKvE.webp",
  },
  {
    id: 5,
    name: "Rose Tinted Elegante",
    description: "Lentes com tonalidade rose para estilo único",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/sol-5-grT9VJzzwuj2xbLVLPditZ.webp",
  },
];

export default function SolPage() {
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
            Óculos de <span className="text-accent">Sol</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Proteção UV400 com design premium. Combine segurança visual com estilo
            incomparável.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solProducts.map((product) => (
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
            Proteção com Estilo
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Todos os nossos óculos de sol possuem proteção UV400. Escolha o seu
            favorito hoje mesmo.
          </p>
          <motion.a
            href="https://wa.me/5583982050815"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Compre Agora
            </button>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
