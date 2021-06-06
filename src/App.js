import React from 'react';
import './App.css';

// function HelloWorld(){
//De esta manera permito acceder a mis propiedades  como mytext 
// function HellowWorld(props) {
//   // console.log(props);

//   return (
//     // <div id='hello'>Hello Wolrd</div>
//     // con las { } esto es de JSX  para imprimir 
//     //La propiedad es mytext y acceso mediente props.mytext 
//     <div id='hello'>
//       <h3>
//         {props.subtitle}
//       </h3>
//       {props.mytext}
//     </div>
//   )
// }

//EStado de componente 'state' datos internos que se conocen como estados 
//El component HelloWorl escrito como clase instead of a function.
// the prop property can be access by this 
class HelloWorld extends React.Component {

  state = {
    show: true
  }
  //Forma mas sencilla de crear una funciton con el bidnging 
  toggleShow = () => {
    this.setState({show: !this.state.show})   
  }

  render() {
    if (this.state.show) {

      return (
        <div id='hello'>
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          {/* El boton tiene eventos cada ves que hacemos click , si quiero escuchar el evento click del boton  */}
          {/* El me va a generar un errro por que no puedo asignar el valor de esta manera debo usar setState de React */}
          {/* <button onClick={() => { this.state.show = false }}>Toggle Show</button> */}
          {/* <button onClick={() => { this.setState({show:false}) }}>Toggle Show</button> */}
          {/* Ahora vamos ha llamarlo mediante una function external toggleShow() */}
          {/* Esta forma onClick={this.toggleShow} evita que tengamos que complicarlo usando bind this */}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
    } else {
      return (
        <div id='hello'>
          <h1>No hay elementos</h1>
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
    }

  }

}

//Existen 3 formas de crear un component 
//Este es el componente con funcion anonima es otra forma de ecribirlo
//el asignar el () =>  hace return automatico 
// const App = () => <div>This is my component: <HellowWorld/></div>

//Otra forma de escribirlo 
// class App extends React.Component {
//   render() {
//     return <div>This is my component <HellowWorld/></div>
//   }
// }

function App() {
  return (
    //Vamos a usar props para enviar parametros "propiedades" le voy a pasar el prop mytext 
    <div>This is my component:
      <HelloWorld mytext='Hello Mundix' subtitle='Lorem Ipsum' />
      <HelloWorld mytext='Hello Mac' subtitle='Segundo' />
      <HelloWorld mytext='Hello Linux' subtitle='Tercero' />
    </div>
  );
}

export default App;
