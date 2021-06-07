import React, { Component } from 'react';
import Task from './Task';

import PropTypes from 'prop-types';

class Tasks extends Component {
    render() {
        // console.log("Llego a tasks: ",this.props);
        return (
            this.props.tasks.map(task => 
            <Task 
                key={task.id} 
                task={task} 
                checkDone={this.props.checkDone}
                deleteTask={this.props.deleteTask}
                
                />)
        )
        
    }
}

Tasks.propTypes = {
    // Asignando el tipo de datos que puede ser los props que nos estan pasando 
    tasks: PropTypes.array.isRequired 
}

export default Tasks
