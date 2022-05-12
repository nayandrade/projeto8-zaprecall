import React from "react";
import Wellcome from "./Wellcome";
import ZapRecall from "./ZapRecall"



export default function App () {

    const [screen, setScreen] = React.useState('initial');
    return (        
        <> 
        {
            screen === 'initial' ? <Wellcome setScreen={setScreen} /> : <ZapRecall setScreen={setScreen} />
        }             
        </>        
    ); 
}