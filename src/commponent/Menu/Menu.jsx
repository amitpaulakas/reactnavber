import React from 'react'
import logo from "../../assets/Logo.png"
import "../Menu/Menu.css"
import Button from '../commoncommponent/Button.jsx'
import Menulist from "./Menulist.jsx"
import { CiSearch } from "react-icons/ci";


const Menu = () => {
  return (
   
         <div className='Navber'>
      <div className='container'>
<div className="menubody">
<div className="Logo">
    <picture>
        <img src={logo} alt={logo} />
    </picture>
</div>
<div className='menuIteam'>
  <Menulist
   menuItem = {["Home" , "About Us", "About us", "Whats New?"]} />
</div>
<div className='Buttton'>
<Button className={"search"} >
  <p> <CiSearch/></p>
   </Button>
<Button className={"btn"} >
  <p>Click Me</p>
   </Button>
  
</div>
</div>

      </div>

    </div>
    
  )
}

export default Menu
