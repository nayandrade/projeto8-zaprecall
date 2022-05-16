export default function Fase1 ( {index, setFase, type }) {
    return (
        <div className={`card ${type}`} onClick={!type ? () => setFase('fase2') : null}>
            <span>Pergunta {index}</span>
            {
                type === "zapei" ? <ion-icon name="checkmark-circle"></ion-icon> :
                type === "quase" ? <ion-icon name="help-circle"></ion-icon> :
                type === "erro" ? <ion-icon name="close-circle"></ion-icon> :
                <ion-icon name="play-outline"></ion-icon>
            }
        </div>
    )
}
                                                  
