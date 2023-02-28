
import Navbar from "./Navbar/Navbar"
import Navbar2 from "./Navbar2/Navbar2"
import Navbar3 from "./Navbar3/Navbar3"
import Banner from "./Banner/Banner";
import Blackbox from "./Blackbox/Blackbox";
import Cartlist from "./Cartlist/Cartlist";
import Flag from "./Flag/Flag";
import Footer from "./Footer/Footer";
import Laptop from "./Laptops/Laptop";



function Home() {
  return (
    <div>
         <Navbar/>
      <Navbar2/>
      <Navbar3 />
      <Banner />
      <Laptop />
      <Blackbox />
      <Cartlist />
      <Flag />
      {/* <Footer /> */}


    </div>
  )
}

export default Home