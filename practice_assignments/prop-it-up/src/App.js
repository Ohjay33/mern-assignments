import logo from './logo.svg';
import './App.css';
import Namelist from './components/Namelist';

function App() {
  return (
    <div className="App">
      <h1>Name List</h1>
      <Namelist personName = {"Doe,Jane"} age={45} hair={"Black"}></Namelist>
      <Namelist personName = {"Smith,John"} age={88} hair={"Brown"}></Namelist>
      <Namelist personName = {"Fillmore,Millard"} age={50} hair={"Red"}></Namelist>
      <Namelist personName = {"Smith,Maria"} age={62} hair={"Blonde"}></Namelist>

    </div>
  );
}

export default App;
