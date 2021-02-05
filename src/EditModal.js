import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './EditTask.css';



export default class EditTaskModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...props.data
        }
    }

    handleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSave = () => {

        const {title} = this.state;

        if(!title){
            return;
        }

        this.props.onSave(this.state)

    }

    render() {
        const { title } = this.state;
        const { props } = this;
        return (
            <Modal show={true} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className='input'
                        type='text'
                        value={title}
                        onChange={this.handleChange} />
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={this.handleSave}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={props.onClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

EditTaskModal.propTypes = {
    data:PropTypes.object.isRequired,
    onSave:PropTypes.func.isRequired,
    onClose:PropTypes.func.isRequired,

};
