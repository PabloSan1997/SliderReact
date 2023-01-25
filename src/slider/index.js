import React from "react";
import { Contexto } from "../contexto";
import './index.css'
function Slider(){
    const {imagen,  margen, trans}=React.useContext(Contexto);
        const largo=()=>{
            let numero = imagen.length*100;
            return { width:`${numero}%`, marginLeft: margen+'%', transition:trans}
        }
    return(
        <div className="slider" style={largo()}>
            {imagen.map(elemento=>(
                <Slides
                key={elemento.id}
                direccion={elemento.direc}
                />
            ))}
        </div>
    );
}

function Slides(props){
    return(
        <div className="slides">
            <img src={props.direccion}/>
        </div>
    );
}
export{Slider}