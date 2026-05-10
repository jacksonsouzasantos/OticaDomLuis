/**
 * Hero Immersive Component
 * Design: Full-bleed com animações fluidas
 * - Fundo gradiente dinâmico
 * - Tipografia grande e refinada
 * - CTA com efeito de brilho
 * - Scroll indicator animado
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroImmersive() {
  const whatsappLink = "https://wa.me/5583982050815";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted -z-10" />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity as any }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity as any }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container text-center z-10 px-4"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <img
            src="/logo.png"
            alt="Ótica Dom Luís"
            className="h-24 md:h-32 w-auto mx-auto"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
        >
          O dom de fazer você{" "}
          <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
            ver melhor
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light"
        >
          Armações exclusivas, lentes de alta tecnologia e atendimento que
          transpira sofisticação. Sua experiência visual merece o melhor.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
              Agende sua Experiência Visual
            </Button>
          </motion.a>

          <motion.a
            href="#collection"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full text-base font-semibold border-2 border-foreground/20 hover:border-accent hover:text-accent transition-colors"
            >
              Explorar Coleção
            </Button>
          </motion.a>
        </motion.div>

        {/* Highlight Box */}
        <motion.div
          variants={itemVariants}
          className="inline-block bg-white/50 backdrop-blur-md border border-border/40 rounded-2xl px-8 py-4 mb-12"
        >
          <p className="text-sm text-muted-foreground font-medium">
            Exame de vista completo por apenas{" "}
            <span className="text-accent font-bold text-base">R$ 29,99</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
