/**
 * Produtos Component
 * Design: Minimalismo Sofisticado
 * - Grid de 4 categorias de produtos
 * - Cards com hover effect
 * - Destaque para Clip-on
 */

const produtos = [
  {
    title: "Óculos de Grau",
    description:
      "Armações modernas e confortáveis com lentes de alta qualidade para sua visão perfeita.",
    highlight: false,
  },
  {
    title: "Óculos de Sol",
    description:
      "Proteção UV com estilo. Modelos exclusivos que combinam elegância e funcionalidade.",
    highlight: false,
  },
  {
    title: "Lentes de Contato",
    description:
      "Conforto e praticidade. Ampla variedade de marcas e tipos para suas necessidades.",
    highlight: false,
  },
  {
    title: "Clip-on (Especialidade)",
    description:
      "Inovação em óculos! Lentes que se acoplam aos seus óculos de sol favoritos.",
    highlight: true,
  },
];

export default function Produtos() {
  return (
    <section
      id="produtos"
      className="bg-muted py-20 md:py-32 border-b border-border"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-accent">Produtos e Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para enxergar melhor e com estilo.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {produtos.map((produto, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg transition-all duration-300 group ${
                produto.highlight
                  ? "bg-white border-2 border-accent shadow-lg hover:shadow-xl"
                  : "bg-white border border-border hover:shadow-lg"
              }`}
            >
              {produto.highlight && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold text-accent bg-accent/10 rounded-full">
                    ESPECIALIDADE
                  </span>
                </div>
              )}
              <h3
                className={`text-xl font-bold mb-3 ${
                  produto.highlight ? "text-accent" : "text-foreground"
                }`}
              >
                {produto.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {produto.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
