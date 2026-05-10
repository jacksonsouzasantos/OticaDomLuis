/**
 * Header Component
 * Design: Minimalismo Sofisticado
 * - Logo à esquerda
 * - Menu de navegação central
 * - Botão WhatsApp à direita
 * - Sticky no topo com sombra suave
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Produtos", href: "#produtos" },
    { label: "Exame de Vista", href: "#exame" },
    { label: "Localização", href: "#localizacao" },
  ];

  const whatsappLink = "https://wa.me/5583982050815";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-foreground">
            Ótica <span className="text-accent">Dom Luís</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground text-sm font-medium hover:text-accent transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp Button */}
        <div className="hidden md:block">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200"
            >
              Falar no WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
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
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Falar no WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
