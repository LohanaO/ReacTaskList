/**
 * Ejemplo de uso del método componentWillUnmount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export  class WillunMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }
  render() {
    return (
      <div>
        <h1>WillunMount</h1>
      </div>
    )
  }
}



export const WillunMountHook = () => {

    useEffect(() => {
        
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, []);
    return (
        <div>
            <h1>WillunMount</h1>
        </div>
    );
}



