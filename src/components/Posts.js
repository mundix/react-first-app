import React, { Component } from 'react'

export  default class Posts extends Component {

    //Antes de la app sea montada hay mas componentDid ... son eventos 
    //Se ejecuta una ves ha sido montado o cargado en pantalla
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => console.log(data));
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

