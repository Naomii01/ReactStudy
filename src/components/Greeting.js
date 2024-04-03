import React from 'react'

function Greeting(){

    const sayHi = (name, surname) =>{
        alert('Hi' + ' '+ name + ' ' +surname);
    }
     
    return(
        <div>
            <button onClick={() => sayHi( 'Naomii', 'Uwase')}>Say Hi</button>
        </div>
    )
}

export default Greeting;