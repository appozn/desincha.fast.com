import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="text-xl sm:text-2xl font-bold text-emerald-700">
            DESINCHA FAST
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('avaliacoes')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection('ofertas')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Ofertas
            </button>
            <button
              onClick={() => scrollToSection('ofertas')}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 transition-all duration-300 font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
            >
              Comprar
            </button>
          </div>

          <button
            onClick={() => scrollToSection('ofertas')}
            className="md:hidden bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition-all duration-300 font-semibold text-sm shadow-lg shadow-emerald-500/30"
          >
            Comprar
          </button>
        </div>
      </div>
    </nav>
  );
}
