import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentLogo, setCurrentLogo] = useState(0);

  const testimonials = [
    {
      quote: "Mesterpen Client transformó completamente la eficiencia energética de nuestro hogar. Hemos ahorrado más de 2,000€ solo en el primer año, y saber que estamos ayudando al medio ambiente lo hace aún mejor.",
      author: "María González",
      role: "Propietaria",
      location: "Madrid, España",
      rating: 5,
      savings: "Más de 2,000€ ahorrados"
    },
    {
      quote: "La instalación fue perfecta y los resultados fueron inmediatos. Nuestras facturas de energía se redujeron un 35% en el primer mes. El equipo fue profesional y la tecnología es impresionante.",
      author: "Carlos Ruiz",
      role: "Administrador de Propiedades", 
      location: "Barcelona, España",
      rating: 5,
      savings: "35% de reducción"
    },
    {
      quote: "Era escéptica al principio, pero Mesterpen Client cumplió cada promesa. El sistema de monitoreo inteligente muestra exactamente cuánto estamos ahorrando en tiempo real. Es como tener un asesor energético personal.",
      author: "Ana Martínez",
      role: "Propietaria de Pequeño Negocio",
      location: "Valencia, España", 
      rating: 5,
      savings: "Ahorros en tiempo real"
    }
  ];

  const partnerLogos = [
    { name: "EcoTech", logo: "🌱" },
    { name: "SociosEco", logo: "🔋" },
    { name: "SostenibleCorp", logo: "♻️" },
    { name: "EnergíaLimpia", logo: "⚡" },
    { name: "FuturoVerde", logo: "🌍" },
    { name: "RenovableInc", logo: "☀️" }
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const logoInterval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % Math.ceil(partnerLogos.length / 3));
    }, 3000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(logoInterval);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted Partners */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Confiado por organizaciones líderes a nivel mundial
          </p>
          
          {/* Logo Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentLogo * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(partnerLogos.length / 3) }).map((_, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0">
                  <div className="flex justify-center items-center space-x-12">
                    {partnerLogos.slice(groupIndex * 3, (groupIndex + 1) * 3).map((partner, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 px-6 py-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                      >
                        <span className="text-2xl">{partner.logo}</span>
                        <span className="font-medium text-foreground">{partner.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Historias reales de clientes reales que han transformado sus hogares con Mesterpen Client
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-eco-lg relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 gradient-eco-primary rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 gradient-eco-primary rounded-full blur-2xl opacity-10"></div>

            {/* Quote Icon */}
            <div className="relative text-center mb-8">
              <div className="w-16 h-16 gradient-eco-primary rounded-2xl flex items-center justify-center mx-auto">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="relative text-center">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {testimonial.author}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonial.role} • {testimonial.location}
                        </p>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-sm font-medium text-primary">
                          {testimonial.savings}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full p-0"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {/* Dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-primary w-8' 
                          : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full p-0"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-muted-foreground">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">5M€+</div>
            <div className="text-muted-foreground">Ahorros Totales</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-muted-foreground">Tasa de Satisfacción</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;