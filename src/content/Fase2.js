export default function Fase2 ( {question, setFase} ) {
    return (
        <div className="card-front" onClick={() => setFase('fase3')}>
            <span>{question}</span>
            <ion-icon name="reload-outline"></ion-icon>
        </div>
    )
}