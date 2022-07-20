// # Build Project Folder

// install node 
cd into folder  "npm i"

mkdir[PROJECT NAME]
cd[PROJECT NAME]

// # Set Up Back-End

npm init - y

npm install express mongoose cors

copy nul server.js

// front end setup

npx create - react - app client
cd client

npm install axios //make api calls//
npm install react-router-dom

npm install @reach/router
  
cd src
mkdir Components
mkdir Views
// * Template - server.js *


// MERN setup guide 
// 1. Create a folder for your project: beltreviewer 
// 2. cd beltReviewer (go into the project)
// 3. Initialize a javascript package for the project using: npm init -y 
// 4. Install dependencies: npm install express cors mongoose 
// 5. Create a server.js file in the project folder 
// 6. Create a server folder in the project folder 
// 7. Make 4 directories in the server folder: config, models, controllers, routes 
// 8. Make a mongoose.config.js file in the config folder 
// 9. Set up the config.js file as usual—>make sure you change name of db to something unique that you havent used yet 
// 10. Set up server.js as usual (remember to require the mongoose config, don’t require the routes yet b/c they have not been created yet) - also remember the app.use() commands for post data!
// 11. CHECKPOINT-Test it using nodemon server.js (running the server) to make sure it says established connection with db 
// 12. Create a model file as usual in the models folder. Set up model according to wireframe and project requirements. 
// 13. Create a controller file in the controllers folder, and set up the controllers to work with your models that you imported- Controller file needs the import to connect with the model. Have the crud functions in the controllers
// 14. Create a routes file in the routes folder and set up routes. Import the controllers in the routes file. Make sure the methods in the controllers are referenced in the routes 
// 15. In server.js, import (require) the routes and pass the app object to it (make sure this is the second to last line in server.js- basically the require routes part is underneath the app.use parts)
// 16. CHECKPOINT- test all routes using postman before building the front end
// 17. Enable CORS-> in server.js import it and then insert the app.use(cors()) command
// 18. Create a react app inside the project folder-> name it “client”
// 19. Install dependencies for react-> cd into client folder and run “npm install axios react-router-dom” 
// 20. Build out the front end!











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










