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
import PersonalInfoSection from "./Components/Personal Info/section"

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
          <Route path="/account" element={<PersonalInfoSection />} />
          <Route path="/product" element={<ProductDescription />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/account" element={<PersonalInfo />} />
           

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
