export default function MapPanelItem({ label, value }) {
    return (
        <div className="map__panel-item">
            <span>{label}</span>
            <strong>{value}</strong>
        </div>
    )
}