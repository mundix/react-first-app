import React, { Component} from 'react';

export default class TaskForm extends Component {
    
    state = {
        title: '',
        description: ''
    }

    //Esto no usa el metodo bind cuando asignamos el  = () => {}
    // onSubmitEvent = (e) => {
    //Si tiene un parametro no es necesario poner el ()
    onSubmitEvent = e => {
        // console.log('Submitting...');
        e.preventDefault();        
        console.log(this.state);
    }
    onChangeEvent = e => {
        console.log(e.target.name, e.target.value);
        this.setState({
            // title: e.target.value
            //para asignar debe estar dentro de un [variable] : valor asignar
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEvent}>
                <input type='text' 
                name='title'
                placeholder='Write a Task' 
                onChange={this.onChangeEvent}
                value={this.state.title}/>
                <br/>
                <br/>
                <textarea placeholder='escribe description'
                name='description'
                onChange={this.onChangeEvent}
                value={this.state.description}
                ></textarea>
                <br/>
                <button type='submit'>Save Task</button>
            </form>
        )
    }
}

