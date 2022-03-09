// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Form';
import Alert from './components/alert';
// import About from './components/about';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";
function App() {
  return (
    // <Router>
      <>
    <Navbar tittle="TextUtils" about="About"/>
    <Alert Alert="this is allert"/>
    <div className='container my-3'>
     {/* <Switch> */}
    {/* //       <Route path="/about"> */}
    {/* //         <About /> */}
    {/* //       </Route> */}

    {/* //       <Route path="/"> */}
    <TextForm heading="Enter the text to analyze below"/>
            
    {/* //       </Route> */}
    {/* //     </Switch> */}
      </div>
</>
// </Router>
  );
}

export default App;
