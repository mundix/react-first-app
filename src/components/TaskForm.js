import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmitEvent = e => {
        e.preventDefault();
        console.log(this.state);
         //llamo desde los props  el metodo addTask() 
        //  this.props.addTask('title1', 'description 1');
         this.props.addTask(this.state.title, this.state.description);
    }
    onChangeEvent = e => {
        this.setState({
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
                    value={this.state.title} />
                <br />
                <br />
                <textarea placeholder='escribe description'
                    name='description'
                    onChange={this.onChangeEvent}
                    value={this.state.description}
                ></textarea>
                <br />
                <button type='submit'>Save Task</button>
            </form>
        )
    }
}

