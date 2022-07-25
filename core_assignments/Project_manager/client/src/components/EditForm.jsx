import React, {useState,useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const EditForm = () => {
    const {id} = useParams()
    const [details,setDetails] = useState({})

    useEffect(()=>{
                axios.get(`http://localhost:8000/api/products/${id}`)
                    .then(response=>{
                        console.log(response)
                        if(response.data.results){
                            setDetails(response.data.results);
                        }
                        // console.log(details)
                    })
                    .catch(err=>console.log(err))
            
            }, [])
        




    return (
        <div>
             <h3>Submit to edit Product</h3>
            <form>
            <div className="form-group">
              <label htmlFor="">Title:</label>
              <input type="text" name="title"  className="form-control" value={details.title}  />
             
            </div>

            <div className="form-group">
              <label htmlFor="">Price:</label>
              <input type="text" name="price"  className="form-control"  value={details.price} />
             
            </div>

            <div className="form-group">
              <label htmlFor="">Description:</label>
              <input type="text" name="description"  className="form-control"  value={details.description} />
             
            </div>
            <input type="submit" value="Create" className='btn btn-success m-3'  />

        </form>
        </div>
    );
};



export default EditForm;






















// const EditForm = () => {

//     const {id} = useParams()
//     const[details, setDetails] = useState({})
//     const navigate = useNavigate();

//     useEffect(()=>{
//         axios.get(`http://localhost:8000/api/products/${id}`)
//             .then(response=>{
//                 console.log(response)
//                 if(response.data.results){
//                     setDetails(response.data.results);
//                 }
//                 // console.log(details)
//             })
//             .catch(err=>console.log(err))
    
//     }, [])

//     const changeHandler = (e)=>{
//         if(e.target.type =="checkbox"){
//             setDetails({
//                 ...details,
//                 [e.target.tile]: e.target.checked
    
//             })
//         }else{
//             setDetails({
//                 ...details,
//                 [e.target.title]: e.target.value
    
//             })

//         }
        
//     }

//     const submitHandler = (e)=>{
//         e.preventDefault();
//         axios.put(`http://localhost:8000/api/products/${id}`,details)
//             .then(response=>{
//                 console.log("response after submitting", response)
//                 navigate("/")
//             })
//             .catch(err=>console.log(err))
//     }

//     return (
//         <div>
//             <h3>Submit this form to edit a product</h3>
//             <form onSubmit={submitHandler}>
//                 <div className="form-group">
//                     <label htmlFor="">Title:</label>
//                     <input type="text" name="title"  className="form-control" value={details.title} onChange={changeHandler}/>
                    
                    
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="">Price:</label>
//                     <input type="number" name="numProjects"  className="form-control" value={details.price} onChange={changeHandler}/>
                   
                  
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="">Description:</label>
//                     <input type="text" name="description"  className="form-control" value={details.description} onChange={changeHandler} />
                   
//                 </div>

//                 {/* <div className="form-group">
//                     <label htmlFor="">Graduation Date:</label>
//                     <input type="date" name="graduationDate" className="form-control" value={moment(details.graduationDate).format("YYYY-MM-DD")  } onChange={changeHandler}  />
//                 </div> */}
// {/* 
//                 <div className="form-group">
//                     <label htmlFor="">Is ninja a veteran?</label>
//                     <input type="checkbox" name="isVeteran"  className="form-check-input " checked={details.isVeteran} onChange={changeHandler}/>
//                 </div> */}

//                 <input type="submit" value="Update" className="btn btn-success mt-3 mb-3"/>
//             </form>
//         </div>
//     );
// };



// export default EditForm;