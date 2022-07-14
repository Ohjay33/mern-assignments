import React, {useState} from 'react';
import './App.css';
import Search from './components/Search';
import Details from './components/Details';

function App() {

  const [element, setElement] = useState({});

  return (
    <div className="App">
      <Search setElement={setElement}/>
      <Details element={element}/>
    </div>
  );
}

export default App;