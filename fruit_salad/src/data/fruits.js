import Fruits from '../models/Fruit.js';

const fruits = [
    new Fruits("Pomme","#ed2939"),
    new Fruits("Poire","#8fce00"),
    new Fruits('Ananas',"#ffe599"),
    new Fruits ('Fraise',"#cc0000"),
    new Fruits('Raisin',"#6a329f"),
    new Fruits('Kiwi',"#ce7e00"),
    new Fruits('Banane',"#ffe599"),
    new Fruits('Cerise',"#c90076"), 
    new Fruits('Framboise',"#c27ba0"),
];

export default fruits;


// function Choixfruit(){
//     return (
//         <div>
//         <ul>
//             {listfruits.map((fruit, index) => 
//                 ( <li key={`${fruit}-${index}`}> {fruit} </li>))}
//         </ul>
//         </div>)
// }
// export default Choixfruit;