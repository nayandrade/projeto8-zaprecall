export default function ZapRecall ( {setScreen}) {
    return (
        <div className="initial">
            <img src="./assets/img/zap1.svg" alt="Logo icon" />
            <span>Eita</span>
            <button onClick={() => setScreen('initial')}>Iniciar Recall</button>        
        </div>        
    )
}