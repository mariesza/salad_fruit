//react préfère des composants fonctionnels que des classes
//render() : fonction qui retourne du jrx

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
    }
    
    render() {
        return (
        <h1> Test : {this.props.id} !</h1>);
        // button onClick = {this.handleClick}> Cliquez-moi !</button>);
    }
}

export default Fruits;
