
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './Components/Footer';
import Navbar from "./Components/Navbar"
import NewArrivals from './Pages/NewArrivals';
import Home from "./Pages/Home";
import Login from "./Pages/Login"
import Signup from "./Pages/signup"


function App() {
  return (
    <div>
      {/* <Navbar/>
      <Home/>
      <NewArrivals/>
      <Footer/>
      <Login/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={< Home />}/>
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={ <Signup />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
