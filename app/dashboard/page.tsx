import Link from "next/link";

// app/dashboard/page.tsx
// Este é um Server Component por padrão, o que é suficiente para este layout estático.

export default function DashboardPage() {
  return (
    <> 
      {/* HEADER - Usa classes customizadas do globals.css */}
      <header>
        {/* Estilos inline são mantidos para manter a fidelidade do design original */}
        <div style={{ width: 150, textAlign: 'left' }}> 
          <i className="fa-solid fa-graduation-cap" /> Descomplicando
        </div>

        <div className="tt" style={{ textAlign: 'center', flexGrow: 1 }}>
          Bem vindo ao Descomplicando
        </div>

        <div className="icn-u" style={{ width: 150 }}>
          <i className="fa-solid fa-user-circle" />
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL - Classe .cont define o layout flex (menu + area) */}
      <div className="cont">
        
        {/* MENU LATERAL - Classe .menu define a barra lateral de 60px */}
        <div className="menu">
          <i className="fa-solid fa-house" />
          <i className="fa-solid fa-book" />

          {/* desempenho com link */}
          <Link href="/dashboard/desempenho">
            <i className="fa-solid fa-chart-line" style={{ cursor: 'pointer' }} />
          </Link>

          <i className="fa-solid fa-cog" />
        </div>

        {/* ÁREA DE CONTEÚDO - Classe .area preenche o restante da tela */}
        <div className="area">
          <i className="fa-solid fa-brain" />
          <div className="txt">Selecione a matéria para iniciar os estudos e revisões!</div>

          {/* CARTÕES - Classe .cartoes para o layout responsivo */}
          <div className="cartoes">
            
            {/* Cartão de Matemática */}
            <div>
              <div
                className="card"
                style={{ background: '#DCEEFF', boxShadow: '0 4px 6px #0000001a' }}
              >
                {/* Ícones de fundo - Usam a classe .bg-i */}
                <i className="bg-i" style={{ fontSize: 20, top: 10, left: 15 }}>A=πr²</i>
                <i className="bg-i" style={{ fontSize: 20, bottom: 5, right: 5 }}>√</i>
                <div className="tit">Matemática</div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 'bold', marginTop: 10, color: '#335588', textAlign: 'center' }}>
                Matemática
              </div>
            </div>

            {/* Cartão de Português */}
            <div>
              <div
                className="card"
                style={{ background: '#DCEEFF', boxShadow: '0 4px 6px #0000001a' }}
              >
                {/* Ícones de fundo */}
                <i className="bg-i" style={{ fontSize: 20, top: 10, right: 15 }}>ABCD</i>
                <i className="bg-i" style={{ fontSize: 20, bottom: 5, left: 5 }}>.,:;^´~</i>
                <div className="tit">Português</div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 'bold', marginTop: 10, color: '#335588', textAlign: 'center' }}>
                Língua Portuguesa
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
