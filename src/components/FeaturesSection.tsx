import { useEffect, useRef, useState } from "react";
import { Leaf, Shield, Zap, BarChart3, Smartphone, Users } from "lucide-react";

const FeaturesSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Leaf,
      title: "100% Energía Renovable",
      description: "Aprovecha el poder de la naturaleza con nuestra tecnología avanzada de integración solar y eólica.",
      delay: 0
    },
    {
      icon: Shield,
      title: "Protección de Por Vida",
      description: "Servicios integrales de garantía y mantenimiento para asegurar que tu inversión esté protegida.",
      delay: 100
    },
    {
      icon: Zap,
      title: "Optimización Energética Instantánea",
      description: "Monitoreo en tiempo real y ajustes automáticos para máxima eficiencia y ahorro.",
      delay: 200
    },
    {
      icon: BarChart3,
      title: "Análisis Inteligente",
      description: "Información detallada e informes para rastrear tu uso de energía e impacto ambiental.",
      delay: 300
    },
    {
      icon: Smartphone,
      title: "Control Móvil",
      description: "Gestiona todo tu ecosistema desde cualquier lugar con nuestra aplicación móvil intuitiva.",
      delay: 400
    },
    {
      icon: Users,
      title: "Soporte Experto",
      description: "Equipo dedicado de éxito del cliente disponible 24/7 para ayudarte a maximizar tus beneficios.",
      delay: 500
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleFeatures(prev => [...prev, index]);
            }, features[index].delay);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            ¿Por Qué Elegir <span className="text-primary">Mesterpen Client</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre las características clave que hacen de nuestras soluciones ecológicas 
            la elección inteligente para propietarios conscientes del medio ambiente.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleFeatures.includes(index);
            
            return (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-eco hover:-translate-y-2">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 gradient-eco-subtle rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 gradient-eco-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 gradient-eco-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-accent border border-primary/20">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Únete a más de 50,000 clientes satisfechos marcando la diferencia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;