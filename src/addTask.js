import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import c from './Demo.module.css';
import { Button, Modal } from 'react-bootstrap';
// import { InputGroup, Button, FormControl } from 'react-bootstrap';





class AddTask extends Component {

    state = {
        inputValue: '',
        toggle: false
    }



    handleAdd = () => {



        const { inputValue } = this.state;

        if (!inputValue) {
            return
        }

        const task ={
            title: inputValue
        }
        this.props.onAdd(task)

        this.setState({
            inputValue: ''
        });

        console.log(task)
        this.toggleAddModal()
    }
    

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }


    handleKeyDown = (event) => {

        if (event.key === "Enter") {
            this.handleAdd();
        }

    }

    toggleAddModal = () =>{
        this.setState({
            toggle: !this.state.toggle
        })
         
    }


    render() {

        const { inputValue,toggle} = this.state
        const { disabled } = this.props 

        return (
            <>
             <Button
                variant="outline-secondary"
                type="button" value="Add"
                onClick={this.toggleAddModal} >Add</Button>

            {toggle &&

            <Modal show={true} onHide={this.toggleAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className='input'
                        type='text'
                        placeholder = 'Add new task'
                        value={inputValue}
                        onChange={this.handleChange}
                        disabled = {disabled} />
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={this.handleAdd}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={this.toggleAddModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>}
            </>
            // <InputGroup className={c.place}>
            //     <FormControl type="text"
            //         placeholder={this.props.placeholder}
            //         value={inputValue}
            //         onChange={(event) => this.handleChange(event)}
            //         aria-describedby="basic-addon1"
            //         onKeyDown={(event) => this.handleKeyDown(event)}
            //         disabled={disabled}
            //     />

            //     <InputGroup.Prepend>
            //         <Button
            //             variant="outline-secondary"
            //             type="button" value="Add"
            //             onClick={this.handleAdd}

            //         >Add
            //         </Button>
            //     </InputGroup.Prepend>

            // </InputGroup>

        )


    }

}



AddTask.propTypes = {
    disabled:PropTypes.number,
    onAdd:PropTypes.func,
};

export default AddTask;
