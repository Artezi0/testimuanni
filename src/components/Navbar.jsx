import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img src="/src/assets/img/favicon.svg" alt="icon"/> 
      </div>
      <div className='navbar_menu'>
        <ul className='navbar_menu-list'>
          <li className='item'><a href="/">Home</a></li>
          <li className='item'><a href="/">About</a></li>
          <li className='item'><a href="/">Rundown</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar