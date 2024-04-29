import React from 'react'
import "../../commponent/Menu/Menu.css"

const Menulist = ( {menuItem} ) => {
    
  return (
    <div >  
      <ul className='menulist'>
        {menuItem.map((item)=>  (
            <li> {item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Menulist
