import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllAuthors from './components/AllAuthors';
import Form from './components/Form';
import OneAuthor from './components/OneAuthor';
import EditForm from './components/EditForm';


function App() {
let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="App container">
      <h1>Favorite Authors</h1>
   
      <Routes>
        <Route exact path="/" element={
          <>
            {/* <Form formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></Form> */}
            <hr></hr>
            <AllAuthors formSubmitted={formSubmitted}></AllAuthors>
          </>
        }>
      </Route>


      <Route exact path="/authors/:id" element={<OneAuthor/>}></Route>
      <Route exact path= "/new/" element={<Form formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></Form>}></Route> 
      <Route exact path = "/authors/edit/:id" element={<EditForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
