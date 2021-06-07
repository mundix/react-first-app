import React, { Component } from 'react';
import './App.css';


//Importó el array del jason
import tasks from './sample/task.json';

//Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

//Ahora vamos a comunicar componentes para agregar state en App desde TaskForm 

class App extends Component {

  state = {
    tasks: tasks
  }
  //quiero pasarle esta funcion a task form , se puede pasar atraves de una props 
  addTask = (title, description) => {
    // console.log(title, description);
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    console.log(newTask);
    this.setState({
      //ASi es como se asigna 
      tasks: [...this.state.tasks, newTask]
    })
  }

  render() {
    return <div>
      <TaskForm addTask={this.addTask}/>
      <Tasks tasks={this.state.tasks} />
    </div>
  }
}


export default App;
