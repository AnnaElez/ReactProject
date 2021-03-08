import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { formatDate } from "../utils.js";
import { Link } from 'react-router-dom';



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

    render() {


        const { checked } = this.state;
        const { disabled } = this.props;
        const task = this.props.data;

        return (
            <Card className={checked ? 'task' : ''}>
                <Card.Body>
                    <input
                        type='checkbox'
                        onClick={this.handleCheck}>

                    </input>

                    <Card.Title>
                        <Link to={`/singletask/${task._id}`}>
                            {task.title}
                        </Link>

                    </Card.Title>

                    <Card.Text>
                        Description:{task.description}
                    </Card.Text>

                    <Card.Text>
                        Date:{formatDate(task.date)}
                    </Card.Text>

                    <Card.Text>
                        Created At:{formatDate(task.created_at)}
                    </Card.Text>

                    <Button
                        variant="danger"
                        onClick={() => this.props.onRemove(task._id)}
                        disabled={disabled}
                    >Delete</Button>

                    <Button
                        variant="primary"
                        onClick={() => this.props.onEdit(task)}
                        disabled={disabled}
                    >Edit</Button>
                </Card.Body>
            </Card>
        )

    }
}

export default CardTask;