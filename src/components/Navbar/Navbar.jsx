import React from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.png'
// import search from '../../assets/search.svg'
import user from '../../assets/user.svg'
import basket from '../../assets/basket.svg'

const navbar = () => {
  return (
    <nav className= 'container' >
         <h1>Mylezs</h1>
        {/* <img src={logo} alt="" /> */}
        <ul>
            <li>Home</li>
            <li>Collections</li>
            <li>Brands</li>
            <li>About</li>   
        </ul>

        <div className='icons'>
          {/* {<img src={search} alt="" />} */}
          {<img src={basket} alt="" />}
          {<img src={user} alt="" />}
        </div>
      
    </nav>
  )
}

export default navbar
