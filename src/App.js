import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar.js";
import Textform from "./component/Textform.js"
import About from "./component/About.js"
import { useCallback, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   
  const [dark , changedark] = useState('light');
  
  

  const chnge=()=>{
    if(dark==='dark'){
      changedark('light')
      document.body.style.backgroundColor="white";
    }else{
      changedark('dark')
      document.body.style.backgroundColor="rgb(52, 45, 45)";
    } 
  }
       
  // return (
  //   <>
  //     <Navbar type={dark} id='nv' ch={chnge}/>
  //     <div className='container'>
  //       {/* <h1 className='my-3'>Enter your Text</h1> */}
  //      {/* <Textform /> */}
  //      <About />
  //     </div>
  //   </> 
  // );
  return (
    <>
      <BrowserRouter>
        <Navbar type={dark} id='nv' ch={chnge} />
        <div className="container" >
          <Routes> 
            <Route exact path="/about" element={<About abc={dark}/>}></Route> 
             <Route
              exact path="/textform"
              element={
                <Textform/>
              } 
             ></Route> 
           </Routes> 
        </div>
       </BrowserRouter> 
    </>
  );
} 

export default App;
