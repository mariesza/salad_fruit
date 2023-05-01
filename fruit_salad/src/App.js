import './App.css';
import FruitsMaster from './components/FruitsMaster';
import listfruits from './data/fruits.js';
import { v4 as uuid } from 'uuid';
import Fruits from './models/Fruit.js';
import { useState } from "react";


function App() {

  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)

  // const [index, setIndex] = useState(0);
  // // const [showMore, setShowMore] = useState(false);
  // const hasNext = index < listfruits.length - 1;

  

  return (
    <div className="App">

      <h1>Unique ID</h1>
      <p>{unique_id}</p>
      <h1>Sliced Unique ID</h1>
      <p>{small_id}</p>

      <Fruits/>     

    </div>
  );
}

export default App;
