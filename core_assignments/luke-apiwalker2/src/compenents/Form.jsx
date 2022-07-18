import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// a Form Search bar with routes//
// this type form will be used a lot //

const Form = () => {
    let [category, setCategory] = useState("people");
    let [id, setId] = useState("");
    const navigate = useNavigate();
    // when the form is submitted do something. something === redirect "useNavigate"
    const submitHandler = (e)=>{
        e.preventDefault();
        // navigate("/"+category + "/"+id);
        navigate(`/${category}/${id}`);


    }
    return (

        <div>

            <form onSubmit={submitHandler} className="d-flex align-items-center justify-content-center gap-3">
                <div className="form-group">
                    <label>Search for:</label>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="films">films</option>
                        <option value="species">species</option>
                        <option value="vehicles">vehicles</option>
                        <option value="starships">starships</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>ID:</label>
                    <input onChange={(e) => setId(e.target.value)} type="number" />

                </div>
                <input type="submit" value="Search" className="btn btn-primary" />

            </form>
        </div>
    );
};

export default Form;