import React, { Component } from 'react';
import './App.css';

import tasks from './sample/task.json';

//Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  //tratar de quitar esta tarea del arreglo, recibiendo el id que quiero eliminar
  deleteTask = (id) => {
    // por cada tarea que empieze a recorrer es diferente al id  la que estan pasando
    //Va a filtrarlo 
    const newTasks = this.state.tasks.filter(task => task.id !== id );
    this.setState({
      tasks: newTasks
    })
  }

  checkDone = () => {

  }

  render() {
    return <div>
      <TaskForm addTask={this.addTask}/>
      {/* Como pasar el boton delete al boton de delete en el task list  */}
      <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
    </div>
  }
}


export default App;
