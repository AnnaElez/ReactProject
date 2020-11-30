import React, { Component } from 'react';
import c from './coun.module.css';

class Decrease extends Component {

    constructor() {
        super()

        this.handleClickIncrease = this.handleClickIncrease.bind(this)
        this.handleClickDec = this.handleClickDec.bind(this)
    }

    state = {
        count: 0,
    }

    handleClickIncrease() {
        this.setState({
            count: this.state.count +1
        })
    }
    handleClickDec() {

        this.setState({
            count: this.state.count - 1
        })

    }
    
    
    render() {

        return (
            <div className={c.back}>
                <div className={c.info}>
                    <p className={c.infos}>{this.state.count}</p>
                    <button onClick={this.handleClickDec}>Click to decrease </button>
                    <button onClick={this.handleClickIncrease}>Click to increase </button>
                </div>
            </div>

        )
    }
}

export default Decrease;