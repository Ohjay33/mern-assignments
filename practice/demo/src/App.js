import { useParams } from "react-router";
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const Location = (props) => { 
  const { city } = useParams(); // matches our :city in our Routes
    
  return (
    <h1>Welcome to { city }!</h1>
  );
}

// const Location = (props) => {
//   return (
//     <h1>Location Component Loaded!</h1>
//   );
// }
    
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
        <Route path="/location/:city" element={<Location />}/>
      </Routes>
    </div>
  );
}
    
export default App;

// const Home = (props) => {
//   return (
//     <div>
//       <h1 style={{ color: "red" }}>Home Component</h1>
//       <Link to={"/about"}>Go to About </Link>
//     </div>
//   );
// }

// const About = (props) => {
//   return (
//     <div>
//       <h1 style={{ color: "blue" }}>About Component</h1>
//       <Link to={"/"}>Go Home</Link>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Routing Example</h1>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route exact path="/" element={<Home />} />
//       </Routes>
//     </div>
//   );
// }

// export default App
