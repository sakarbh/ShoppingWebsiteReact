import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
  return (
    <>
    <div>
    <ul className='HeaderList'
    >
          <li>
              <NavLink to='/' className='Navlist'>
                  Home 
              </NavLink>
          </li>
          <li>
              <NavLink to='/products' className='Navlist'>
                  Products
              </NavLink>
          </li>
          <li>
              <NavLink to='/cart' className='Navlist'>
                  Shopping Cart
                  
              </NavLink>
              <FiShoppingCart className='cart-shopping'/>
          </li>
      </ul>
      </div>
      </>
  )
}

export default Header