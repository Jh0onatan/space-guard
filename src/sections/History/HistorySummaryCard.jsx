export default function HistorySummaryCard({ label, value }) {
    return (
        <div className="history__summary-card">
            <span>{label}</span>
            <strong>{value}</strong>
        </div>
    )
}