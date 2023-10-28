import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
    let item = JSON.parse(localStorage.getItem('nutritions'))
    let length = item?.length||0
    let navigate = useNavigate();
  return (
  
        <nav className='navbar'>
            <div>
                <h2 onClick={()=>{navigate("/")}}>Recipe Website</h2>
            </div>
           
            <div>
                <Link to={'/wishlist'}><p>WishList {length}</p></Link>
            </div>
        </nav>
  )
}

export default Navbar
