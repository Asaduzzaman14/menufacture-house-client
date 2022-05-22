import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';
import About from './Components/Home/About';
import Review from './Components/Home/Review';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import RequirAuth from './Components/Login/RequirAuth';
import Purchase from './Components/Routes/Purchase';
import NotFound from './Components/Shared/NotFound';
import Profile from './Components/Dashboard/Profile';
import Dashborad from './Components/Dashboard/Dashborad';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/home" element={<Home></Home>}> </Route>
        <Route path="/purchase/:id" element={<Purchase></Purchase>}> </Route>

        <Route path="/about" element={<RequirAuth> <About></About></RequirAuth>}> </Route>


        <Route path="/dashborad" element={<RequirAuth><Dashborad></Dashborad></RequirAuth>}>

          <Route path="" element={<Profile></Profile>}> </Route>
          <Route path="/review" element={<Review></Review>}> </Route>


        </Route>



        <Route path="/login" element={<Login></Login>}> </Route>
        <Route path="/signup" element={<Signup></Signup>}> </Route>
        <Route path="*" element={<NotFound></NotFound>}> </Route>


      </Routes>
    </div >
  );
}

export default App;
