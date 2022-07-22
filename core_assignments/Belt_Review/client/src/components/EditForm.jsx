import React, {useState,useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import moment from 'moment';


const EditForm = () => {

    const {id} = useParams()
    const[details, setDetails] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
            .then(response=>{
                console.log(response)
                if(response.data.results){
                    setDetails(response.data.results);
                }
                // console.log(details)
            })
            .catch(err=>console.log(err))
    
    }, [])

    const changeHandler = (e)=>{
        if(e.target.type =="checkbox"){
            setDetails({
                ...details,
                [e.target.name]: e.target.checked
    
            })
        }else{
            setDetails({
                ...details,
                [e.target.name]: e.target.value
    
            })

        }
        
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/ninjas/${id}`,details)
            .then(response=>{
                console.log("response after submitting", response)
                navigate("/")
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Submit this form to edit a ninja</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name"  className="form-control" value={details.name} onChange={changeHandler}/>
                    
                    
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input type="number" name="numProjects"  className="form-control" value={details.numProjects} onChange={changeHandler}/>
                   
                  
                </div>
                <div className="form-group">
                    <label htmlFor="">Image URL:</label>
                    <input type="text" name="imgUrl"  className="form-control" value={details.imgUrl} onChange={changeHandler} />
                   
                   
                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input type="date" name="graduationDate" className="form-control" value={moment(details.graduationDate).format("YYYY-MM-DD")  } onChange={changeHandler}  />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is ninja a veteran?</label>
                    <input type="checkbox" name="isVeteran"  className="form-check-input " checked={details.isVeteran} onChange={changeHandler}/>
                </div>
                <input type="submit" value="Update" className="btn btn-success mt-3 mb-3"/>
            </form>
        </div>
    );
};



export default EditForm;