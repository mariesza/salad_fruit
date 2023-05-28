//COMMENTAIRE COMPREHENSION GLOBAL

//afficher une liste de fruit (+ aller chercher les données de l'API)
//Master --> nom conventionel pour dire que c'est le composant avec la liste des items
//affichage de preview : contenu avec un minimim d'infos et ensuite on travail dans le détail 

//ul : balise qui permet de donner une liste non ordonnée avec des points 
//il : liste item : un élément de la liste, ici fait référence à l'attribut 'name' que l'on a créer dans la liste de fruit
// !error : si erreur différent de false  

//IMPORTATION

// Ancienne importation (quand pas d'API)
// import fruits from '../data/fruits';

// IMPORTATION depuis des bibliothèques
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

// Récupération de l'API + temps d'attente de chargement 
const axiosInstance = axios.create({
  baseURL: "https://fruits.shrp.dev",
  timeout: 3000, //si je n'ai pas de réponse au bout de 3000 ms la requête n'est pas aboutie 
  headers: {},
});


//Création de la fonction FruitsMaster
function FruitsMaster() {

  //UseState : déclaration et gestion de l'état d'un composant fonctionnel
    const [fruits, setFruits] = useState([]); //par défaut la liste de fruits est vide
    const [loading, setLoading] = useState(false); //par défaut : FALSE
    const [error, setError] = useState(false); //par défaut : FALSE
    const [needToReload, setNeedToReload] = useState(false); //par défaut : FALSE
    
    const {
      reset,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  //Récupérer les informations au niveau de l'API
  async function onSubmitSearchForm(data) {
    const keyword = data.keyword; //récupération à l'aide de mot clé
    try {
      setLoading(true); //si le chargement est ok 
      const response = await axiosInstance.get( //requête HTTP get pour récupérer les infos
        `/items/fruits?search=${keyword}`
      );
      const collection = response.data.data.map( //création d'un map ou notre JsonItem reprend les caractéristiques de la classe Fruit définit avant
        (jsonItem) => new Fruit(jsonItem.name, jsonItem.color, jsonItem.image)
      );
      setFruits(collection); //ajouter les éléments dans la liste car par défaut la liste est vide
      setLoading(false); 
      setError(false);
      reset();
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
}
    function onReloadData() {
        setNeedToReload(needToReload ? false : true); //déclenche l'exécution de useEffect
      }


// Faire une requête HTT get sur l'URL https://fruits.shrp.dev/items/fruits
    useEffect(() => {
    async function fetchFruitsFromAPI(){
        try {
            setLoading(true);
            const response = await axiosInstance.get('/items/fruits');
            const collection = response.data.data.map(
              (jsonItem) => new Fruit(jsonItem.name, jsonItem.color, jsonItem.image));
            //responses à toujours data, et dans les données que l'on prend, on a une clé data. 
            //on veut itérer et mettre en données js donc on fait un map cad une boucle, où il créer un nouveau objet fruit qui vient du json
            setFruits(collection);
            setLoading(false);
            setError(false)
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(true);
        }
}
    fetchFruitsFromAPI();
}, [needToReload]);
//on indique que useEffect a une dépendance à needToReload
//-> si needToReload évolue, useEffect doit être appelé

    return (
    <div className ="FruitsMaster">
        <div>
        <button onClick={() => onReloadData()}>Recharger les données</button>

      <form onSubmit={handleSubmit(onSubmitSearchForm)}>
        <input
          placeholder="Mot clé"
          {...register("keyword", { required: true })}
        />
        {errors.keyword && <span>Ce champ est obligatoire</span>}

        <input type="submit" value="Recherche" />
      </form>

        {loading && <p>Loading...</p>}
        {error && <p>Erreur</p>}

        <div className="FruitsContainer">
        {fruits.map((fruit) => (
          <FruitPreview key={uuid()} fruit={fruit} />
        ))}
        </div>

        </div>
    </div>
    );
}

export default FruitsMaster;





  // useEffect(() => {
  //   async function fetchFruitsFromAPI() {
  //     try {
  //       setLoading(true);
  //       const response = await axiosInstance.get("/items/fruits");
  //       const collection = response.data.data.map(
  //         (jsonItem) => new Fruit(jsonItem.name, jsonItem.color, jsonItem.image)
  //       );
  //       setFruits(collection);
  //       setLoading(false);
  //       setError(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //       setError(true);
  //     }
  //   }

  //   fetchFruitsFromAPI();
  // }, [needToReload]);
  //on indique que useEffect a une dépendance à needToReload
  //-> si needToReload évolue, useEffect doit être appelé

//   return (
//     <div className="FruitsMaster">
//       <button onClick={() => onReloadData()}>Recharger les données</button>

//       <form onSubmit={handleSubmit(onSubmitSearchForm)}>
//         <input
//           placeholder="Mot clé"
//           {...register("keyword", { required: true })}
//         />
//         {errors.keyword && <span>Ce champ est obligatoire</span>}

//         <input type="submit" value="Recherche" />
//       </form>

//       {loading === true && <p>Chargement...</p>}
//       {error === true && <p>Une erreur s'est produite</p>}
//       <div className="FruitsContainer">
//         {fruits.map((fruit) => (
//           <FruitPreview key={uuid()} fruit={fruit} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FruitsMaster;