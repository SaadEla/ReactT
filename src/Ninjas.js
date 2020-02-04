import React from 'react';
import './App.css';

//c 'est pas comme une classe on doit passer props en parametre si on vzut l'utiliser
//Et blach mn this car c'est plus une instance 9ssadha nichan PFF
const Ninjas = (props)=>{
    //DESTRUCTERING
    const { ninjas, deleteNinja } = props;
    const ninjaList= ninjas.filter((ninja)=> ninja.age > 20)    
            .map((ninja)=>{
            return (
            <div className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>  
                <div>Belt: { ninja.belt }</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
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

