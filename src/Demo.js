import React, { Component } from 'react';
import c from './Demo.module.css';
import { InputGroup, Button, FormControl, Col, Row, Container, Card } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import idGenerator from './idGenerator.js'


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

        if(!inputValue){
            return
        }

        const newTask ={
            text:inputValue,
            _id:idGenerator()

        }

        const tasksArray = [newTask, ...this.state.tasks]


        this.setState({
            tasks: tasksArray,
            inputValue: '',
        })
    }

    handleKeyDown = (event) =>{

        if (event.key==="Enter"){
            this.handleAdd();
        }


    }

    handleDelete = (taskId) =>{

       const newTasks = this.state.tasks.filter(task => task._id !== taskId);
        this.setState({
            tasks:newTasks,
        })

    }




render(props) {

    const { inputValue } = this.state;
    const tasksArray = this.state.tasks.map((task, i) => {

        return (
            <Col key={i} xs={12} sm={6} md={4} lg={3} xl={2} className='mb-3'>
                <Card className={c.task}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{task.text.slice(0, 10) + '...'}</Card.Title>
                        <Card.Text>{task.text}</Card.Text>
                        <Button variant="danger" onClick = {()=>this.handleDelete(task._id)}>Delete</Button>
                    </Card.Body>
                </Card>
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
                            onChange={this.handleChange} 
                            aria-describedby="basic-addon1"
                            onKeyDown = {(event)=>this.handleKeyDown(event)}
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
            </Container>
        </div>

    )
}


}



export default ToDo;