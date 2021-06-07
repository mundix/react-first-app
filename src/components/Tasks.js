import React, { Component } from 'react';
//voy a impoart el componete Task
import Task from './Task';

class Tasks extends Component {
    render() {
        return (
            this.props.tasks.map(task => <Task key={task.id} task={task}/>)
        )
        
    }
}

export default Tasks
