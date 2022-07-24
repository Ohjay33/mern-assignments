import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllProducts from './components/AllProducts';
import Form from './components/Form';
import OneProduct from './components/OneProduct';
import EditForm from './components/EditForm';


function App() {
// let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="App container">
      <h1>Product Manager</h1>
      <AllProducts></AllProducts>

      {/* <Routes>
        <Route exact path="/" element={
          <>
            <Form formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></Form>
            <hr></hr>
            <AllProducts formSubmitted={formSubmitted}></AllProducts>
          </>
        }>
      </Route>


      <Route exact path="/products/:id" element={<OneProduct/>}></Route>

      <Route exact path = "/products/edit/:id" element={<EditForm/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
