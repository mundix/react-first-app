import React, { Component } from 'react';
import './App.css';


//Importó el array del jason
import tasks from './sample/task.json';

//Components
import Tasks from './components/Tasks';

//Proyecto Limpio 
//#1 crear el component de mi app , heredando la caracteristica Component 
//que se incluyo con las {Component}  en el import
class App extends Component {

  state = {
    tasks: tasks
  }

  render() {
    return <div>
      {/* Estpy pasando las tareas en props al component */}
      <Tasks tasks={this.state.tasks} />
    </div>
  }
}


export default App;
