import HistorySummaryCard from "./HistorySummaryCard"

export default function HistorySummary() {
    return (
        <div className="history__summary">
            <HistorySummaryCard label="Total de alertas" value="24" />
            <HistorySummaryCard label="Alertas ativos" value="3" />
            <HistorySummaryCard label="Regiões críticas" value="1" />
        </div>
    )
}