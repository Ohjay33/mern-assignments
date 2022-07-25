import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import moment from 'moment';
import {

    Link
} from "react-router-dom";


const AllProducts = (props) => {

    let [products, setProducts] = useState([])
    let [productDeleted, setProductDeleted] = useState(false)



    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                // console.log("response", response);
                setProducts(response.data.results);

            })
            .catch(err => console.log(err))
    }, [productDeleted, props.formSubmitted])


    
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                setProductDeleted(!productDeleted)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h3>All products Below here</h3>
            {
                products.map((product) => {
                    return (
                        <div key={product._id} className='card m-3 p-3b'>

                            <h2><Link to={`/products/${product._id}`}>{product.title}</Link></h2>
                            <p>Price of Product: {product.price}</p>
                            <p>Description of Product: {product.description}</p>
                            <Link to={`/products/edit/${product._id}`} className='btn btn-info mt-3'>Edit {product.name}</Link>
                            <button onClick={()=>deleteProduct(product._id)} className='btn btn-danger mt-3'>Delete{product.name}</button>
                        </div>
                    )
                })
            }

        </div>
    );
};



export default AllProducts;






//     },[productDeleted, props.formSubmitted])


//     const deleteProduct = (id) => {
//         axios.delete(`http://localhost:8000/api/products/${id}`)
//             .then(response => {
//                 setProductDeleted(!productDeleted)
//             })
//             .catch(err => console.log(err))
//     }





//     return (
//         <div>
//             <h3>All the products below here</h3>
//             {
//                 products.map((product)=>{
//                     return(
//                         <div key={product._id} className='card m-3 p-3b'>
//                             <h2><Link to={`/products/${product._id}`}>{product.title}</Link></h2>
//                             <p>Price of Product: {product.price}</p>
//                             <p>Description: {product.description}</p>
//                             {/* <img className='mx-auto' src={product.imgUrl} alt={product.name} height="100px" width="100px" /> */}
//                             <Link to={`/products/edit/${product._id}`} className='btn btn-info mt-3'>Edit {product.title}</Link>
//                             <button onClick={()=>deleteProduct(product._id)} className='btn btn-danger mt-3'>Delete{product.title}</button>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// };


// export default AllProducts;