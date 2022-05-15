export default function Fase3 ( {setFase, answer, setType, setComplete, complete, setIcon, icon} ) {

    function resposta(type) {
        setType(type);
        setFase("fase1");
        setComplete(complete+1);
        setIcon([...icon, type]);           
    }    

    return (
        <div className="card-back">
            <span>{answer}</span>
            <div>
                <div className="resposta red" onClick={() => resposta("erro")}>Não Lembrei</div>
                <div className="resposta orange" onClick={() => resposta("quase")}>Quase não Lembrei</div>
                <div className="resposta green" onClick={() => resposta("zapei")}>Zap!</div>
            </div>
        </div>             
    )
}