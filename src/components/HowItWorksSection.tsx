import { useEffect, useRef, useState } from "react";
import { Search, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: Search,
      title: "Evaluación y Análisis",
      description: "Nuestros expertos realizan una evaluación integral de los patrones de uso energético, estructura y potencial de impacto ambiental de tu hogar.",
      details: "Consulta gratuita de 30 minutos",
      color: "from-blue-500 to-primary"
    },
    {
      icon: Users,
      title: "Diseño de Solución Personalizada",
      description: "Diseñamos un sistema ecológico personalizado adaptado a tus necesidades específicas, presupuesto y objetivos de sostenibilidad.",
      details: "Recomendación personalizada",
      color: "from-primary to-secondary"
    },
    {
      icon: CheckCircle,
      title: "Instalación y Optimización",
      description: "Instalación profesional seguida de optimización inteligente para asegurar máxima eficiencia y ahorro energético inmediato.",
      details: "Activación el mismo día",
      color: "from-secondary to-green-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 gradient-eco-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Cómo <span className="text-primary">Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestro proceso optimizado hace que volverse ecológico sea simple, 
            rápido y completamente libre de complicaciones.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-border"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-2000 ease-out"
            style={{ 
              width: `${(visibleSteps.length / steps.length) * 100}%`,
              transform: 'translateY(-50%)'
            }}
          ></div>

          {/* Steps */}
          <div className="relative grid grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              
              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 delay-${index * 100} ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className="relative mb-8">
                    <div className={`relative z-10 w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-eco`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white border-4 border-primary/20"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-eco transition-all duration-300">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent text-sm font-medium text-primary">
                      <CheckCircle className="w-4 h-4" />
                      <span>{step.details}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);
            
            return (
              <div
                key={index}
                className={`flex items-start space-x-4 transition-all duration-700 delay-${index * 100} ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-8'
                }`}
              >
                {/* Step Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-eco relative`}>
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-border mx-auto mt-4"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent text-xs font-medium text-primary">
                    <CheckCircle className="w-3 h-3" />
                    <span>{step.details}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-eco-lg max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              ¿Listo para Comenzar?
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Únete a miles de propietarios que han hecho el cambio a la vida sostenible
            </p>
            <Button size="lg" className="gradient-eco-primary group">
              Comienza Tu Viaje
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;