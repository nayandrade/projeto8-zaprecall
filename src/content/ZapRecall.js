import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";


export default function ZapRecall () {   
    let x = 0 
    
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
    },{
        question: "O ReactDOM nos ajuda __", 
        answer: 'interagindo com a DOM para colocar componentes React na mesma',
    },{
        question: "Usamos o npm para __", 
        answer: 'gerenciar os pacotes necessários e suas dependências',
    },{
        question: "Usamos props para __", 
        answer: 'passar diferentes informações para componentes',
    },{
        question: "Usamos estado (state) para __", 
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
    }];  

    item.sort( () => Math.random() - 0.5);
           
    return (
        <>
        <header>
            <img src="./assets/img/zap1.svg" alt="Logo icon" />
            <span>ZapRecall</span>
        </header>
        <div className="zap">
            <div className="cards">
                {item.map((item, index) => (
                    <Cards                    
                    key={index}
                    index={index + 1}
                    question={item.question}
                    answer={item.answer}
                    questoes={item.length}                    
                    />
                ))}                
            </div>
        </div>
        <Footer 
        respondidas={0}
        length={item.length} 
        />
         
        </>
              
    )
}
