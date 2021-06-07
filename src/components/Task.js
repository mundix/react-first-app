import React, {Component} from 'react';
// esto es un componete para cada tarea
class Task extends Component {
    render(){

        //con esto evito exribir this.props.task.title  solo {task}
        const {task} = this.props;

        return <div>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" />
            <button>x</button>
        </div>
    }
}

export default Task;