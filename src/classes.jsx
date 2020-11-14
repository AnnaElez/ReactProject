import React, {Component} from 'react';

class Animals extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const Type = this.props.type
        const Name = this.props.name
        const Color = this.props.color
        return(
            <div>I am a {Type}. My name is {Name}. I'm {Color}</div>


        );
    }


}

export default Animals;




// class Animal {

//     constructor(name,color){
//         this.name = name
//         this.color = color
//         this.run = () => "running";
//         this.eat  = () => "eating";
//         this.sleep = () => "sleeping";
//     }

// }

// let cat = new Animal("kitten","black");
// let dog = new Animal("puppy","white");


