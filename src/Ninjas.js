import React from 'react';
import './App.css';

//c 'est pas comme une classe on doit passer props en parametre si on vzut l'utiliser
//Et blach mn this car c'est plus une instance 9ssadha nichan PFF
const Ninjas = (props)=>{
    //DESTRUCTERING
    const { ninjas } = props;
    const ninjaList= ninjas.map((ninja)=>{
        return (
        <div className="ninja" key={ninja.id}>
            <div>{ ninja.name }</div>
            <div>{ ninja.age }</div>  
            <div>{ ninja.belt }</div>
        </div>
        )
    })
    return(
        <div className="ninja-list">
            {ninjaList}
        </div>
    )


}

export default Ninjas;
