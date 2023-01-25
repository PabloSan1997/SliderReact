import React from "react";
import { direcciones } from "./imagenes.js";

const Contexto = React.createContext();


function Provedor(props) {
    const [imagen, setImagen] = React.useState(direcciones);
    const [margen, setMargen] = React.useState('');
    const [trans, setTrans] = React.useState("");
    const [estadoBoton, setEstadoBoton]=React.useState(true);
    const [intervalo, setIntervalo]=React.useState(null);
    const [regresar, setRegresar]=React.useState(true);
        React.useEffect(() => {
        let  inter= setInterval(() => {
              setMargen(-100);
              setTrans("all 0.5s ease");
              setTimeout(()=>{
                setTrans("unset");
                setMargen(0);
                let imagenes = imagen;
                let imagen1=imagenes.shift();
                console.log(imagen1);
                imagenes.push(imagen1);
                setImagen(imagenes);
              },500);
            }, 2000);
           setIntervalo(inter);
          },[regresar]);
          
  return (
    <Contexto.Provider
      value={{
        imagen,
        margen,
        trans,
        intervalo,
        estadoBoton,
        setEstadoBoton,
        setIntervalo,
        regresar, 
        setRegresar
      }}
    >
      {props.children}
    </Contexto.Provider>
  );
}

export { Provedor, Contexto };
