
 import React from "react";
 import { BrowserRouter , Route,Routes, Switch} from "react-router-dom"; 
 import NameList from "./components/pages/NameList";
 import HeadNavBar from './components/HeadNavBar';
 import Home from './components/pages/Home/Home';
import About from "./components/pages/About/About";
 function App(){
  return (
    <React.Fragment>
      <BrowserRouter>
        <HeadNavBar/>
         
       <switch>
        <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/About" element={<About/> }/>
        <Route path="/NameList" element={<NameList/> }/>
        </Routes>
        </switch>
        
       </BrowserRouter>
    </React.Fragment>
    );
 }
 export default App;
