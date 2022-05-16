import voltinha from "../assets/img/setinha.png"

export default function Fase2 ( {question, setFase} ) {
    return (
        <div className="card-front" onClick={() => setFase('fase3')}>
            <span>{question}</span>
            <img src={voltinha} alt="setinha de virar card" />
        </div>
    )
}