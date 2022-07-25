import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const OneProduct = () => {

    const{id} = useParams()

    const[details, setDetails] = useState({})
    const [notFound, setNotFound] = useState(false)
    const navigate = useNavigate();


useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log(response)
            if(response.data.results){
                setDetails(response.data.results);
            }else{
                setNotFound(true)

            }
            // console.log(details)
        })
        .catch(err=>console.log(err))

}, [id])


const deleteProduct = ()=>{
    axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log(response)
            navigate("/")
        })
        .catch(err=>console.log(err))
}

    return (
        <div>

            {
            notFound===true?
                    <img src="https://c.tenor.com/10i4quIbVEoAAAAM/absolutely-not-nope.gif" alt="" /> :
                <>
                    <h3>Details about {details.title}</h3>
                    <p>Price: {details.price}</p>
                    <p>Description: {details.Description}</p>
                    {/* <p>Is Veteran Status: {details.isVeteran? "Is a Veteran": "Not a Veteran"}</p> */}
                    <button onClick={deleteProduct} className='btn btn-danger'>Delete {details.title}</button>
                </>


            }


        </div>
    );
};


export default OneProduct;


// import React from 'react';


// const OneProduct = () => {
//     return (
//         <div>
//             <h3>Details about Product_Name_Goes_Here</h3>
//         </div>
//     );
// };



// export default OneProduct;
