import './App.css';
import FruitsMaster from './components/FruitsMaster';
import { useState } from "react";

//setState : mutateur

function App() {

  const [displayList, setDisplayList] = useState(false) //par défaut, displayList à la valeur false donc on cache la liste 
  //par défaut displayList a la valeur false
  //donc on cache la liste

  function onClick() {
    setDisplayList(displayList ? false : true); //si displayList = true, alors on affecte la valeur false pour masquer sinon true : on affiche 
    //condition ternaire

  }

  return (
    <div className="App">

    {/* <h1> Salade de fruit 😋 </h1>
    <img src='/images/fruit-salad.png' alt="Salade de fruit" /> */}

    <button onClick={()=>onClick()}>Afficher /Masquer </button>
    {/* {displayList && <FruitsMaster/>}
    {!displayList && <p>Pas de fruit</p>} */}
    
    {displayList === true && <FruitsMaster />}

    </div>
  );
}

export default App;
