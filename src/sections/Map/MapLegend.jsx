export default function MapLegend() {
    return (
        <div className="map__legend">
            <div className="map__legend-item">
                <span className="map__legend-dot map__legend-dot--low"></span>
                <p>Risco baixo</p>
            </div>

            <div className="map__legend-item">
                <span className="map__legend-dot map__legend-dot--medium"></span>
                <p>Risco moderado</p>
            </div>

            <div className="map__legend-item">
                <span className="map__legend-dot map__legend-dot--high"></span>
                <p>Risco alto</p>
            </div>
        </div>
    )
}