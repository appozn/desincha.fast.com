import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToOffers = () => {
    const element = document.getElementById('ofertas');
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
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
          Pare de se sentir{' '}
          <span className="text-emerald-600 relative">
            inchado(a)
            <span className="absolute -inset-1 bg-emerald-400/20 blur-xl -z-10"></span>
          </span>
          {' '}todos os dias.
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
          Uma rotina simples, feita em casa, que já ajudou milhares de pessoas a se sentirem melhor com o próprio corpo.
        </p>

        <button
          onClick={scrollToOffers}
          className="group bg-emerald-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-emerald-700 transition-all duration-300 shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-105 inline-flex items-center gap-3 animate-fade-in-delay-2"
        >
          QUERO DESINCHAR AGORA
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Acesso imediato
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            100% digital
          </div>
        </div>
      </div>
    </section>
  );
}
