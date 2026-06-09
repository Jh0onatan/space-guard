import HistoryItem from "./HistoryItem"

export default function HistoryList({ alertas }) {
    return (
        <div className="history__list">
            {alertas.map((alerta) => (
                <HistoryItem key={alerta.id} alerta={alerta} />
            ))}
        </div>
    )
}