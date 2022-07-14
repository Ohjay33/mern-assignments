// # Build Project Folder

// install node 
cd into folder  "npm i"

mkdir[PROJECT NAME]
cd[PROJECT NAME]

// # Set Up Back-End

npm init - y

npm install express mongoose cors

copy nul server.js

// * Template - server.js *


const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

require('./server/routes/[ROUTE.JS]')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));


// * End template *


  mkdir server
cd server
mkdir config controllers models routes

  // ### Build Controller

  
// * Template - Controller *


  module.exports.index = (request, response) => {
    response.json({
      message: "Hello World"
    });
  }

// * End template *


// ### Build Routes


// * Template - Routes *


const Controller = require('../controllers/[CONTROLLER.JS]');

module.exports = function (app) {
  app.get('/api', Controller.index);
}


// * End template *


  nodemon server.js

// # Set Up Front-End

npx create - react - app client
cd client

npm install axios
npm install @reach/router

cd src
mkdir Components
mkdir Views


// * Template - Component *


import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get('http://localhost:8000/api')
      .then(response => {
        setMessage(response.data.message)
      })
  }, []);

  return (
    <div>
      <h2>Message from back-end: {message}</h2>
    </div>
  );
}


// * End template *

  // ### Build Database

  (Navigate to project file)
cd server
cd config
copy nul mongoose.config.js


// * Template - Mongoose Config *
******************************

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/[DATABASE]', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Database connection established..."))
  .catch(err => console.log("ERROR: ", err));

****************
// * End template *
****************

  cd../ models
copy nul[COLLECTION].model.js

  ********************
// * Template - Model *
********************

  (Example for Person object)

  const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String }
}, { timestamps: true });

module.exports.Person = mongoose.model("Person", PersonSchema);

****************
// * End template *
****************

  (Add following line to server.js)

require('./server/config/mongoose.config');

*************************
// * Template - Controller *
*************************

  (Import Person Object from Model)

const { Person } = require("../models/person.model");

(Example for function to create Person Object)

module.exports.createPerson = (req, res) => {
  const { firstName, lastName } = req.body;
  Person.create({
    firstName,
    lastName
  })
    .then(person => res.json(person))
    .catch(err => response.json(err))
}

****************
// * End template *
****************







// starting a new project "npx create-react-app-"folder name"
// run react "npm start"

// basic functional component setup
import React from "react";

const form = () => { }

export default form;

// in the folder you want to open in visualstudio 
cmd code.

  // use the command prompt to start projects
  cd "my-app-name"
npm start

npm init

npm i < package name >

  //insert in app.js
  npm install react - bootstrap bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; //insert in app.js

import Button from 'react-bootstrap/Button';
// or less ideally
import { Button } from 'react-bootstrap';


// ------> In App.js <--------//

import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Home Component</h1>
      <Link to={"/about"}>Go to About </Link>
    </div>
  );
}

const About = (props) => {
  return (
    <div>
      <h1 style={{ color: "blue" }}>About Component</h1>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App


// // ----------> URL Params <-----------// //

import React from "react";
import { useParams } from "react-router";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";

const Location = (props) => {
  const { city } = useParams();
  return (
    <h1>Welcome to {city}! </h1>
  );
}

function App() {
  return (
    <div>
      <p>
        <Link to="/location/seattle">Seattle</Link>
        |
        <Link to="/location/chicago">Chicago</Link>
        |
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;


// -------> using "useNavigate" <--------//

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {

  const Survey = (props) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const navigate = useNavigate();

    const sendSurvey = (e) => {
      e.preventDefault();
      // When the user clicks the submit input in the form, 
      //we will navigate to the "/results" path
      navigate("/results");
    }

    return (
      <form onSubmit={sendSurvey}>
        <label>Your Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <label>Your Comment:</label>
        <textarea onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
        <input type="submit" value="Submit Survey" />
      </form>
    );
  }
}




