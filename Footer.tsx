import { AlertCircle } from 'lucide-react';

export function PainSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start gap-4 mb-8">
          <AlertCircle className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
              Barriga inchada mesmo comendo pouco.
              <br />
              Roupas apertadas.
              <br />
              Desconforto quase todos os dias.
            </h2>

            <div className="h-1 w-20 bg-emerald-500 mb-6"></div>

            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              O problema não é falta de esforço.
              <br />
              É <span className="text-emerald-400 font-semibold">não saber o método certo.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
