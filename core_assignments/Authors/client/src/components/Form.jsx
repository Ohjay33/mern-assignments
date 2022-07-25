import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Form = (props) => {
    let [formInfo, setFormInfo] = useState({});
    let [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    
    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })

    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(response => {
                console.log("response after submitting", response)
                if (response.data.errors) {
                   setFormErrors(response.data.errors)
                } else {
                    setFormErrors({})
                    props.setFormSubmitted(!props.formSubmitted)
                    navigate("/")  
                }

            })
            .catch(err => console.log(err))

    }


    return (
        <div>
            <h3>Add New Author</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>

                {/* <div className="form-group">
              <label htmlFor="">Price:</label>
              <input type="text" name="price"  className="form-control" onChange={changeHandler}/>
              <p className="text-danger">{formErrors.price?.message}</p>
            </div>

            <div className="form-group">
              <label htmlFor="">Description:</label>
              <input type="text" name="description"  className="form-control" onChange={changeHandler}/>
              <p className="text-danger">{formErrors.description?.message}</p>
            </div> */}
                <input type="submit" value="Create" className='btn btn-success m-3' onChange={changeHandler} />

            </form>
        </div>
    );
};



export default Form;
