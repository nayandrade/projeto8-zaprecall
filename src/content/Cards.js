import React from "react"
import Buttons from "./Buttons";

export default function Cards (props) {
    const [fase, setFase] = React.useState('fase1');
    const [respostas, setRespostas] = React.useState([]);

    function NemLembrei() {
        setFase('nao-lembrei');
        setRespostas([...respostas, 'erro']);
        console.log([...respostas, 1, 2])
    }

    function FoiQuase() {
        setFase('quase')
        setRespostas([...respostas, 'quase'])
        console.log(respostas)
    }

    function Zapei() {
        setFase('zapei')
        setRespostas([...respostas, 'acerto'])
        console.log(respostas)
    }

    return (
        <>
        {
            fase === "fase1" ? 
            <div className="card" onClick={() => setFase('fase2')}>
                <span>Pergunta {props.index}</span>
                <ion-icon name="play-outline" onClick={() => setFase('fase2')}></ion-icon>
            </div> : fase === 'fase2' ?
            <div className="card-front" onClick={() => setFase('fase3')}>
                <span>{props.question}</span>
                <ion-icon name="reload-outline"></ion-icon>
            </div> : fase === "fase3" ?
            <div className="card-back">
                <span>{props.answer}</span>
                <div>
                    <div className="resposta red" onClick={NemLembrei}>Não Lembrei</div>
                    <div className="resposta orange" onClick={FoiQuase}>Quase não Lembrei</div>
                    <div className="resposta green" onClick={Zapei}>Zap!</div>
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