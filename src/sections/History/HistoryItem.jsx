export default function HistoryItem({ alerta }) {
    return (
        <article className="history__item">
            <div className={`history__risk history__risk--${alerta.risco}`}></div>

            <div className="history__item-main">
                <div className="history__item-top">
                    <span className={`history__badge history__badge--${alerta.risco}`}>
                        {alerta.nivel}
                    </span>

                    <span className="history__date">
                        {alerta.data} • {alerta.horario}
                    </span>
                </div>

                <h3>{alerta.tipo} em {alerta.regiao}</h3>
                <p>{alerta.descricao}</p>
            </div>

            <div className="history__status">
                <span>Status</span>
                <strong>{alerta.status}</strong>
            </div>
        </article>
    )
}