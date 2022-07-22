import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import {
  
    Link
  } from "react-router-dom";


const AllNinjas = (props) => {

    let [ninjas, setNinjas] = useState([])
    let [ninjaDeleted, setNinjaDeleted] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/ninjas")
            .then(response=>{
                // console.log("response", response);
                setNinjas(response.data.results);
    
            })
            .catch(err=>console.log(err))

    },[ninjaDeleted, props.formSubmitted])


    const deleteNinja = (id)=>{
        axios.delete(`http://localhost:8000/api/ninjas/${id}`)
            .then(response=>{
                setNinjaDeleted(!ninjaDeleted) 
            })
            .catch(err=>console.log(err))
    }





    return (
        <div>
            <h3>All the ninjas below</h3>
            {
                ninjas.map((ninja)=>{
                    return(
                        <div key={ninja._id} className='card mb-3 p-3'>
                            <h2><Link to={`/ninjas/${ninja._id}`}>{ninja.name}</Link></h2>
                            <p>Number of Projects: {ninja.numProjects}</p>
                            <p>Grad Date: {moment(ninja.graduationDate).format("MMM Do, YYYY")}</p>
                            <img className='mx-auto' src={ninja.imgUrl} alt={ninja.name} height="100px" width="100px" />
                            <Link to={`/ninjas/edit/${ninja._id}`} className='btn btn-info mt-3'>Edit {ninja.name}</Link>
                            <button onClick={()=>deleteNinja(ninja._id)} className='btn btn-danger mt-3'>Delete{ninja.name}</button>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default AllNinjas;