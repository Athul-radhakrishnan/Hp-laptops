// import Banner from "./Components/Banner/Banner";
// import Blackbox from "./Components/Blackbox/Blackbox";
// import Cartlist from "./Components/Cartlist/Cartlist";
// import Flag from "./Components/Flag/Flag";
// import Footer from "./Components/Footer/Footer";
// import Laptop from "./Components/Laptops/Laptop";

// import Navbar2 from "./Components/Navbar2/Navbar2";
// import Navbar3 from "./Components/Navbar3/Navbar3";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Routepage from './Components/Route-page/Routepage'
import RouteNav from "./Components/RouteNav/RouteNav";





function App() {
  return (
    <div className="App">
      
      {/* <Navbar/> */}
      {/* <Navbar2/>
      <Navbar3 />
      <Banner />
      <Laptop />
      <Blackbox />
      <Cartlist />
      <Flag />
      <Footer /> */}
      

     


      
     <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/click' element={<Routepage />} />
     </Routes>
     <Footer />
      
    </div>
  );
}

export default App;
