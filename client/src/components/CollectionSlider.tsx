/**
 * Collection Slider Component
 * Design: Carrossel orgânico com zoom suave
 * - Imagens de produtos com efeito hover
 * - Transições fluidas
 * - Scroll horizontal suave
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "wouter";

const products = [
  {
    id: 1,
    name: "Clip-on Premium",
    category: "Especialidade",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/hero-glasses-femk7Xx6F2NzNPxqqnqdqs.webp",
    description: "Inovação em óculos inteligentes",
    link: "/clipon",
  },
  {
    id: 2,
    name: "Armação Transparente",
    category: "Óculos de Grau",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/store-interior-ZcVhq6R8rTR99kxTVB7m2f.webp",
    description: "Design contemporâneo",
    link: "/grau",
  },
  {
    id: 3,
    name: "Óculos de Sol Clássico",
    category: "Óculos de Sol",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/person-glasses-mYYzKHui2aAgMERtfn7icp.webp",
    description: "Proteção UV premium",
    link: "/sol",
  },
];

export default function CollectionSlider() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [, setLocation] = useLocation();

  return (
    <section
      id="collection"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-muted"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            The Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modelos exclusivos que combinam elegância, funcionalidade e inovação
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: product.id * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <motion.div
                className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-muted mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredId === product.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                >
                  <motion.button
                    onClick={() => setLocation(product.link)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-accent text-accent-foreground rounded-full font-semibold cursor-pointer border-0"
                  >
                    Explorar
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                animate={{
                  y: hoveredId === product.id ? -5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs text-accent font-bold uppercase tracking-widest mb-2">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
