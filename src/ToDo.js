import React, { PureComponent } from 'react';
import c from './Demo.module.css';
import { Button, Col, Row, Container } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Task from './CardTask.js';
import AddTask from './addTask.js';
import idGenerator from './idGenerator.js';
import Confirm from './RemoveModal.js';
import PropTypes from 'prop-types';
import EditTaskModal from './EditModal.js';

class ToDo extends PureComponent {

    state = {
        editTask: null,
        tasks: [],
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        selectedTasks: new Set(),
        toggle: false,
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


    handleAdd = (value) => {

        const newTask = {
            text: value,
            _id: idGenerator()

        }

        const tasksArray = [newTask, ...this.state.tasks]


        this.setState({
            tasks: tasksArray,
        })
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
            selectedTasks: new Set(),
            toggle: false,
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
        const tasks = [...this.state.tasks]
        const foundTaskIndex = tasks.findIndex((task) => task._id === editedTask._id)
        tasks[foundTaskIndex] = editedTask

        this.setState({
            tasks,
            editTask:null,
        })
    }

    render() {


        const { toggle, selectedTasks, editTask } = this.state;
        const tasksArray = this.state.tasks.map((task, i) => {

            return (
                <Col key={i} xs={12} sm={6} md={4} lg={3} xl={2} className='mb-3'>
                    <Task
                        onCheck={this.handleCheck}
                        onRemove={this.handleDelete}
                        data={task}
                        disabled={!!selectedTasks.size}
                        onEdit={this.toggleEditModal} />
                </Col>
            )
        });
        // onEdit={()=>this.state.}

        return (
            <div className={c.col}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={3} mg={8} xl={2} sm={6}>
                            <AddTask
                                onAdd={this.handleAdd}
                                disabled={selectedTasks.size}
                                placeholder={this.props.placeholder}
                            />
                        </Col>

                    </Row>

                    <Row>{tasksArray}</Row>

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

