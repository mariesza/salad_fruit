import { v4 as uuid } from 'uuid';
import axios from "axios";
import {useEffect} from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";


//IMPORTATION de documents 
import FruitPreview from './FruitPreview.js';
import Fruit from "../models/Fruit.js";
import "./FruitsMaster.css";

//CODE

//Récupération de l'API + temps d'attente de chargement 
const axiosInstance = axios.create({
    baseURL :"https://fruits.shrp.dev",
    timeout : 3000, //si je n'ai pas de réponse au bout de 3000 ms la requête n'est pas aboutie 
    headers:{}
}); 

function FruitsMastertest(){

axios.get('https://fruits.shrp.dev')
  .then(data => {
    // Les données de l'API sont disponibles dans data.data
    console.log(data.data);
  })
  .catch(error => {
    // En cas d'erreur lors de la requête
    console.error(error);
  });
}
  export default FruitsMastertest;
//Création de la fonction FruitsMaster
// function FruitsMastertest(){
//       //UseState : déclaration et gestion de l'état d'un composant fonctionnel
//       const[fruits, setFruits] = useState([]);//par défaut la liste de fruits est vide
//       const[loading, setLoading] = useState(false);
//       const[error, setError] = useState(null);
//       const[needToReload, setNeedToReload] = useState(false);
  
//       const {
//         reset,
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm();

//       useEffect(() => {
//         async function fetchFruitsFromAPI(){
//             try {
//                 setLoading(true);
//                 const response = await axiosInstance.get('/items/fruits');
//                 const collection = response.data.data.map(jsonItem => new FruitsMastertest(jsonItem.name, jsonItem.color, jsonItem.image));
//                 //responses à toujours data, et dans les données que l'on prend, on a une clé data. 
//                 //on veut itérer et mettre en données js donc on fait un map cad une boucle, où il créer un nouveau objet fruit qui vient du json
//                 setLoading(false);
//                 setError(false)
//                 setFruits(collection);
//             } catch (error) {
//                 console.log(error);
//                 setLoading(false);
//                 setError(true);
//             }
//     }
    
//         fetchFruitsFromAPI();
//     }, [needToReload]);

//     function onReloadData() {
//         setNeedToReload(needToReload ? false : true); //déclenche l'exécution de useEffect
//       }

//     return (
//     <div className="FruitsContainer">
//         {loading && <p>Loading...</p>}
//         {error && <p>Erreur</p>}
//         <button onClick={() => onReloadData()}>Recharger les données</button>

//             {fruits.map((fruit) => (
//             <FruitPreview key={uuid()} fruit={fruit} />
//             ))}
        
//         </div>
//     );
// }

