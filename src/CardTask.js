import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class CardTask extends Component {

    state = {
        checked: false,
    }


    handleCheck = () => {
        this.setState({

            checked: !this.state.checked
        })

        const { onCheck, data } = this.props

        onCheck(data._id)
    }

    render(props) {

        const task = this.props.data;
        const { checked } = this.state;
        const { disabled } = this.props;

       

        return (
            <Card className={checked ? 'task' : ''}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <input
                        type='checkbox'
                        onClick={this.handleCheck}>

                    </input>

                    <Card.Title>
                        {task.text.slice(0, 10) + '...'}
                    </Card.Title>

                    <Card.Text>
                        {task.text}
                    </Card.Text>

                    <Button
                        variant="danger"
                        onClick={() => this.props.onRemove(task._id)}
                        disabled={disabled}
                    >Delete</Button>

                    <Button
                        variant="primary"
                        onClick= {() => this.props.onEdit(task)}
                        disabled={disabled}
                    >Edit</Button>
                </Card.Body>
            </Card>
        )

    }
}

export default CardTask