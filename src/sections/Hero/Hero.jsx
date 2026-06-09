import "./hero.css"
import HeroBG from "../../assets/hero_bg.webp"

export default function Hero(){

    return(
        <section className="hero" id="home">
            <div className="hero__imagem">
                <img src={HeroBG} alt="Imagem de fundo"/>
            </div>
            <div className="hero__content">
                <div className="hero__content-title">
                    <h1>
                        Monitoramento orbital para proteger vidas na Terra.
                    </h1>
                </div>

                <div className="hero__content-subtitle">
                    <p>
                        O SpaceGuard utiliza dados simulados de satélites para monitorar enchentes, queimadas e deslizamentos, gerando alertas preventivos para regiões de risco.
                    </p>
                </div>

                <div className="hero__actions">
                    <a href="#mapa" className="hero__actions-map">Explorar mapa</a>
                    <a href="#historico" className="hero__actions-history">Nosso hitórico</a>
                </div>
            </div>
            
        </section>
    )
}