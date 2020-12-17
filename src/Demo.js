import React, { Component } from 'react';
import c from './Demo.module.css';
import { InputGroup, Button, FormControl, Col, Row, Container, Card } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import idGenerator from './idGenerator.js'
import Task from './CardTask.js'

class ToDo extends Component {
    state = {
        tasks: [],
        inputValue: '',
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        selectedTasks: new Set(),
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleCheck = (taskId) => {
        const selectedTasks = new Set(this.state.selectedTasks)

        if (selectedTasks.has(taskId)) {
            selectedTasks.delete(taskId)
        }

        else {
            selectedTasks.add(taskId)
        }

        this.setState({
            selectedTasks //ete key=value karelia mi angam ira anun@ grel
        })
    }


    handleAdd = () => {

        const { inputValue } = this.state;

        if (!inputValue) {
            return
        }

        const newTask = {
            text: inputValue,
            _id: idGenerator()

        }

        const tasksArray = [newTask, ...this.state.tasks]


        this.setState({
            tasks: tasksArray,
            inputValue: '',
        })
    }

    handleKeyDown = (event) => {

        if (event.key === "Enter") {
            this.handleAdd();
        }


    }

    handleDelete = (taskId) => {

        const newTasks = this.state.tasks.filter(task => task._id !== taskId);
        this.setState({
            tasks: newTasks,
        })

    }

    removeSelected = (taskId) => {

        let tasks = [...this.state.tasks]

        this.state.selectedTasks.forEach((id) => {

            tasks = tasks.filter((task) => task._id !== id)
        })

        this.setState({
            tasks,
            selectedTasks: new Set()
        })

    }




    render(props) {

        const { inputValue, selectedTasks } = this.state;
        const tasksArray = this.state.tasks.map((task, i) => {

            return (
                <Col key={i} xs={12} sm={6} md={4} lg={3} xl={2} className='mb-3'>
                    <Task onCheck={this.handleCheck} onRemove={this.handleDelete} data={task} />
                </Col>
            )
        });

        return (
            <div className={c.col}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={3} mg={8} xl={2} sm={6}>
                            <InputGroup className={c.place}>
                                <FormControl type="text"
                                    placeholder={this.props.placeholder}
                                    value={this.state.inputValue}
                                    onChange={(event) => this.handleChange(event)}
                                    aria-describedby="basic-addon1"
                                    onKeyDown={(event) => this.handleKeyDown(event)}
                                />

                                <InputGroup.Prepend>
                                    <Button
                                        variant="outline-secondary"
                                        type="button" value="Add"
                                        onClick={this.handleAdd}

                                    >Add</Button>
                                </InputGroup.Prepend>

                            </InputGroup>
                        </Col>

                    </Row>

                    <Row>{tasksArray}</Row>

                    <Button variant="outline-danger"
                        onClick={this.removeSelected}
                        disabled={selectedTasks.size === 0 ? true : false} >
                        Remove selected

                </Button >
                </Container>
            </div>

        )
    }


}



export default ToDo;