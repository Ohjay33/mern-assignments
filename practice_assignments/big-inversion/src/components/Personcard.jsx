import React from 'react';

const Personcard = (props) => {

    return (
        <div>
            <h2>Name: {props.nameid} </h2>
            <p>Age: {props.age}</p>
            <p>Hair: {props.hair}</p>
            {props.children}
        
        </div>
    )
}









export default Personcard;

