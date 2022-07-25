import React, {useState} from 'react';
import axios from 'axios';


const Form = (props) => {
    let [formInfo, setFormInfo] = useState({});
     let [formErrors, setFormErrors] = useState({});
    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })

    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products",formInfo)
            .then(response=>{
                console.log("response after submitting", response)
                if(response.data.errors){
                    setFormErrors(response.data.errors);
                }else{
                    setFormErrors({})
                    props.setFormSubmitted(!props.formSubmitted)
                }

            })
            .catch(err=>console.log(err))

    }


    return (
        <div>
            <h3>Submit to create Product</h3>
            <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="">Title:</label>
              <input type="text" name="title"  className="form-control" onChange={changeHandler}/>
              <p className="text-danger">{formErrors.title?.message}</p>
            </div>

            <div className="form-group">
              <label htmlFor="">Price:</label>
              <input type="text" name="price"  className="form-control" onChange={changeHandler}/>
              <p className="text-danger">{formErrors.price?.message}</p>
            </div>

            <div className="form-group">
              <label htmlFor="">Description:</label>
              <input type="text" name="description"  className="form-control" onChange={changeHandler}/>
              <p className="text-danger">{formErrors.description?.message}</p>
            </div>
            <input type="submit" value="Create" className='btn btn-success m-3' onChange={changeHandler} />

            </form>
        </div>
    );
};



export default Form;















// const Form = (props) => {
//     let [formInfo, setFormInfo] = useState({});
//     let [formErrors, setFormErrors] = useState({});

    // const changeHandler = (e)=>{
//         if(e.target.type == "checkbox"){
//             setFormInfo({
//                 ...formInfo,
//                 [e.target.name]: e.target.checked
//             })
//         }else{
            // setFormInfo({
            //     ...formInfo,
            //     [e.target.name]: e.target.value
            // })

//         }
//     }




//     const submitHandler = (e)=>{
//         e.preventDefault();
//         axios.post("http://localhost:8000/api/products",formInfo)
//             .then(response=>{
//                 console.log("response after submitting", response)
//                 if(response.data.errors){
//                     setFormErrors(response.data.errors);
//                 }else{
//                     setFormErrors({})
//                     props.setFormSubmitted(!props.formSubmitted)
//                 }

//             })
//             .catch(err=>console.log(err))
//     }

//     return (
//         <div>
//             <h3>Submit this form to make a Product</h3>
//             <form onSubmit={submitHandler}>
//                 <div className="form-group">
//                     <label htmlFor="">Title:</label>
//                     <input type="text" name="title"  className="form-control" onChange={changeHandler} />
//                     <p className="text-danger">{formErrors.title?.message}</p>
                    
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="">Price:</label>
//                     <input type="number" name="numProjects"  className="form-control" onChange={changeHandler} />
//                     <p className="text-danger">{formErrors.price?.message}</p>
                  
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="">Description:</label>
//                     <input type="text" name="description"  className="form-control" onChange={changeHandler} />
//                     <p className="text-danger">{formErrors.description?.message}</p>
                   
//                 </div> 
//                 {/* <div className="form-group">
//                     <label htmlFor="">Graduation Date:</label>
//                     <input type="date" name="graduationDate" className="form-control" onChange={changeHandler} />
//                 </div> */}
//                 {/* <div className="form-group">
//                     <label htmlFor="">Is ninja a veteran?</label>
//                     <input type="checkbox" name="isVeteran"  className="form-check-input " onChange={changeHandler}/>
//                 </div> */}
//                 <input type="submit" value="create" className="btn btn-success mt-3 mb-3" onChange={changeHandler} />
//             </form>
//         </div>
//     );
// };


// export default Form;