import logo from "../assets/img/zap1.svg"

export default function Wellcome ( {setScreen}) {
    return (
        <div className="initial">
            <img src={logo} alt="Logo icon" />
            <span>ZapRecall</span>
            <button onClick={() => setScreen('Zap') }>Iniciar Recall</button>        
        </div>        
    )
}