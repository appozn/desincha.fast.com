import { Clock, Home, CheckCircle, Zap } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Rotina prática de até 15 minutos por dia',
      description: 'Método rápido que cabe na sua rotina'
    },
    {
      icon: Home,
      title: 'Método feito em casa, sem academia',
      description: 'Nada de equipamentos caros ou mensalidades'
    },
    {
      icon: CheckCircle,
      title: 'Ajustes simples e possíveis de seguir',
      description: 'Mudanças práticas que qualquer pessoa consegue fazer'
    },
    {
      icon: Zap,
      title: 'Acesso imediato após o pagamento',
      description: 'Comece agora mesmo, sem esperar'
    }
  ];

  return (
    <section id="beneficios" className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          O que você vai receber
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mb-12 sm:mb-16"></div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 group"
            >
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
