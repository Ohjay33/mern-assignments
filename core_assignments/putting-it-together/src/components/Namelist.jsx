import React, { Component } from 'react';

class Namelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() {
        return (
            <div className="Names">
                <h2>Name: {this.props.personName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair:{this.props.hair}</p>
                <button onClick={()=>this.setState({age: this.state.age+1})}>Birthday Button for {this.props.personName}</button>
            </div>
        )
    }
}

export default Namelist;