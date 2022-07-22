import React, {useState} from 'react';
import axios from 'axios';

const Form = () => {
    let [formInfo, setFormInfo] = useState({});
    let [formErrors, setFormErrors] = useState({});

    const changeHandler = (e)=>{
        if(e.target.type == "checkbox"){
            setFormInfo({
                ...formInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setFormInfo({
                ...formInfo,
                [e.target.name]: e.target.value
            })

        }
    }




    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/ninjas",formInfo)
            .then(response=>{
                console.log("response after submitting", response)
                if(response.data.errors){
                    setFormErrors(response.data.errors);
                }else{
                    setFormErrors({})
                }

            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Submit this form to make a ninja</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name"  className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{formErrors.name?.message}</p>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input type="number" name="numProjects"  className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{formErrors.numProjects?.message}</p>
                  
                </div>
                <div className="form-group">
                    <label htmlFor="">Image URL:</label>
                    <input type="text" name="imgUrl"  className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{formErrors.imgUrl?.message}</p>
                   
                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input type="date" name="graduationDate" className="form-control" onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is ninja a veteran?</label>
                    <input type="checkbox" name="isVeteran"  className="form-check-input " onChange={changeHandler}/>
                </div>
                <input type="submit" value="create" className="btn btn-success mt-3 mb-3" onChange={changeHandler} />
            </form>
        </div>
    );
};


export default Form;