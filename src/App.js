import { BrowserRouter, Routes,Route} from "react-router-dom";
//componenets
import Home from './pages/Home'
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

import Navbar from './componenents/Navbar'
import "./App.css";
import { Container } from '@mui/material';

function App() {



  return (

    <div className="App">
    <BrowserRouter>
    <Navbar/>

    <Routes>
    <Route path="/" element={<Aboutme />} />
    <Route path="aboutme" element={<Aboutme />} />
    <Route path="contact" element={<Contact />} />
    <Route path="portfolio" element={<Portfolio />} />
    <Route path="resume" element={<Resume />} />
    </Routes>
  
    </BrowserRouter>
   </div>
 
  );
}

export default App;
