// import listfruits from 'C:/Users/marie/Desktop/M1/S2/Javascript/salad_fruit/fruit_salad/src/data/fruits.js';

function FruitsMaster({ fruit }){

    return (
    <div className ="MasterFruit">
    <p> Composition de la salade : {fruit}</p>
    
    <img src='/images/fruit-salad.png' alt="Salade de fruit" />
    </div>
    )
}
export default FruitsMaster;