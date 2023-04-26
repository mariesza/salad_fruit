import './App.css';
import FruitsMaster from './components/FruitsMaster';
import listfruits from './data/fruits.js';
import { v4 as uuid } from 'uuid';
import Fruits from './models/Fruit.js';


function App() {

  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)


  return (
    <div className="App">

      <h1>Unique ID</h1>
      <p>{unique_id}</p>
      <h1>Sliced Unique ID</h1>
      <p>{small_id}</p>
  
      {listfruits.map((item,index) => <FruitsMaster key={index} fruit={item.fruit}/>)}  
      <Fruits/>      

    </div>
  );
}

export default App;
