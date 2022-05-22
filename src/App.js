import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';
import Banner from './Components/Home/Banner';
import About from './Components/Home/About';
import Review from './Components/Home/Review';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import RequirAuth from './Components/Login/RequirAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>

        <Route path="/about" element={<RequirAuth> <About></About></RequirAuth>}> </Route>
        <Route path="/review" element={<Review></Review>}> </Route>



        <Route path="/login" element={<Login></Login>}> </Route>
        <Route path="/signup" element={<Signup></Signup>}> </Route>
      </Routes>
    </div >
  );
}

export default App;
