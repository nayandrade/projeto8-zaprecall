import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import logo from "../assets/img/zap1.svg"
 
export default function ZapRecall () {
    const [complete, setComplete] = React.useState(0)
    const [icon, setIcon] = React.useState([])
        
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
            <img src={logo} alt="Logo icon" />
            <span>ZapRecall</span>
        </header>
        <div className="zap">
            <div className="cards">
                {
                item.map((item, index) => (
                    <Cards                    
                    index={index + 1}
                    question={item.question}
                    answer={item.answer}
                    complete={complete}
                    setComplete={setComplete}
                    icon={icon}
                    setIcon={setIcon}                     
                    />))}                
            </div>
        </div>
        <Footer 
        length={item.length}
        complete={complete}
        icon={icon} 
        />
         
        </>
              
    )
}
