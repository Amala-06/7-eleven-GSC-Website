
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Career from'./pages/Career';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
       <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App;
