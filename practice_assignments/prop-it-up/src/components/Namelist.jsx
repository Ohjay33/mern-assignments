import React, { Component } from 'react';

class Namelist extends Component{
    render(){
        return(
            <div className="Names">
                <h2>Name: {this.props.personName}</h2>
                <p>Age: {this.props.age}</p>
                <p>Hair:{this.props.hair}</p>
            </div>
        )
    }
}

export default Namelist;