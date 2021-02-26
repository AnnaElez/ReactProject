import React, { PureComponent } from 'react';
import c from './Demo.module.css';
import { Button, Col, Row, Container } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Task from './CardTask.js';
import AddTask from './addTask.js';
import Confirm from './RemoveModal.js';
import PropTypes from 'prop-types';
import EditTaskModal from './EditModal.js';
import Spiner from './Loader/spiner';

class ToDo extends PureComponent {

    state = {
        editTask: null,
        tasks: [],
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        selectedTasks: new Set(),
        toggle: false,
        openNewTaskModal: false,
    }

    componentDidMount() {
        fetch('http://localhost:3001/task', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }

                this.setState({
                    tasks: response
                })
            })
            .catch((error) => {
                console.log(error)
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


    handleAdd = (data) => {

        console.log(data)
        const body = JSON.stringify(data)

        fetch('http://localhost:3001/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }

                const tasks = [response, ...this.state.tasks]

                this.setState({
                    tasks,
                    openNewTaskModal: false
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }


    handleDelete = (taskId) => {

        fetch(`http://localhost:3001/task/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }

                const newTasks = this.state.tasks.filter(task => task._id !== taskId);
                this.setState({
                    tasks: newTasks,
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }

    removeSelected = (taskId) => {

        const body = {
            tasks: [...this.state.selectedTasks],
        }

        fetch(`http://localhost:3001/task`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }

                let tasks = [...this.state.tasks]

                this.state.selectedTasks.forEach((id) => {

                    tasks = tasks.filter((task) => task._id !== id)
                })
                this.setState({
                    tasks,
                    selectedTasks: new Set(),
                    toggle: false,
                })

            })
            .catch((error) => {
                console.log(error)
            })

    }

    toggleConfirm = () => {
        this.setState({
            toggle: !this.state.toggle
        })

    }

    toggleEditModal = (task) => {
        this.setState({
            editTask: task
        })

    }

    saveTask = (editedTask) => {

        fetch(`http://localhost:3001/task/${editedTask._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedTask)
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    throw response.error
                }

                const tasks = [...this.state.tasks]
                const foundTaskIndex = tasks.findIndex((task) => task._id === editedTask._id)
                tasks[foundTaskIndex] = response

                this.setState({
                    tasks,
                    editTask: null,
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }

    toggleopenNewTaskModal = () => {
        this.setState({
            openNewTaskModal: !this.state.openNewTaskModal
        })

    }

    render() {
        const { tasks, toggle, selectedTasks, editTask, openNewTaskModal } = this.state;
        const tasksArray = this.state.tasks.map((task, i) => {

            return (
                <Col key={i} xs={12} sm={10} md={3} lg={5} xl={5} className='mb-3'>

                    <Task
                        onCheck={this.handleCheck}
                        onRemove={this.handleDelete}
                        data={task}
                        disabled={!!selectedTasks.size}
                        onEdit={this.toggleEditModal} />
                </Col>
            )
        });

        return (
            <div className={c.col}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={3} mg={8} xl={2} sm={6}>
                            <Button
                                variant='outline-primary'
                                onClick={this.toggleopenNewTaskModal}
                                disabled={!!selectedTasks.size}>
                                Add New Task
                            </Button>

                        </Col>

                    </Row>

                    <Row>
                      {tasksArray}
                    </Row>

                    <Button variant="outline-danger"
                        onClick={this.toggleConfirm}
                        disabled={selectedTasks.size === 0 ? true : false} >
                        Remove selected

                </Button >
                </Container>
                {toggle &&
                    <Confirm
                        onSubmit={this.removeSelected}
                        onClose={this.toggleConfirm}
                        count={selectedTasks.size} />
                }

                {
                    !!editTask &&
                    <EditTaskModal
                        data={editTask}
                        onSave={this.saveTask}
                        onClose={() => this.toggleEditModal(null)} />
                }
                { openNewTaskModal &&
                    <AddTask
                        onAdd={this.handleAdd}
                        disabled={selectedTasks.size}
                        placeholder={this.props.placeholder}
                        onClose={this.toggleopenNewTaskModal} />
                }


            </div>

        )
    }


}



export default ToDo;

ToDo.propTypes = {
    data: PropTypes.object,
    onRemove: PropTypes.func,
    onCheck: PropTypes.func,
    disabled: PropTypes.bool
};

