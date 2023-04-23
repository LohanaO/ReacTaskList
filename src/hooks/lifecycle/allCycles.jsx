import { useEffect } from "react";
import React from 'react';

const AllCycles = () => {

    useEffect(() => {
         console.log('Componente creado')
         const IntervalID=setInterval(() => {
            document.title=`${new Date()}`
            console.log('Atualizacion del componente');
         },1000)
        return () => {
            console.log('Componente va a desaparecer');
            document.title="Tiempo detenido"
            clearInterval(IntervalID);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
