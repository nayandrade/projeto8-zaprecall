import React from "react"
import Buttons from "./Buttons";

export default function Cards (props) {
    const [fase, setFase] = React.useState('fase1');

    return (
        <>
        {
            fase === "fase1" ? 
            <div className="card">
                <span>Pergunta {props.index}</span>
                <ion-icon name="play-outline" onClick={() => setFase('fase2')}></ion-icon>
            </div> : fase === 'fase2' ?
            <div className="card-front">
                <span>{props.question}</span>
                <ion-icon name="reload-outline" onClick={() => setFase('fase3')}></ion-icon>
            </div> : fase === "fase3" ?
            <div className="card-back">
                <span>{props.answer}</span>
                <div>
                    <div className="resposta red" onClick={() => setFase('nao-lembrei')}>Não Lembrei</div>
                    <div className="resposta orange" onClick={() => setFase('quase')}>Quase não Lembrei</div>
                    <div className="resposta green" onClick={() => setFase('zapei')}>Zap!</div>
                </div>
            </div> :
            <div className={`card card-finalizado ${fase}`}>
                <span>Pergunta {props.index}</span>
                {
                    fase === 'nao-lembrei' ? <ion-icon name="close-circle" class={`md hydrated ${fase}`}></ion-icon> : fase === 'quase' ? 
                    <ion-icon name="help-circle" className={fase}></ion-icon> : <ion-icon name="checkmark-circle" className={fase}></ion-icon>
                }                
            </div>            
        }
          
        </>     
    )
}