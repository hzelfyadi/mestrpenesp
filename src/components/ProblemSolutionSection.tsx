import { useEffect, useRef, useState } from "react";
import { TrendingDown, Zap, DollarSign, Thermometer } from "lucide-react";

const ProblemSolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problem Statement - Left */}
            <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Las Soluciones Tradicionales Están <span className="text-destructive">Fallando a Nuestro Planeta</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cada año, millones de hogares luchan con costos energéticos crecientes, 
                  sistemas ineficientes y preocupaciones ambientales en aumento.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Facturas de Energía Disparadas</h3>
                    <p className="text-muted-foreground">
                      Los hogares promedio ven aumentos anuales del 15-25% en los costos de energía
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Thermometer className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Pobre Eficiencia Energética</h3>
                    <p className="text-muted-foreground">
                      Los sistemas obsoletos desperdician el 40% de la energía por calefacción y refrigeración ineficientes
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Impacto Ambiental</h3>
                    <p className="text-muted-foreground">
                      Las fuentes de energía tradicionales contribuyen al 28% de las emisiones de carbono
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Showcase - Right */}
          <div className={`space-y-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 gradient-eco-hero rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-eco-lg">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 gradient-eco-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Nuestra <span className="text-primary">Solución Inteligente</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mt-2">
                    Tecnología eco-revolucionaria que transforma cómo consumes energía
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-xl bg-accent/50">
                    <div className="text-3xl font-bold text-primary mb-1">30%</div>
                    <div className="text-sm text-muted-foreground">Ahorro Energético</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-accent/50">
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoreo</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-accent/50">
                    <div className="text-3xl font-bold text-primary mb-1">5 Años</div>
                    <div className="text-sm text-muted-foreground">Garantía</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-xl bg-accent/50">
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Eco-Amigable</div>
                  </div>
                </div>

                <div className="mt-8 p-6 gradient-eco-subtle rounded-xl border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-3">¿Qué nos hace diferentes?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Optimización energética con IA</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Proceso de fabricación cero residuos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Integración perfecta con hogar inteligente</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;