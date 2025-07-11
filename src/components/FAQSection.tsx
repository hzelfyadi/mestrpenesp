import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuánto puedo realmente ahorrar en mis facturas de energía?",
      answer: "La mayoría de los clientes ven una reducción del 20-30% en sus facturas de energía durante el primer mes. Basándose en el uso energético actual de tu hogar, nuestra evaluación te proporcionará una estimación personalizada de ahorros. Muchos clientes ahorran entre 1,500€ y 3,000€ anuales."
    },
    {
      question: "¿El proceso de instalación interrumpe mi vida diaria?",
      answer: "¡Para nada! Nuestro proceso de instalación está diseñado para ser mínimamente invasivo. La mayoría de las instalaciones se completan en 4-6 horas, y trabajamos según tu horario. Nuestros técnicos certificados aseguran una instalación limpia y eficiente sin daños a tu propiedad."
    },
    {
      question: "¿Qué tipo de garantía y soporte proporcionan?",
      answer: "Proporcionamos una garantía integral de 5 años en todo el equipo e instalación. Además, nuestro equipo de soporte al cliente 24/7 siempre está disponible para ayudar. También incluimos verificaciones de mantenimiento anuales gratuitas para asegurar un rendimiento óptimo."
    },
    {
      question: "¿Cómo funciona realmente la tecnología?",
      answer: "Nuestro sistema utiliza algoritmos avanzados de IA para monitorear y optimizar el consumo energético de tu hogar en tiempo real. Ajusta automáticamente la calefacción, refrigeración y uso eléctrico basándose en tus patrones, condiciones climáticas y precios de energía para maximizar la eficiencia y ahorros."
    },
    {
      question: "¿Es esto adecuado para apartamentos o solo para casas?",
      answer: "¡Nuestra tecnología funciona tanto para casas como para apartamentos! Tenemos soluciones especializadas para diferentes tipos de propiedades. Para apartamentos, nos enfocamos en la optimización de unidades individuales, mientras que las casas pueden beneficiarse de la integración completa del hogar incluyendo sistemas HVAC y energía renovable."
    },
    {
      question: "¿Qué pasa si me mudo o quiero actualizar?",
      answer: "Nuestro sistema está diseñado para ser transferible. Si te mudas, podemos ayudar a reubicar tu sistema a tu nuevo hogar por una tarifa mínima. Para actualizaciones, los clientes existentes reciben precios prioritarios en nuevas funciones y capacidades expandidas."
    },
    {
      question: "¿Qué tan rápido veré resultados?",
      answer: "La mayoría de los clientes notan cambios inmediatos en sus patrones de uso energético dentro de 24-48 horas de la instalación. Las reducciones significativas en las facturas son típicamente visibles en tu primer ciclo de facturación mensual, con optimización completa lograda dentro de 30 días."
    },
    {
      question: "¿Hay incentivos gubernamentales o beneficios fiscales?",
      answer: "¡Sí! Muchas de nuestras soluciones califican para créditos fiscales federales, reembolsos estatales e incentivos de empresas de servicios públicos locales. Nuestro equipo te ayudará a identificar y solicitar todos los programas disponibles, que pueden reducir tu inversión inicial en un 30-50%."
    }
  ];

  return (
    <section id="faq" className="py-20 gradient-eco-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 gradient-eco-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Obtén respuestas a las preguntas más comunes sobre nuestras soluciones ecológicas
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-card border border-border hover:shadow-eco transition-all duration-300"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <span className="text-sm font-semibold text-primary">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Help Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-eco-lg max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              ¿Tienes Más Preguntas?
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Nuestro equipo experto está aquí para ayudarte a tomar la mejor decisión para tu hogar
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+34-900-ECO-SAVE" 
                className="block w-full py-3 px-6 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                Llamar: +34 (900) ECO-SAVE
              </a>
              <a 
                href="mailto:ayuda@mesterpenclient.com" 
                className="block w-full py-3 px-6 border border-primary text-primary rounded-xl font-medium hover:bg-primary/5 transition-colors"
              >
                Email: ayuda@mesterpenclient.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;