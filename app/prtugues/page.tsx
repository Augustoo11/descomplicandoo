import "../styles/matematica.css";

export default function Matematica() {
    return (
        <div>
            <header>
                <div style={{ width: "150px", textAlign: "left" }}>
                    <i className="fa-solid fa-book"></i> Descomplicando
                </div>

                <div className="tt" style={{ textAlign: "center", flexGrow: 1 }}>
                    PORTUGUÊS
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
                        A Língua Portuguesa é uma aventura cheia de palavras mágicas!  Aqui, vamos aprender a ler, escrever e descobrir o poder que as palavras têm de contar histórias, mostrar sentimhentos e unir pessoas.
                        <br />
                        <br />
                        Vamos Vamos juntos nessa jornada divertida pelo mundo das letras! 
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
                                    HELENA
                                </div>

                                <img src="/Portugues-PONTUAÇÂO.png" />
                                <div className="overlay">
                                    <i className="fa-solid fa-play"></i>
                                </div>
                            </div>

                            <div className="vd-info">
                                <div className="lbl">Pontuações</div>
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

                                <img src="/portugues-substantivo.png" />
                                <div className="overlay">
                                    <i className="fa-solid fa-play"></i>
                                </div>
                            </div>

                            <div className="vd-info">
                                <div className="lbl">Substantivo</div>
                                <div className="btn">ASSISTIR</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
