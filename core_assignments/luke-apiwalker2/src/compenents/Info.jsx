import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";


const Info = () => {
    // every time a state variable updates, the component re-renders
    // everytime the component re renders, all the code in the component, re-runs
    // Youtube video 2 time: 36:50 is where i left off

    let [details, setDetails] = useState({});

    useEffect(() => {


        axios.get("https://swapi.dev/api/people/1")
            .then(response => {
                console.log("response is this: ", response)
                setDetails(response.data)
            })
            .catch(err => {
                console.log(err)

            })
    }, {})


    return (
        <div>
            <h1>The name is Ohjay to you!</h1>
            <p>Height: 6'6 </p>
        </div>
    );
};


export default Info;