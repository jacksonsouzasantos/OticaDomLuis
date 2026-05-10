/**
 * Header Premium Component
 * Design: Apple-like com Glassmorphism
 * - Fundo translúcido com backdrop blur
 * - Navegação elegante
 * - Logo sofisticada
 * - Botão WhatsApp com efeito sutil
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HeaderPremium() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Coleção", href: "#collection" },
    { label: "Saúde Visual", href: "#health" },
    { label: "Contato", href: "#contact" },
  ];

  const whatsappLink = "https://wa.me/5583982050815";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-border/40"
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="Ótica Dom Luís"
            className="h-12 w-auto"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: "#C9A961" }}
              className="text-foreground text-sm font-medium transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop WhatsApp Button */}
        <div className="hidden md:block">
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6">
              Agende Agora
            </Button>
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-border/40"
        >
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground text-sm font-medium hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
                Agende Agora
              </Button>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
