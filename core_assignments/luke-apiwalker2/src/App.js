import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Form from './compenents/Form';
import Info from './compenents/Info';

function App() {
  return (
    <div className="App container">
      <h1>Luke Api Walker</h1>
      <Form></Form>
      <Routes>
        <Route exact path="/people/1" element={<Info></Info>}/>
      </Routes>
      
    </div>
  );
}

export default App;
