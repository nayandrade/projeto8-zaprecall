export default function Wellcome ( {setScreen}) {
    return (
        <div className="initial">
            <img src="./assets/img/zap1.svg" alt="Logo icon" />
            <span>ZapRecall</span>
            <button onClick={() => setScreen('Zap') }>Iniciar Recall</button>        
        </div>        
    )
}