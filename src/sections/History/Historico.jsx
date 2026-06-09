import "../../styles/historico.css"

import HistorySummary from "./HistorySummary"
import HistoryList from "./HistoryList"

export default function Historico() {
    const alertas = [
        {
            id: 1,
            tipo: "Queimada",
            regiao: "Mata Leste",
            nivel: "Alto",
            descricao: "Focos de calor detectados por satélite com temperatura acima do padrão regional.",
            data: "08/06/2026",
            horario: "14:32",
            status: "Alerta emitido",
            risco: "high"
        },
        {
            id: 2,
            tipo: "Enchente",
            regiao: "Vale Norte",
            nivel: "Moderado",
            descricao: "Volume de chuva acumulada acima de 60mm nas últimas horas.",
            data: "08/06/2026",
            horario: "11:18",
            status: "Em monitoramento",
            risco: "medium"
        },
        {
            id: 3,
            tipo: "Deslizamento",
            regiao: "Serra Azul",
            nivel: "Moderado",
            descricao: "Solo instável identificado após sequência de chuvas na região monitorada.",
            data: "07/06/2026",
            horario: "18:45",
            status: "Análise preventiva",
            risco: "medium"
        },
        {
            id: 4,
            tipo: "Enchente",
            regiao: "Costa Sul",
            nivel: "Baixo",
            descricao: "Região dentro dos limites seguros, sem necessidade de alerta emergencial.",
            data: "07/06/2026",
            horario: "09:10",
            status: "Normalizado",
            risco: "low"
        }
    ]

    return (
        <section className="history-section" id="historico">
            <div className="history__container">
                <div className="history__header">
                    <span>Histórico preventivo</span>
                    <h2>Alertas climáticos registrados</h2>
                    <p>
                        Consulte os eventos monitorados pelo SpaceGuard e acompanhe o histórico de riscos
                        identificados a partir de dados orbitais simulados.
                    </p>
                </div>

                <div className="history__content">
                    <HistorySummary />
                    <HistoryList alertas={alertas} />
                </div>
            </div>
        </section>
    )
}