import React, { Component } from 'react';
import c from './Demo.module.css';


class ToDo extends Component {
    state = {
        tasks: [],
        inputValue: '',
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }


    handleAdd = () => {

        const { inputValue } = this.state;
        const newTasks = [...this.state.tasks];

        newTasks.push(inputValue)

        this.setState({
            tasks: newTasks,
            inputValue: '',
        })
    }




    render(props) {

        const { inputValue, tasks } = this.state;

        return (
            <div>
                <div className={c.place}>
                    <input className = {c.inp} type="text" placeholder={this.props.placeholder} value={this.state.inputValue} onChange={this.handleChange} />
                    <input className = {c.inp} type="button" value="Add" onClick={this.handleAdd} />
                </div>
                <ol>
                    {
                        tasks.map((task, index, props) => {

                            return <li key={index}> {task} {this.props.day}</li>

                        })
                    }
                </ol>
            </div>

        )
    }



}


export default ToDo;