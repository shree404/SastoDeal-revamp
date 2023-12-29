import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Account from "./Pages/Account";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NewArrivals from "./Pages/NewArrivals";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/signup";
import PageNotFound from "./Pages/PageNotFound";
import PersonalInfo from "./Pages/PersonalInfo";
import ProductDescription from "./Pages/ProductDescription";
import AddToCart from "./Pages/AddToCart";

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product" element={<ProductDescription />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <BrowserRouter>

        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
