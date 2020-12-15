import React, { Component } from 'react';
import Block from './Block.js'
import { Container, Row, Col } from 'react-bootstrap'

class BootstrapDemo extends Component {
    render() {

        const blocks = [];

        for (let i = 1; i<= 15; i++) {

            blocks.push(
                <Col lg = "3" key = {i}>
                    <Block data = {i}/>
                </Col>
            )
        }

        return (

            <Container>
                <Row lg = "4">
                   {blocks}
                </Row>


            </Container>

    )


    }

}

export default BootstrapDemo