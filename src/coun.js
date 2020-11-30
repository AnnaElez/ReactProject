import React, { Component } from 'react';
import c from './coun.module.css';

class Decrease extends Component {

    constructor() {
        super()

        this.handleClickIncrease = this.handleClickIncrease.bind(this)
        this.handleClickDec = this.handleClickDec.bind(this)
        this.handleClickRes = this.handleClickRes.bind(this)
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

        if(this.state.count<=0){
            this.setState({
                count:this.state.count,
                })
        }
        
        else{
            this.setState({
                count: this.state.count - 1,
            })
        }


    }

    handleClickRes() {

        this.setState({
            count: 0,
        })

    }
    
    
    render() {

        return (
            <div className={c.back}>
                <div className={c.info}>
                    <p className={c.infos}>{this.state.count}</p>
                    <button onClick={this.handleClickRes}>Click to reset count </button>
                    <button onClick={this.handleClickDec}>Click to decrease </button>
                    <button onClick={this.handleClickIncrease}>Click to increase </button>
                </div>
            </div>

        )
    }
}

export default Decrease;