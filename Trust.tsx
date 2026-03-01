import { CheckCircle, Sparkles, Crown } from 'lucide-react';

export function Offers() {
  return (
    <section id="ofertas" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Escolha sua oferta
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mb-12 sm:mb-16"></div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 relative group">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              OFERTA ESPECIAL
            </div>

            <div className="pt-4">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-8 h-8 text-emerald-600" />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Acesso Básico
                </h3>
              </div>

              <div className="text-center mb-6">
                <div className="text-5xl sm:text-6xl font-bold text-emerald-600 mb-2">
                  R$ 19,90
                </div>
                <p className="text-gray-600">Acesso imediato • Produto digital</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Método completo de desinchar</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Rotinas práticas de 15 minutos</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Entrega imediata no e-mail</span>
                </div>
              </div>

              <a
                href="https://go.invictuspay.app.br/mhy0zxdku5"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-600 text-white text-center px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60 group-hover:scale-105"
              >
                COMPRAR AGORA
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 sm:p-8 rounded-3xl shadow-2xl border-2 border-emerald-500 hover:border-emerald-400 transition-all duration-300 hover:shadow-emerald-500/40 relative group transform hover:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
              <Crown className="w-4 h-4" />
              MAIS COMPLETO
            </div>

            <div className="pt-4">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Crown className="w-8 h-8 text-white" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Acesso Completo
                </h3>
              </div>

              <div className="text-center mb-6">
                <div className="text-lg text-emerald-100 line-through mb-1">
                  De R$ 79,90
                </div>
                <div className="text-5xl sm:text-6xl font-bold text-white mb-2">
                  R$ 49,90
                </div>
                <p className="text-emerald-100">Conteúdo completo + material bônus</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Tudo da oferta básica</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Material bônus exclusivo</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Guias complementares</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-200 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Suporte prioritário</span>
                </div>
              </div>

              <a
                href="https://go.invictuspay.app.br/5mhoo"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-emerald-700 text-center px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:shadow-2xl group-hover:scale-105"
              >
                QUERO A VERSÃO COMPLETA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
