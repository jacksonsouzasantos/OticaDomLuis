/**
 * Exame de Vista Component
 * Design: Minimalismo Sofisticado
 * - Seção destacada com CTA
 * - Imagem de pessoa usando óculos
 * - Layout assimétrico
 */

import { Button } from "@/components/ui/button";

export default function ExameVista() {
  const whatsappLink = "https://wa.me/5583982050815";

  return (
    <section
      id="exame"
      className="bg-muted py-20 md:py-32 border-b border-border"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="hidden md:flex justify-start">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/person-glasses-mYYzKHui2aAgMERtfn7icp.webp"
              alt="Pessoa usando óculos elegantes"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Exame de Vista Completo
              </h2>
              <p className="text-lg text-muted-foreground font-medium">
                Tecnologia de ponta para diagnosticar sua visão com precisão.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 h-12 bg-accent rounded-full"></div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Avaliação Completa
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Análise detalhada da sua visão com equipamentos modernos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 h-12 bg-accent rounded-full"></div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Recomendações Personalizadas
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sugestões de lentes e armações ideais para seu caso.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 h-12 bg-accent rounded-full"></div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Preço Especial
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Apenas R$ 29,99 para seu exame de vista inicial.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 text-base font-semibold"
              >
                Agendar Exame Agora
              </Button>
            </a>
          </div>

          {/* Mobile Image */}
          <div className="md:hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/o9PBbJKMwxxnYfjyJdEesn/person-glasses-mYYzKHui2aAgMERtfn7icp.webp"
              alt="Pessoa usando óculos elegantes"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
