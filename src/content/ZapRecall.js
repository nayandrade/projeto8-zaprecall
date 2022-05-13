import React from "react";

function choseQuestion(index) {
    console.log('escolhi', index)
}

function answerQuestion(index) {
    console.log('responder', index)
}

function Card (props) {
    return (
        <>
        <div className="card">
            <span>Pergunta {props.index}</span>
            <ion-icon name="play-outline" onClick={() => choseQuestion(props.index)}></ion-icon>
        </div>
        <div className="card-question">
            <span>{props.question}</span>
            <ion-icon name="reload-outline" onClick={() => answerQuestion(props.index)}></ion-icon>
        </div>

        </>
        
        
    )
}

export default function ZapRecall () {
    
    const item = [{
        question: "O que é JSX?", 
        answer: 'Uma extensão de linguagem do JavaScript',
    },{
        question: "O React é __", 
        answer: 'uma biblioteca JavaScript para construção de interfaces',
    },{
        question: "Componentes devem iniciar com __", 
        answer: 'letra maiúscula',
    },{
        question: "Podemos colocar __ dentro do JSX", 
        answer: 'expressões',
    }
    //,{
    //     question: "O ReactDOM nos ajuda __", 
    //     answer: 'interagindo com a DOM para colocar componentes React na mesma',
    // },{
    //     question: "Usamos o npm para __", 
    //     answer: 'gerenciar os pacotes necessários e suas dependências',
    // },{
    //     question: "Usamos props para __", 
    //     answer: 'passar diferentes informações para componentes',
    // },{
    //     question: "Usamos estado (state) para __", 
    //     answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
    // }
];  
   
    
    return (
        <>
        <header>
            <img src="./assets/img/zap1.svg" alt="Logo icon" />
            <span>ZapRecall</span>
        </header>
        <div className="zap">
            <div className="cards">
                {item.map((item, index) => (
                    <Card                    
                    key={index}
                    index={index + 1}
                    question={item.question}
                    answer={item.answer}                    
                    />
                ))}                
            </div>
        </div>
        <footer>
            <span>0/0 CONCLUÍDOS</span>
        </footer>  
        </>
              
    )
}
