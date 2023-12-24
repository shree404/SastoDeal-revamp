
import './App.css';
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar"
import NewArrivals from './Pages/NewArrivals';



function App() {
  return (
    <div>
      <Navbar/>
      <NewArrivals/>
      <Footer/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
