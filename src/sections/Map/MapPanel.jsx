import MapPanelItem from "./MapPanelItem"

export default function MapPanel() {
    return (
        <aside className="map__panel">
            <div className="map__panel-header">
                <span>Região em destaque</span>
                <h3>Mata Leste</h3>
                <p>
                    Área monitorada por satélite com sinais de aumento de temperatura e focos de calor.
                </p>
            </div>

            <div className="map__panel-risk">
                <span className="map__panel-risk-label">Nível de risco</span>
                <strong>Alto</strong>
            </div>

            <div className="map__panel-data">
                <MapPanelItem label="Tipo de risco" value="Queimada" />
                <MapPanelItem label="Temperatura" value="39°C" />
                <MapPanelItem label="Chuva acumulada" value="5mm" />
                <MapPanelItem label="Focos de incêndio" value="12" />
            </div>

            <div className="map__panel-alert">
                <span>Status do alerta</span>
                <strong>Alerta preventivo emitido</strong>
            </div>
        </aside>
    )
}