import React from "react";
import { Contexto } from "../contexto";
import './index.css'
function Boton(){
    const{intervalo, estadoBoton, setEstadoBoton,  setIntervalo, regresar, setRegresar}=React.useContext(Contexto);
    const accion=()=>{
        if(estadoBoton){
            clearInterval(intervalo);
            setIntervalo(null);
            setEstadoBoton(false);
        }else{
            setEstadoBoton(true);
            setRegresar(!regresar);
        }
    }
    return (
       <div className="areaBoton">
         <button className="boton" onClick={accion}>{(estadoBoton?'Pausar':'Reanudar')}</button>
       </div>
    );
}

export{Boton}