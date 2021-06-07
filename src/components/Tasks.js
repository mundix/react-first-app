import React, { Component } from 'react';
import Task from './Task';

import PropTypes from 'prop-types';

class Tasks extends Component {
    render() {
        return (
            this.props.tasks.map(task => 
            <Task 
                key={task.id} 
                task={task} 
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
