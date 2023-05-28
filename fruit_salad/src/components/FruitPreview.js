//affichage d'un fruit de manière minimaliste 
//permet de faire que chaque composant à chaque paramètre, rôle pour modifier les choses et les modifier le plus facilement possible

//ajouter npm axios 
import './FruitPreview.css';

function FruitPreview({ fruit }) {

    function onClick(){
        console.log(fruit.name);
    }

    function getImage(){
        return "images/" + fruit.name.toLowerCase() + ".png";
    }

    return (
        <div className={"Fruit Preview" + fruit.name.toLowerCase()}>
 
        <a href={"/fruits/" + fruit.name.toLowerCase()} rel="">
           <img width="100px" alt={fruit.name} src={getImage()} />
        </a>
        <button onClick={() => onClick()}>{fruit.name}</button>
  
        {/* bouton qui permet d'afficher les items à partir de la liste fruit :  */}
        {/* <li key ={uuid()}> {fruit.name}</li> */}
        {/* <button onClick={() => onClick}>
                Fruit 
            </button> */}

        </div>
);
}

export default FruitPreview;