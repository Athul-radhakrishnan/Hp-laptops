import { fontSize } from '@mui/system'
import React from 'react'
import './Footer.css'

import { FaFacebookF,FaYoutube,FaTwitter,FaPinterestP,FaGooglePlusG } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-list'>
            <ul className='F-list'>
                <li><h5 style={{fontSize:'16px',color:'white'}}>Contacts Us</h5></li>
                <li>Consumer Customer</li>
                <li>1800 108 4747</li>
                <li>Business Customers</li>
                <li>1800 108 4746</li>
                <li>Mon-Fri9am -7am</li>
               <li> (excl. public holidays)</li>
            </ul>
            <ul className='F-list'>
                <li><h5 style={{fontSize:'16px',color:'white'}}>Shop for Products</h5></li>
                <li>Laptops</li>
                <li>Printers</li>
                <li>Ink & Toner</li>
                <li>Monitor</li>
                <li>Accessories</li>
                <li>Care Pack</li>
                <li>Support</li>
                <li>Latest Offers</li>
                <li>Latest Products</li>
            </ul>
            <ul className='F-list'>
                <li><h5 style={{fontSize:'16px',color:'white'}}>Customers Service</h5></li>
                <li>About Us</li>
                <li>Techincal Support</li>
                <li>Sotware & Drivers</li>
                <li>Terms & Conditions</li>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Feedback & Complaints</li>
                <li>THow to Drive</li>
                <li>Product Review</li>

            </ul>
            <ul className='F-list'>
                <li><h5 style={{fontSize:'16px',color:'white'}}>My HP</h5></li>
                <li>My Account</li>
                <li>Track My Order</li>
                <li>Hp Money</li>
                <li>Store Locator</li>
                <li>Tech Takes</li>
                <li>Sustainable impact</li>
            </ul>
            <ul className='F-list'>
                <li><h5 style={{fontSize:'16px',color:'white'}}>Private Program</h5></li>
                <li>Hp Emplyee Store</li>
                <li>corporate Employee Offers</li>
                <li> Student Store</li>
                <li>Original Rewards Program</li>
                <li>Hp for Business</li>
                <li>HP Corporate Accessories Store</li>
                <li>Hp Planet Partners Rewards</li>
                <li>HP Deskjet Supplies Rewards</li>
            </ul>
        </div>

        <hr className='hr-1'></hr>

        <p className='para-h1'>© 2023 HP INDIA SALES PRIVATE LIMITED</p>
        <p  className='para-h1'>Terms & conditions of sales & service | Terms of Use | Site map | Privacy Statement</p>
          
        <ul className='media-icon'>
            <li> < FaFacebookF style={{backgroundColor:'grey',color:'#fff',width:'23px',borderRadius:'3px'}}/> </li>
            <li><FaYoutube  style={{backgroundColor:'grey',color:'#fff',width:'23px',borderRadius:'3px'}} /></li>
            <li><FaTwitter  style={{backgroundColor:'grey',color:'#fff',width:'23px',borderRadius:'3px'}}/></li>
            <li><FaPinterestP  style={{backgroundColor:'grey',color:'#fff',width:'23px',borderRadius:'3px'}} /></li>
            <li><FaGooglePlusG  style={{backgroundColor:'grey',color:'#fff',width:'23px',borderRadius:'3px'}} /></li>
        </ul>

        <div className='paragraph'>

            <p >Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Arc graphics, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro, Intel Evo, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon</p>
            <p>Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, Ethernet, Iris, Killer, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane are trademarks of Intel Corporation or its subsidiaries.</p>
            <p>Not all features are available in all editions or versions of Windows. Systems may require upgraded and/or separately purchased hardware, drivers and/or software to take full advantage of Windows functionality. See</p>
            <p style={{color:'blue'}}>www.microsoft.com</p>
            <p>The following applies to HP systems with Intel Skylake or next-generation silicon chip-based system shipping with Windows 7, Windows 8, Windows 8.1 or Windows 10 Pro systems downgraded to Windows 7 Professional,</p>
            <p>Windows 8 Pro, or Windows 8.1: This version of Windows running with the processor or chipsets used in this system has limited support from Microsoft. For more information about Microsoft’s support, please see</p>
            <p>Microsoft's Support Lifecycle FAQ at  <span style={{color:'blue'}}>  www.support.microsoft.com/lifecycle </span></p>
            <p>In accordance with the Microsoft Silicon Support Policy, HP does not support or provide drivers for Windows 8 or Windows 7 on products configured with Intel or AMD 7th generation and forward processor</p>
            <p>Covid-19 Disclaimer: We are working to meet the current extraordinary customer demand for our products. Our website reflects current product availability but circumstances are dynamic. You may check your order status</p>
            <p>via our Track My Order page ( Here ). We will send updates by email as soon as they are available. We greatly value your business and appreciate your ongoing patience as we work to get your order to you.</p>
            <p>For HP supplies (inks and toners), disclaimers apply. To know more, please  <span style={{color:'blue'}}>click here</span> </p>
            <p>Please note: The product colour and look & feel may vary from the visual representation on the Website. While all efforts are made to check pricing, product specifications and other errors, inadvertent errors do occur from</p>
            <p>time to time and HP reserves the right to decline orders arising from such errors. For pen drives, please reach out to respective manufacturers for any service queries.</p>

            <p>This e-store is Serviced by Savex Technologies Pvt Ltd. (124, Maker Chambers 3, Nariman Point, Mumbai - 21).</p>
            <p>HP employees: Report website issues</p>



        </div>

        
    </div>
  )
}

export default Footer