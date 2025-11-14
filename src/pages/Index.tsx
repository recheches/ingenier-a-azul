import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

const Index = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/56993354642", "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado correctamente");
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo and Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src={logo} alt="SGO Ingeniería" className="h-12 md:h-16" />
            
            <nav className="flex gap-6 md:gap-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base"
              >
                INICIO
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base"
              >
                SERVICIOS
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base"
              >
                CONTACTO
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-5xl">
          <div className="mb-6">
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6">
            SERVICIOS DE
            <br />
            OBRAS CIVILES
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones profesionales de ingeniería con estándares de calidad superior
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-6 border-t border-primary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            SERVICIOS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pisos Pulidos",
                description: "Pulido y tratamiento de pisos industriales y comerciales con acabados de alta calidad",
              },
              {
                title: "Hormigón Armado",
                description: "Construcción de estructuras de hormigón armado con diseño estructural certificado",
              },
              {
                title: "Pavimentación",
                description: "Pavimentación de calles, estacionamientos y áreas industriales",
              },
              {
                title: "Movimientos de Tierra",
                description: "Excavaciones, rellenos y nivelación de terrenos",
              },
              {
                title: "Obras Viales",
                description: "Construcción y mantención de vías de acceso y carreteras",
              },
              {
                title: "Asesoría Técnica",
                description: "Consultoría y supervisión de proyectos de obras civiles",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-secondary border border-primary/20 p-6 hover:border-primary transition-colors group"
              >
                <div className="w-12 h-1 bg-primary mb-4 group-hover:w-16 transition-all"></div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 border-t border-primary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            CONTACTO
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group w-full"
                  >
                    <MessageCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium">+56 9 9335 4642</span>
                  </button>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-6 h-6 text-primary" />
                    <span className="text-lg">contacto@sgoingeneria.cl</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-6 h-6 text-primary" />
                    <span className="text-lg">+56 9 9335 4642</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span className="text-lg">Chile</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-primary/30">
                <p className="text-muted-foreground leading-relaxed">
                  Ofrecemos soluciones integrales en obras civiles con más de 10 años de experiencia en el mercado.
                  Nuestro compromiso es la excelencia en cada proyecto.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary border border-primary/20 p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                    className="bg-background border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    required
                    className="bg-background border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Mensaje"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    required
                    rows={4}
                    className="bg-background border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  ENVIAR MENSAJE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-primary/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 SGO Ingeniería. Servicios Profesionales de Obras Civiles
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
