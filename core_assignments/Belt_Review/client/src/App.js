import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllNinjas from './components/AllNinjas';
import Form from './components/Form';
import OneNinja from './components/OneNinja';
import EditForm from './components/EditForm';


function App() {
let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="App container">
      <h1>Wall of Ninjas- Ninja Hall of Fame</h1>

      <Routes>
        <Route exact path="/" element={
          <>
            <Form formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></Form>
            <hr></hr>
            <AllNinjas formSubmitted={formSubmitted}></AllNinjas>
          </>
        }>
      </Route>


      <Route exact path="/ninjas/:id" element={<OneNinja/>}></Route>

      <Route exact path = "/ninjas/edit/:id" element={<EditForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
