import { MessageCircle } from "lucide-react";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/56993354642", "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="py-8 px-6 border-b border-primary">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-wider">
          INGENIERÍA
        </h1>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            SERVICIOS DE
            <br />
            OBRAS CIVILES
          </h2>
        </div>
      </main>

      {/* Contact Section */}
      <section className="py-12 px-6 border-t border-primary">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 tracking-wide">
            CONTACTO
          </h3>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
          >
            <MessageCircle className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-lg md:text-xl font-medium">+56 9 9335 4642</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
