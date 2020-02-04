import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import './App.css';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  /*Alors ici on a envoyer la fonction as a props
    puis on a recupere l'element qu'on a ajouter dans AddNinja  
  */
 /*Apres on doit modifier le state on doit modifier le ninjas array kamel 
  on peut pas faire par exemple un simple push dans le state car dans ce cas
  on modifie le state directement
 */ 
  addNinja = (ninja)=>{
    ninja.id=Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }
render() {
  return (
    <div className="App">
      <p> hello app.js</p>
      <Ninjas ninjas={this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja}/>
    </div>
  );
}
}

export default App;
