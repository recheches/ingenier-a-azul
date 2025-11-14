import { MessageCircle, Mail, Phone, MapPin, TrendingUp, Users, Award } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";
import { useCounter } from "@/hooks/useCounter";

const Index = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const scrollY = useParallax();
  const servicesAnimation = useScrollAnimation(0.2);
  const statsAnimation = useScrollAnimation(0.3);
  const contactAnimation = useScrollAnimation(0.2);

  const yearsCount = useCounter(15, 2000, statsAnimation.isVisible);
  const projectsCount = useCounter(250, 2000, statsAnimation.isVisible);
  const clientsCount = useCounter(150, 2000, statsAnimation.isVisible);

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

      {/* Hero Section with Parallax */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: `radial-gradient(circle at 50% ${50 + scrollY * 0.1}%, hsl(var(--primary) / 0.15), transparent 70%)`
          }}
        />
        <div className="text-center max-w-5xl relative z-10">
          <div className="mb-6 animate-fade-in">
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6 animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            SERVICIOS DE
            <br />
            OBRAS CIVILES
          </h1>
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            Soluciones profesionales de ingeniería con estándares de calidad superior
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section 
        ref={statsAnimation.ref}
        className="py-20 px-6 border-t border-primary/30 bg-secondary/30"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center transform transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                +{yearsCount}
              </div>
              <div className="text-muted-foreground font-medium">Años de Experiencia</div>
            </div>
            
            <div className={`text-center transform transition-all duration-1000 delay-200 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center mb-4">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                +{projectsCount}
              </div>
              <div className="text-muted-foreground font-medium">Proyectos Completados</div>
            </div>
            
            <div className={`text-center transform transition-all duration-1000 delay-500 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                +{clientsCount}
              </div>
              <div className="text-muted-foreground font-medium">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesAnimation.ref}
        id="servicios" 
        className="py-20 px-6 border-t border-primary/30"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-12 text-center transition-all duration-1000 ${servicesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                className={`bg-secondary border border-primary/20 p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group hover:-translate-y-1 ${
                  servicesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: servicesAnimation.isVisible ? `${index * 100}ms` : '0ms' 
                }}
              >
                <div className="w-12 h-1 bg-primary mb-4 group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
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
      <section 
        ref={contactAnimation.ref}
        id="contacto" 
        className="py-20 px-6 border-t border-primary"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-12 text-center transition-all duration-1000 ${contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            CONTACTO
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${contactAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
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
            <div className={`bg-secondary border border-primary/20 p-8 transition-all duration-1000 delay-500 ${contactAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
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
