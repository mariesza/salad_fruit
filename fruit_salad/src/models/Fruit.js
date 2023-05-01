//react préfère des composants fonctionnels que des classes
//render() : fonction qui retourne du jrx
import FruitsMaster from '../components/FruitsMaster';
import listfruits from '../data/fruits.js';
import React, {Component} from 'react'

class Fruits extends React.Component {
  
    
    constructor(props){
        super(props);
        this.id = Number;
        this.name = String;
        this.price = Number;
        this.image = String;
        this.color = String;
        this.stock = Number;
        this.origin = Number;
        this.season = String;
        this.state = {show : false};
    }
    
    render() {
        return (
            <div>
            <button 
            onClick={() => this.setState({show : true})}
            > Afficher la composition </button> 
            {
            this.state.show ?
            listfruits.map((item,index) => <FruitsMaster key={index} fruit={item.fruit}/>)
            : null        
            }

            </div>
            )
        }
        }
export default Fruits