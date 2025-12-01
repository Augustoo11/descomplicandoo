// app/dashboard/page.tsx
import Link from "next/link";
// Removida a importação de CSS pois não foi fornecida, mas mantenha se estiver usando.

export default function DashboardPage() {
    return (
        <> 
            <header>
                <div style={{ width: 150, textAlign: 'left' }}> 
                    <i className="fa-solid fa-graduation-cap" /> Descomplicando
                </div>

                <div className="tt" style={{ textAlign: 'center', flexGrow: 1 }}>
                    Bem vindo ao Descomplicando
                </div>

                {/* 1. ÍCONE DE PERFIL CORRIGIDO: O <Link> agora é o wrapper diretamente. */}
                {/* Estilos do icn-u e width são aplicados diretamente ao <Link> para manter o layout. */}
                <Link 
                    href="/perfil" 
                    className="icn-u" // Aplica estilos CSS como fonte e text-align
                    style={{ width: 150, cursor: 'pointer', color: 'inherit' }} // Aplica width e cursor diretamente aqui
                >
                    <i className="fa-solid fa-user-circle" />
                </Link>
            </header>

            <div className="cont">
                
                <div className="menu">
                    <i className="fa-solid fa-house" />
                    <i className="fa-solid fa-book" />

                    {/* desempenho com link */}
                    <Link href="/dashboard/desempenho">
                        {/* O <i> é o filho direto do <Link> */}
                        <i className="fa-solid fa-chart-line" style={{ cursor: 'pointer' }} />
                    </Link>

                    {/* 2. ÍCONE DE CONFIGURAÇÕES CORRIGIDO: O <Link> envolve o <i> diretamente. */}
                    <Link href="/perfil">
                        <i className="fa-solid fa-cog" style={{ cursor: 'pointer' }} />
                    </Link>
                </div>

                {/* RESTANTE DO CÓDIGO (CARTÕES E ÁREA DE CONTEÚDO) PERMANECE O MESMO... */}
                <div className="area">
                    <i className="fa-solid fa-brain" />
                    <div className="txt">Selecione a matéria para iniciar os estudos e revisões!</div>

                    <div className="cartoes">
                        
                        {/* Cartão de Matemática - Já está correto */}
                        <Link href="/matematica" style={{ textDecoration: "none", color: "inherit" }}>
                            <div>
                                <div
                                    className="card"
                                    style={{ background: '#DCEEFF', boxShadow: '0 4px 6px #0000001a', cursor: 'pointer' }}
                                >
                                    <i className="bg-i" style={{ fontSize: 20, top: 10, left: 15 }}>A=πr²</i>
                                    <i className="bg-i" style={{ fontSize: 20, bottom: 5, right: 5 }}>√</i>
                                    <div className="tit">Matemática</div>
                                </div>

                                <div style={{ fontSize: 12, fontWeight: 'bold', marginTop: 10, color: '#335588', textAlign: 'center' }}>
                                    Matemática
                                </div>
                            </div>
                        </Link>

                        {/* Cartão de Português - Já está correto */}
                        <Link href="/prtugues" style={{ textDecoration: "none", color: "inherit" }}>
                            <div>
                                <div
                                    className="card"
                                    style={{ background: '#DCEEFF', boxShadow: '0 4px 6px #0000001a', cursor: 'pointer' }}
                                >
                                    <i className="bg-i" style={{ fontSize: 20, top: 10, right: 15 }}>ABCD</i>
                                    <i className="bg-i" style={{ fontSize: 20, bottom: 5, left: 5 }}>.,:;^´~</i>
                                    <div className="tit">Português</div>
                                </div>

                                <div style={{ fontSize: 12, fontWeight: 'bold', marginTop: 10, color: '#335588', textAlign: 'center' }}>
                                    Língua Portuguesa
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
}