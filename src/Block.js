import React, { Component } from 'react';
import './Block.css'

function Block(props) {
    return (
      <div className = "block">
          {props.data}
      </div>
    );
  }
  

export default Block;



