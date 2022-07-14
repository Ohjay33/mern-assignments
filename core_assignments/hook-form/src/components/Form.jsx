import React, { useState } from "react";


const Form = () => {
    // create a state variable to keep track of form info

    let [first, setFirst] = useState("");
    let [last, setLast] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirm, setConfirm] = useState("");
    let [hair, setHair] = useState("");
    let [date, setDate] = useState("");
    let [img, setImg] = useState("");





    return (
        <div className="container">
            <form>
                <div>
                    <div className="info">
                        <label>First Name:</label>
                        <input onChange={(e) => setFirst(e.target.value)} type="text" className="form-control" />
                    </div>
                    <br />
                    <div className="info">
                        <label>Last Name:</label>
                        <input onChange={(e) => setLast(e.target.value)} type="text" className="form-control" />
                    </div>
                    <br />
                    <div className="info">
                        <label>Email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" />
                    </div>
                    <br />
                    <div className="info">
                        <label>Password:</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="text" className="form-control" />
                    </div>
                    <br />
                    <div className="info">
                        <label>Confirm Password:</label>
                        <input onChange={(e) => setConfirm(e.target.value)} type="text" className="form-control" />
                    </div>
                    <br />

                    {/* these are for practice */}
                    <div className="info">
                        <label>Hair Color</label>
                        <select onChange={(e) => setHair(e.target.value)} className="form-select">
                            <option value="Brown">Brown</option>
                            <option value="Black">Black</option>
                            <option value="Blonde">Blonde</option>
                            <option value="red">Red</option>
                        </select>
                    </div>
                    <br />

                    <div className="info">
                        <label>Paste Resume</label>
                        <input onChange={(e)=> setImg(e.target.value)} type="text" className="form-control" />

                    </div>

                </div>
                <br />
                <button>Submit</button>
            </form>
            <br />
            <h4>Your Form Data</h4>
            <p>First Name: {first}</p>
            <p>Last Name: {last}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm} </p>
            <p>Hair Color: {hair}</p>
            <img src={img} height="200px" />
            <hr />
        </div>
    )
}


export default Form;