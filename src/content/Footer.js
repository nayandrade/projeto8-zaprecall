export default function ( {length, complete, icon }) {

    function Resultado() {
        if (complete === length) {
            if ((icon.filter(element => element !== "zapei").length)) {
                return (                    
                    <>
                        <h4>😥 Putz</h4>
                        <span className="bottom">Ainda faltam alguns...<br />Mas não desanime!</span>
                    </>
                )
            } else {
                return (
                    <>
                        <h4>🥳 Parabéns!</h4>
                        <span className="bottom">Você não esqueceu de nenhum flashcard!</span>
                    </>                    
                )
            }
        }
    }

    return (
        <footer>
            {Resultado()}
            <span className="icons">{complete}/{length} CONCLUÍDOS</span>
            <div className="icons">
                {icon.map((icon, index) => icon === "zapei" ? 
                <ion-icon key={index} class="zapei" name="checkmark-circle"></ion-icon> : icon === "quase" ? 
                <ion-icon key={index} class="quase" name="help-circle"></ion-icon> : icon === "erro" ? 
                <ion-icon key={index} class="erro" name="close-circle"></ion-icon> :
                <ion-icon key={index} name="play-outline"></ion-icon>)}
            </div>
        </footer>          

    )

}