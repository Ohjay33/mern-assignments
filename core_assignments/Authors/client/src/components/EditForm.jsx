import React, {useState,useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const EditForm = () => {
    const {id} = useParams()
    const [details,setDetails] = useState("")
    const navigate = useNavigate();

    useEffect(()=>{
                axios.get(`http://localhost:8000/api/authors/${id}`)
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
                setDetails({
                    ...details,
                    [e.target.name]: e.target.value
                        
                })
                    
             }
             const submitHandler = (e)=>{
                        e.preventDefault();
                        axios.put(`http://localhost:8000/api/authors/${id}`,details)
                            .then(response=>{
                                console.log("response after submitting", response)
                                navigate("/")
                                // if(response.data.errors){
                                //     setFormErrors(response.data.errors);
                                // }else{
                                //     setFormErrors({})
                                //     props.setFormSubmitted(!props.formSubmitted)
                                // }
                
                            })
                            .catch(err=>console.log(err))
                    }


    return (
        <div>
             <h3>Submit to edit Author</h3>
            <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="">Name:</label>
              <input type="text" name="name"  className="form-control" value={details.name} onChange={changeHandler} />
             
            </div>

            {/* <div className="form-group">
              <label htmlFor="">Price:</label>
              <input type="text" name="price"  className="form-control"  value={details.price} onChange={changeHandler} />
             
            </div> */}

            {/* <div className="form-group">
              <label htmlFor="">Description:</label>
              <input type="text" name="description"  className="form-control"  value={details.description} onChange={changeHandler} />
             
            </div> */}
            <input type="submit" value="Update" className='btn btn-success m-3'  />

        </form>
        </div>
    );
};



export default EditForm;