// app/dashboard/page.tsx — versão modernizada
// Layout inspirado na imagem enviada, mas com visual mais atual.

"use client";

import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FB] text-[#1A2A3A]">
      {/* HEADER */}
      <header className="w-full h-16 bg-[#0066FF] text-white flex items-center justify-between px-6 shadow-md">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <i className="fa-solid fa-graduation-cap text-xl" />
          Descomplicando
        </div>

        <div className="text-center text-sm font-medium tracking-wide">
          SEU DESEMPENHO NO DESCOMPLICANDO
        </div>

        <div className="text-xl">
          <i className="fa-solid fa-user-circle" />
        </div>
      </header>

      <div className="flex flex-1">
        {/* MENU LATERAL */}
        <aside className="w-14 bg-[#E8ECF4] flex flex-col items-center py-6 gap-6 text-[#3A4A5A] text-lg">
          <i className="fa-solid fa-house" />
          <i className="fa-solid fa-book" />
          <i className="fa-solid fa-chart-line" />
          <i className="fa-solid fa-cog" />
        </aside>

        {/* ÁREA PRINCIPAL */}
        <main className="flex-1 px-6 py-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#223344]">Meu Progresso</h2>
          <p className="text-sm text-[#556577] mb-6">Veja tudo o que você já aprendeu!</p>

          {/* CARDS DE PROGRESSO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
              <div className="bg-[#FFDA6B] w-12 h-12 rounded-full flex items-center justify-center text-2xl">✓</div>
              <div>
                <div className="text-sm text-[#6A7A8A]">Aulas Completas</div>
                <div className="text-lg font-bold">24 aulas</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
              <div className="bg-[#AFEEC6] w-12 h-12 rounded-full flex items-center justify-center text-xl">⏱</div>
              <div>
                <div className="text-sm text-[#6A7A8A]">Horas de Aula</div>
                <div className="text-lg font-bold">6 horas</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
              <div className="bg-[#8CC5FF] w-12 h-12 rounded-full flex items-center justify-center text-xl">📈</div>
              <div>
                <div className="text-sm text-[#6A7A8A]">Evolução</div>
                <div className="text-lg font-bold">Nível 20</div>
              </div>
            </div>
          </div>

          {/* NÍVEL ATUAL */}
          <div className="bg-gradient-to-r from-[#8CC5FF] to-[#60A5FA] rounded-2xl shadow p-5 flex items-center justify-between text-white mb-10">
            <div>
              <div className="text-sm opacity-90">Nível Atual</div>
              <div className="text-xl font-bold">Nível 3: Explorador do Saber</div>
            </div>
            <Image src="/kids.png" alt="Personagem" width={90} height={90} />
          </div>

          {/* CARDS DE MATÉRIAS */}
          <h3 className="text-xl font-semibold text-[#223344] mb-4">Matérias</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Matemática */}
            <div className="bg-white rounded-2xl shadow p-5 hover:scale-[1.02] transition cursor-pointer relative overflow-hidden">
              <div className="absolute left-3 top-3 text-sm opacity-20 font-bold">A=πr²</div>
              <div className="absolute right-3 bottom-3 text-lg opacity-20 font-bold">√</div>
              <div className="text-lg font-bold text-[#335588]">Matemática</div>
            </div>

            {/* Português */}
            <div className="bg-white rounded-2xl shadow p-5 hover:scale-[1.02] transition cursor-pointer relative overflow-hidden">
              <div className="absolute right-3 top-3 text-sm opacity-20 font-bold">ABCD</div>
              <div className="absolute left-3 bottom-3 text-lg opacity-20 font-bold">.,:;^´~</div>
              <div className="text-lg font-bold text-[#335588]">Língua Portuguesa</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
