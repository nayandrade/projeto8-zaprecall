import React from "react"
import Fase1 from "./Fase1";
import Fase2 from "./Fase2";
import Fase3 from "./Fase3";

export default function Cards ( {index, question, answer, complete, setComplete, icon, setIcon} ) {
    const [fase, setFase] = React.useState('fase1');
    const [type, setType] = React.useState("")   
    return (

        <>
        {
                fase === "fase1" ? <Fase1 setFase={setFase} index={index} type={type}/> :
                fase === "fase2" ? <Fase2 setFase={setFase} question={question} /> :
                <Fase3 
                setFase={setFase} 
                answer={answer} 
                setType={setType} 
                setComplete={setComplete} 
                complete={complete} 
                setIcon={setIcon} 
                icon={icon}/>                 
        }         
        </>
    )
}
 