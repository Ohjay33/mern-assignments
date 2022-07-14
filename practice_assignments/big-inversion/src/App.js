import logo from './logo.svg';
import './App.css';
import Personcard from './components/Personcard';

function App() {
  return (
    <div className="App">
      <h1>Name List</h1>
      <Personcard nameid={"Jane Doe"} age={45} hair={"Black"}>
        <p>I am the 1st child of this component</p>
      </Personcard>
      <Personcard nameid={"John Smith"} age={88} hair={"Brown"}>
        <p>I am the 2nd child of this component</p>
      </Personcard>
      <Personcard nameid={"Millard Fillmore"} age={50} hair={"Brown"}>
        <p>I am the 3rdt child of this component</p>
      </Personcard>
      <Personcard nameid={"Maria Smith"} age={62} hair={"Brown"}>
        <p>I am the 4th child of this component</p></Personcard>
    </div>
  );
}

export default App;

