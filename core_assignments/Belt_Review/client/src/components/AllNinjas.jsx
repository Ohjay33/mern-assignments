import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  
    Link
  } from "react-router-dom";


const AllNinjas = () => {

    let [ninjas, setNinjas] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/ninjas")
            .then(response=>{
                // console.log("response", response);
                setNinjas(response.data.results);
    
            })
            .catch(err=>console.log(err))

    },[])





    return (
        <div>
            <h3>All the ninjas below</h3>
            {
                ninjas.map((ninja)=>{
                    return(
                        <div key={ninja._id} className='card mb-3 p-3'>
                            <h2><Link to={`/ninjas/${ninja._id}`}>{ninja.name}</Link></h2>
                            <p>Number of Projects: {ninja.numProjects}</p>
                            <p>Grad Date: {ninja.graduationDate}</p>
                            <img className='mx-auto' src={ninja.imgUrl} alt={ninja.name} height="100px" width="100px" />

                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllNinjas;