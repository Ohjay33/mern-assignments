import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import moment from 'moment';
import {

    Link
} from "react-router-dom";


const AllAuthors = (props) => {

    let [authors, setAuthors] = useState([])
    let [authorDeleted, setAuthorDeleted] = useState(false)



    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(response => {
                // console.log("response", response);
                setAuthors(response.data.results);

            })
            .catch(err => console.log(err))
    }, [authorDeleted, props.formSubmitted])


    
    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                setAuthorDeleted(!authorDeleted)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h3>Favorite Authors</h3>
            {
                authors.map((author) => {
                    return (
                        <div key={author._id} className='card m-3 p-3b'>

                            <h2><Link to={`/authors/${author._id}`}>{author.name}</Link></h2>
                            <Link to={`/authors/edit/${author._id}`} className='btn btn-info mt-3'>Edit {author.name}</Link>
                            <button onClick={()=>deleteAuthor(author._id)} className='btn btn-danger mt-3'>Delete {author.name}</button>
                        </div>
                    )
                })
            }

        </div>
    );
};



export default AllAuthors;