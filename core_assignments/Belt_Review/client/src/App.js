import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllNinjas from './components/AllNinjas';
import Form from './components/Form';
import OneNinja from './components/OneNinja';


function App() {
  return (
    <div className="App container">
      <h1>Wall of Ninjas- Ninja Hall of Fame</h1>

      <Routes>
        <Route exact path="/" element={
          <>
            <Form></Form>
            <hr></hr>
            <AllNinjas></AllNinjas>
          </>
        }>
      </Route>


      <Route exact path="/ninjas/:id" element={<OneNinja/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
