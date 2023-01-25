import React from 'react';
import { Boton } from '../boton';
import { Contexto } from '../contexto';
import { Slider } from '../slider';

function AppUi(){
    return(
        <React.Fragment>
          <div className='contenedor'>
                <Slider/>
          </div>
          <Boton/>
        </React.Fragment>
    );
}


export{AppUi}