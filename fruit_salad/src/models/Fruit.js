//react préfère des composants fonctionnels que des classes
//render() : fonction qui retourne du jrx
// import FruitsMaster from '../components/FruitsMaster';
// import FruitsMaster from '../components/FruitsMaster.js';
// import fruits from '../data/fruits.js';
// import React, {Component} from 'react';
// import App from '../App.js'

class Fruits {
  
    constructor(name="", color="#FFFFFF", id=0,price=0, image=null, stock=0, origin='France', season=null, state){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.color = color;
        this.stock = stock;
        this.origin = origin;
        this.season = season;
        this.state = state
        // this.state = {show : false};
    }
}

    export default Fruits;
    

    // render() {
    //     return (
    //         <div>
    //         <button 
    //         onClick={() => this.setState({show : true})}
    //         > Afficher la composition </button> 
    //         {
    //         this.state.show ?
    //         fruits.map((item,index) => <FruitsMaster key={index} fruit={item.fruit}/>)
    //         : null        
    //         }

    //         </div>
            
    //         )
    //     }
    //     }

