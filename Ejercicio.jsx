import React, { Component, useState, useEffect } from 'react'
import ‘../../styles/clock.scss’;

export const Clock = () => {
    const fecha = useState(new Date());
    const edad = useState(0);
    const nombre = useState('Martín');
    const apellidos = useState('San José');
    
    useEffect(() => {
                const timerID = setInterval (() => tick(), 1000);
              
                tick(){
                    setState((prevState) => {
                    let edad = prevState.edad +1;
                     return {
                        ...prevState,
                        fecha: new Date(),
                        edad
                     }
                    });
                }
              
              return () => {
                    clearInterval (this.timerID);    
              }
    }, [])
    return 
         <div>
            <h2>
            Hora Actual:
            {fecha}
            </h2>
            <h3>{nombre} {apellidos}</h3>
            <h1>Edad: {edad}</h1>
         </div>
}
