import "../../styles/mapa.css"
import MapaImg from "../../assets/mapa.webp"

import MapMarker from "./MapMarker"
import MapLegend from "./MapLegend"
import MapPanel from "./MapPanel"

export default function Mapa() {
    return (
        <section className="map-section" id="mapa">
            <div className="map__container">
                <div className="map__header">
                    <h2>Regiões monitoradas por satélite</h2>
                    <p>
                        Acompanhe áreas com risco de enchentes, queimadas e deslizamentos através de dados orbitais simulados em tempo real.
                    </p>
                </div>

                <div className="map__content">
                    <div className="map__map">
                        <img src={MapaImg} alt="Mapa de regiões monitoradas" />

                        <MapMarker
                            position="north"
                            risk="high"
                            label="Mata Leste - risco alto"
                        />

                        <MapMarker
                            position="east"
                            risk="medium"
                            label="Serra Azul - risco moderado"
                        />

                        <MapMarker
                            position="south"
                            risk="low"
                            label="Costa Sul - risco baixo"
                        />

                        <MapLegend />
                    </div>

                    <MapPanel />
                </div>
            </div>
        </section>
    )
}