import TextField from '@mui/material/TextField';
import React from 'react'
import './Navbar2.css'






function Navbar2() {
 
  return (
    <div className='App-bar2'>
        <nav className='second-nav'>
           <ul className='nav-list'>
              <li>
                <img className='logo-img' src='https://in-media.apjonlinecdn.com/logo/stores/1/HP_logo_black_1.svg' alt='' />

              </li>
             <li >
              <div >
              <TextField className='text-field' placeholder='What are you looking for?'></TextField>
           
              
              
              </div>
              
              
              
            
              
             </li>
           </ul >

           <ul className='sales'>
            <a href='/#'>SALES:1800-108-4747</a>
           </ul>
           
        </nav>


    </div>
  )
}

export default Navbar2