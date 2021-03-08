import React, { PureComponent } from 'react';
import Spiner from '../Loader/spiner';
import { Card, Button } from 'react-bootstrap';
import { formatDate } from "../utils.js";
import c from './Single.module.css'
import EditTaskModal from '../EditModal/EditModal.js'

export default class Single extends PureComponent {

  state = {
    task: null,
    openEditModal: false
  }


  componentDidMount() {
    const taskId = this.props.match.params.id
    fetch(`http://localhost:3001/task/${taskId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then((response) => {
        if (response.error) {
          throw response.error
        }

        this.setState({
          task: response
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  onRemove = () => {
    const taskId = this.state.task._id

    fetch(`http://localhost:3001/task/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          throw response.error
        }
        this.props.history.push('/')
      })

      .catch(error => {
        console.log(error)
      })

  }

  toggleEditModal = () => {
    this.setState({
      openEditModal: !this.state.openEditModal
    });

  }

  saveTask = (data) => {
    const taskId = this.state.task._id

    fetch(`http://localhost:3001/task/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          throw response.error
        }

        this.setState({
          task: response,
          openEditModal: false,
        })
      })
      .catch((error) => {
        console.log(error)
      })

  }



  render() {
    const { task, openEditModal } = this.state;
    return (

      <div>
        {!!task ?
          <>
            <Card className={c.card}>
              <Card.Body className={c.cardbody}>
                <Card.Title>
                  {task.title}
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
                  onClick={this.onRemove}
                  variant='danger'> Delete</Button>

                <Button
                  onClick={this.toggleEditModal}
                  variant='primary'> Edit</Button>

                {/* <Button > Edit</Button> */}
              </Card.Body>
            </Card>
          </>
          :
          <Spiner />
        }

        {
          openEditModal &&
          <EditTaskModal
            onSave={this.saveTask}
            onClose={this.toggleEditModal}
            data={task} />
        }
      </div>
    );
  }
}
