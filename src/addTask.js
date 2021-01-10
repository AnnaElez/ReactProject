import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import c from './Demo.module.css';
import { InputGroup, Button, FormControl } from 'react-bootstrap';





class AddTask extends Component {

    state = {
        inputValue: ''
    }



    handleAdd = () => {

        const { inputValue } = this.state;

        if (!inputValue) {
            return
        }

        this.props.onAdd(inputValue)

        this.setState({
            inputValue: ''
        });
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


    render() {
        const { inputValue} = this.state
        const { disabled } = this.props

        return (

            <InputGroup className={c.place}>
                <FormControl type="text"
                    placeholder={this.props.placeholder}
                    value={inputValue}
                    onChange={(event) => this.handleChange(event)}
                    aria-describedby="basic-addon1"
                    onKeyDown={(event) => this.handleKeyDown(event)}
                    disabled={disabled}
                />

                <InputGroup.Prepend>
                    <Button
                        variant="outline-secondary"
                        type="button" value="Add"
                        onClick={this.handleAdd}

                    >Add
                    </Button>
                </InputGroup.Prepend>

            </InputGroup>

        )


    }

}



AddTask.propTypes = {
    disabled:PropTypes.number,
    onAdd:PropTypes.func,
};

export default AddTask;
