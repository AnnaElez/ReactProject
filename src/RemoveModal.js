import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';



export default function Confirm(props) {
    return (
            <Modal show={true} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Delete this {props.count} tasks if you're sure</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.onClose}>
                        Close
              </Button>
                    <Button variant="danger" onClick={props.onSubmit}>
                        Delete
              </Button>
                </Modal.Footer>
            </Modal>
    );
}

Confirm.propTypes = {
    count:PropTypes.number,
    onSubmit:PropTypes.func,
    onClose:PropTypes.func,
};
