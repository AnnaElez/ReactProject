import React, { Component } from 'react';
import c from './Demo.module.css';
import { InputGroup, Button, FormControl, Col, Row, Container } from 'react-bootstrap';


class ToDo extends Component {
    state = {
        tasks: [],
        inputValue: '',
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
            <div className={c.col}>
                {/* <Container>
                    <Row lg="1">
                        <Col lg="2"> */}
                            <InputGroup className={c.place}>
                                <FormControl type="text" placeholder={this.props.placeholder} value={this.state.inputValue} onChange={this.handleChange} aria-describedby="basic-addon1" />

                                <InputGroup.Prepend className={c.inp}>
                                    <Button className={c.inp} variant="outline-secondary" type="button" value="Add" onClick={this.handleAdd}>Button</Button>
                                </InputGroup.Prepend>

                            </InputGroup>
                        {/* </Col>

                    </Row> */}

                    <ol>
                        {
                            tasks.map((task, index, props) => {

                                return <li key={index}> {task} {this.props.day}</li>

                            })
                        }
                    </ol>
                {/* </Container> */}
            </div>

        )
    }



}


export default ToDo;