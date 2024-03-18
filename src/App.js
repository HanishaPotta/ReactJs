
import './App.css';
import About from './Components/About';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import {
  BrowserRouter,
Routes,
  Route,

 // useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar title="Navbarr" button="searchhere"/>
   
      <Routes>
        <Route path="/text" element={<TextForm heading="Text analyser"/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
 
    </>
  );
}

export default App;
