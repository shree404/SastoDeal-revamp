import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import NewArrivals from './Pages/NewArrivals';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Home/> */}
      <NewArrivals/>
      <Footer/>
    </div>
  );
}

export default App;
