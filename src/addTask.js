import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import c from './ToDo/ToDo.module.css';
import { Button, Modal, FormControl } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "./utils.js";


export default class AddTask extends Component {

    constructor(props) {
        super(props)
        this.state = {
            toggle: false,
            title: '',
            description: '',
            date: new Date()
        }

        this.titleRef = createRef(null)
    }

    componentDidMount(){
        this.titleRef.current.focus()
    }

    handleAdd = () => {
        const { title, description, date } = this.state;
        if (!title) {
            return
        }

        const task = {
            title,
            description,
            date: formatDate(date.toISOString())
        }
        this.props.onAdd(task)
    }


    handleChange = (event, type) => {
        this.setState({
            [type]: event.target.value
        })
    }


    handleKeyDown = (event) => {

        if (event.key === "Enter") {
            this.handleAdd();
        }

    }

    toggleAddModal = () => {
        this.setState({
            toggle: !this.state.toggle
        })

    }

    handleDateChange = (date) => {
        this.setState({
            date
        })
    }


    render() {

        const { title, date} = this.state
        const { disabled, onClose } = this.props

        return (
            <>
                <Modal
                    show={true}
                    onHide={onClose}
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Task</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormControl type="text"
                            placeholder={this.props.placeholder}
                            onChange={(event) => this.handleChange(event, 'title')}
                            aria-describedby="basic-addon1"
                            onKeyDown={(event) => this.handleKeyDown(event)}
                            disabled={disabled}
                            ref = {this.titleRef}
                        />
                        <textarea
                            className={c.description}
                            onChange={(event) => this.handleChange(event, 'description')}
                            rows='5' />

                        <DatePicker
                            selected={date}
                            onChange={(date) => this.handleDateChange(date)} />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            variant="primary"
                            disabled={!title}
                            onClick={this.handleAdd}>
                            Add
                        </Button>

                        <Button
                            variant="danger"
                            onClick={onClose}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal>
            </>

        )


    }

}



AddTask.propTypes = {
    disabled: PropTypes.number,
    onAdd: PropTypes.func,
    onClose: PropTypes.func,
};