import React, { Component, createRef} from 'react';
import { Button, Modal, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './EditTask.css';
import DatePicker from "react-datepicker";
import {formatDate} from "../utils.js";
import "react-datepicker/dist/react-datepicker.css";



export default class EditTaskModal extends Component {

    constructor(props) {
        super(props)
        const {date} = props.data

        this.state = {
            ...props.data,
            date: date? new Date(date): new Date()
            
        }

        this.titleRef = createRef(null)
    }

    componentDidMount(){
        this.titleRef.current.focus()
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    handleSave = () => {

        const {title, date} = this.state;

        if (!title) {
            return;
        }

        this.props.onSave({...this.state, date:formatDate(date.toISOString())})

    }


    handleDateChange = (date) => {
        this.setState({
            date
        })

    }

    render() {
        const { title, description, date } = this.state;
        const { props } = this;
        return (
        <>
                <Modal
                    show={true}
                    onHide={props.onClose}
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Task</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormControl 
                            name = 'title'
                            value = {title}
                            type="text"
                            placeholder={this.props.placeholder}
                            onChange={this.handleChange}
                            aria-describedby="basic-addon1"
                            ref = {this.titleRef}
                        />
                        <textarea
                            name = 'description'
                            value = {description}
                            className='description'
                            onChange={this.handleChange}
                            rows='5' />

                        <DatePicker
                            selected={date}
                            onChange={this.handleDateChange} />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            variant="outline-secondary"
                            disabled={!title}
                            onClick={this.handleSave}
                            >
                        Save
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={props.onClose}
                            >
                        Cancel
                        </Button>
                    </Modal.Footer>

                </Modal>
       </> );
    }
    
}

EditTaskModal.propTypes = {
    data: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,

};
