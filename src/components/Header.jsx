import React from 'react'
import'../App.css'
import Navbar from './Navbar'



const Header=()=> {
    return (
        <>
          <div className="box">
              <div className="head-inner">
              <div>
              <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="header-img" />      

              </div>
            <a href=""><h1>LogoType</h1></a>
              </div>
              <Navbar />
         </div> 
         
        </>
    )
}

export default Header
