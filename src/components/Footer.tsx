import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full gradient-eco-primary flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-bold">Mesterpen Client</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Liderando el futuro de la vida sostenible con soluciones ecológicas innovadoras 
                que ahorran dinero y protegen nuestro planeta.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+34 (900) ECO-SAVE</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hola@mesterpenclient.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Empresa</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-white/70 hover:text-primary transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-white/70 hover:text-primary transition-colors">
                    Empleos
                  </a>
                </li>
                <li>
                  <a href="#press" className="text-white/70 hover:text-primary transition-colors">
                    Prensa
                  </a>
                </li>
                <li>
                  <a href="#partners" className="text-white/70 hover:text-primary transition-colors">
                    Socios
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-white/70 hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Recursos</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#help" className="text-white/70 hover:text-primary transition-colors">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#documentation" className="text-white/70 hover:text-primary transition-colors">
                    Documentación
                  </a>
                </li>
                <li>
                  <a href="#guides" className="text-white/70 hover:text-primary transition-colors">
                    Guías de Instalación
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="text-white/70 hover:text-primary transition-colors">
                    Calculadora de Ahorros
                  </a>
                </li>
                <li>
                  <a href="#webinars" className="text-white/70 hover:text-primary transition-colors">
                    Seminarios Web
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#privacy" className="text-white/70 hover:text-primary transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-white/70 hover:text-primary transition-colors">
                    Términos de Servicio
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="text-white/70 hover:text-primary transition-colors">
                    Política de Cookies
                  </a>
                </li>
                <li>
                  <a href="#licensing" className="text-white/70 hover:text-primary transition-colors">
                    Licencias
                  </a>
                </li>
                <li>
                  <a href="#warranties" className="text-white/70 hover:text-primary transition-colors">
                    Garantías
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-white/60 text-sm">
              © {currentYear} Mesterpen Client. Todos los derechos reservados.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center items-center space-x-8 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center space-x-2 text-white/60 text-xs">
              <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-xs font-bold">✓</span>
              </div>
              <span>Certificado EPA</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60 text-xs">
              <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-xs font-bold">✓</span>
              </div>
              <span>Socio Energy Star</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60 text-xs">
              <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-xs font-bold">✓</span>
              </div>
              <span>Certificado B Corp</span>
            </div>
            <div className="flex items-center space-x-2 text-white/60 text-xs">
              <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-xs font-bold">✓</span>
              </div>
              <span>Cumple ISO 14001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;