import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Shield } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 gradient-eco-hero"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-8 right-8 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-16 left-16 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Comienza Tu <span className="text-yellow-300">Viaje Ecológico</span> Hoy
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Únete a más de 50,000 propietarios que ya han hecho el cambio a soluciones energéticas sostenibles y 
              rentables. Tu planeta y tu billetera te lo agradecerán.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <Clock className="w-6 h-6 text-yellow-300" />
              <span className="font-medium">Evaluación de 30 Segundos</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <Shield className="w-6 h-6 text-yellow-300" />
              <span className="font-medium">Garantía de 5 Años</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <Phone className="w-6 h-6 text-yellow-300" />
              <span className="font-medium">Soporte 24/7</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-eco-lg text-lg px-8 py-4 group"
            >
              Obtener Evaluación Gratuita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </Button>
          </div>

          {/* Urgency Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
            <p className="text-white/90 text-lg font-medium mb-2">
              🔥 Tiempo Limitado: Instalación Gratuita para los Primeros 100 Clientes
            </p>
            <p className="text-white/70 text-sm">
              Ahorra 2,500€ adicionales en costos de instalación. La oferta expira el 31 de diciembre.
            </p>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-2">98%</div>
            <div className="text-white/80 text-sm">Satisfacción del Cliente</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-2">2.5K€</div>
            <div className="text-white/80 text-sm">Ahorro Anual Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-2">30%</div>
            <div className="text-white/80 text-sm">Reducción Energética</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-yellow-300 mb-2">24h</div>
            <div className="text-white/80 text-sm">Tiempo de Instalación</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;