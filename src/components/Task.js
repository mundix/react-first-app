import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

    //Vamos a crear una funciona para camabiar los css
    StyleCompleted(){
        return  {
            fontSize: '20px',
            color: this.props.task.done ? 'black': 'gray',
            textDecoration: this.props.task.done ? 'none' : 'line-through'
        }
    }

    render(){

        //con esto evito exribir this.props.task.title  solo {task}
        const {task} = this.props;
        // console.log("Llego al Task id",this.props.task.id, this.props);

        // return <p className='red'>
        return <p style={this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" 
                onChange={this.props.checkDone.bind(this, task.id)}
            />
            <button 
            style={btnDeleteStyle} 
            onClick={this.props.deleteTask.bind(this, task.id)}
            >x</button>
        </p>
    }
}

Task.propTypes = {
    // Con esto la propiedad task es obligatoria tipo objeto.
    task: PropTypes.object.isRequired
}

const btnDeleteStyle = {
    fontSize: '14px',
    background: '#ea2027',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;