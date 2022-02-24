// import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import "./App.css";
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/product" element={<Products />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
