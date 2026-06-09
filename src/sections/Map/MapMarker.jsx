export default function MapMarker({ position, risk, label }) {
    return (
        <button
            className={`map__marker map__marker--${position} map__marker--${risk}`}
            aria-label={label}
            title={label}
        ></button>
    )
}