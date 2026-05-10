/**
 * Hero Section Component
 * Design: Minimalismo Sofisticado
 * - Imagem à direita (layout assimétrico 60/40)
 * - Tipografia dramática (Playfair Display)
 * - Destaque do preço especial
 * - Espaçamento generoso
 */

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const whatsappLink = "https://wa.me/5583982050815";

  return (
    <section
      id="home"
      className="bg-white py-20 md:py-32 border-b border-border"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Ótica Dom Luís: O dom de fazer você{" "}
                <span className="text-accent">ver melhor</span>.
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                Armações exclusivas, lentes de alta tecnologia e o melhor preço
                de João Pessoa.
              </p>
            </div>

            {/* Highlight Price */}
            <div className="bg-muted rounded-lg p-6 border border-border">
              <p className="text-sm text-muted-foreground font-medium mb-2">
                Oferta Especial
              </p>
              <p className="text-4xl font-bold text-foreground">
                Exame de vista por apenas{" "}
                <span className="text-accent">R$ 29,99</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 text-base font-semibold"
                >
                  Agendar Exame
                </Button>
              </a>
              <a href="#produtos">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-foreground text-foreground hover:bg-muted transition-all duration-200 text-base font-semibold"
                >
                  Ver Produtos
                </Button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex justify-end">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/hero-glasses-femk7Xx6F2NzNPxqqnqdqs.webp"
              alt="Óculos elegantes Dom Luís"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mobile Image */}
        <div className="md:hidden mt-12">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/hero-glasses-femk7Xx6F2NzNPxqqnqdqs.webp"
            alt="Óculos elegantes Dom Luís"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
