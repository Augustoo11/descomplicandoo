// app/configuracoes/page.tsx
import React from "react";
import "../styles/perfil.css";

export default function Configuracoes() {

    const nomeUsuario = "Seu nome";

    // Agora usando imagem que está dentro da pasta PUBLIC
    // Exemplo: public/perfil.png
    const fotoUrl = "/perfil.png";

    return (
        <div className="app-container">

            <header>
                <div style={{ width: "150px", textAlign: "left" }}>
                    <i className="fa-solid fa-book"></i> Descomplicando
                </div>

                <div className="tt" style={{ textAlign: "center", flexGrow: 1 }}>
                    CONFIGURAÇÕES
                </div>

                <div className="icn-u" style={{ width: "150px" }}>
                    <i className="fa-solid fa-user-circle"></i>
                </div>
            </header>

            <div className="cont">

                <div className="menu">
                    <i className="fa-solid fa-house"></i>
                    <i className="fa-solid fa-book"></i>
                    <i className="fa-solid fa-chart-line"></i>
                    <i className="fa-solid fa-gear"></i>
                </div>

                <div className="area">

                    {/* PERFIL */}
                    <div className="perfil-box">
                        <div className="foto-avatar">
                            <img src="/Perfil.png" alt="Foto de Perfil" />
                        </div>
                        <h2>{nomeUsuario}</h2>
                        <p>Alterar nome<br />Alterar foto de perfil</p>
                    </div>

                    {/* LISTA DE OPÇÕES */}
                    <div className="lista-config">
                        <div className="item">
                            <strong>Suas informações</strong>
                            <span>Consultar informações</span>
                        </div>

                        <div className="item">
                            <strong>Idioma</strong>
                            <span>Alterar o idioma</span>
                        </div>

                        <div className="item">
                            <strong>Acessibilidade</strong>
                            <span>Deixe a seu gosto</span>
                        </div>

                        <div className="item">
                            <strong>Notificações</strong>
                            <span>Deixe a seu gosto</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
