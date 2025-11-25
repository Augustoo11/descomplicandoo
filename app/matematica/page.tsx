import "../styles/matematica.css";

export default function Matematica() {
    return (
        <div>
            <header>
                <div style={{ width: "150px", textAlign: "left" }}>
                    <i className="fa-solid fa-book"></i> Descomplicando
                </div>

                <div className="tt" style={{ textAlign: "center", flexGrow: 1 }}>
                    MATEMÁTICA
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
                    <div className="txt">
                        A Matemática é uma jornada cheia de descobertas incríveis! Aqui, vamos explorar números,
                        formas e raciocínios que nos ajudam a entender o mundo ao redor. Com ela, podemos resolver
                        mistérios, criar soluções e até nos divertir com desafios e jogos.
                        <br />
                        <br />
                        Vamos juntos nessa aventura emocionante pelo universo dos números e da lógica!
                    </div>

                    <div className="vds">

                        <div className="vd-c">
                            <div className="vd-img">
                                <div style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "10px",
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    color: "white",
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    fontSize: "12px",
                                    fontWeight: "bold"
                                }}>
                                    JOÃO
                                </div>

                                <img src="/imagens/matematica-joao.png" />
                                <div className="overlay">
                                    <i className="fa-solid fa-play"></i>
                                </div>
                            </div>

                            <div className="vd-info">
                                <div className="lbl">SOMA E SUBTRAÇÃO</div>
                                <div className="btn">ASSISTIR</div>
                            </div>
                        </div>

                        <div className="vd-c">
                            <div className="vd-img">
                                <div style={{
                                    position: "absolute",
                                    top: "10px",
                                    left: "10px",
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    color: "white",
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    fontSize: "12px",
                                    fontWeight: "bold"
                                }}>
                                    LUCIA
                                </div>

                                <img src="/imagens/Outra-mulher-matemática.png" />
                                <div className="overlay">
                                    <i className="fa-solid fa-play"></i>
                                </div>
                            </div>

                            <div className="vd-info">
                                <div className="lbl">EQUAÇÃO</div>
                                <div className="btn">ASSISTIR</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
