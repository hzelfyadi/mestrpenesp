import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Phone, Home, Building2 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { toast } from "sonner";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    projectType: "house",
    fullName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const currentData = JSON.parse(localStorage.getItem("formSubmissions") || "[]");
      const newEntry = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };
      
      const updatedData = [...currentData, newEntry];
      localStorage.setItem("formSubmissions", JSON.stringify(updatedData));
      
      // Reset form
      setFormData({
        projectType: "house",
        fullName: "",
        email: "",
        phone: ""
      });
      
      // Close dialog
      (e.target as HTMLFormElement).closest("dialog")?.close();
      
      toast.success("Form submission saved successfully!");
    } catch (error) {
      console.error("Error saving form data:", error);
      toast.error("Error saving form submission");
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(20, 184, 166, 0.9) 0%, rgba(16, 185, 129, 0.9) 100%), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Text */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Producto Ecológico Certificado
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transforma Tu Mundo{" "}
                <span className="text-yellow-300">Sosteniblemente</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-lg">
                La solución ecológica perfecta para tu hogar. 
                Ahorra hasta un 30% en costos de energía mientras proteges nuestro planeta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-eco-lg">
                    Solicitar Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Solicita tu Demo</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label>¿Tu proyecto es para...?</Label>
                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant={formData.projectType === "house" ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleInputChange("projectType", "house")}
                          className="flex items-center gap-2"
                        >
                          <Home className="w-4 h-4" />
                          Casa
                        </Button>
                        <Button
                          type="button"
                          variant={formData.projectType === "apartment" ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleInputChange("projectType", "apartment")}
                          className="flex items-center gap-2"
                        >
                          <Building2 className="w-4 h-4" />
                          Apartamento
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nombre Completo</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Obtener Mi Cotización Gratuita
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Saber Más
              </Button>
            </div>
          </div>

          {/* Right Column - Eligibility Form */}
          <div className="bg-white rounded-2xl p-8 shadow-eco-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                ¡Comprueba tu elegibilidad en solo 30 segundos!
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label className="text-sm font-medium">¿Tu proyecto es para...?*</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant={formData.projectType === "house" ? "default" : "outline"}
                    onClick={() => handleInputChange("projectType", "house")}
                    className="h-12 flex items-center justify-center gap-2"
                  >
                    <Home className="w-4 h-4" />
                    CASA
                  </Button>
                  <Button
                    type="button"
                    variant={formData.projectType === "apartment" ? "default" : "outline"}
                    onClick={() => handleInputChange("projectType", "apartment")}
                    className="h-12 flex items-center justify-center gap-2"
                  >
                    <Building2 className="w-4 h-4" />
                    APARTAMENTO
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="heroFullName">Nombre Completo*</Label>
                <Input
                  id="heroFullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Ingresa tu nombre completo"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="heroEmail">Correo Electrónico*</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="heroEmail"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="tu@email.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="heroPhone">Teléfono*</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="heroPhone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+34 (555) 123-4567"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full gradient-eco-primary">
                Verificar Elegibilidad
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Evaluación gratuita • Sin obligación • Resultados instantáneos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;