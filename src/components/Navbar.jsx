import { Link } from "react-router"

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img src="/src/assets/img/favicon.svg" alt="icon"/> 
      </div>
      <div className='navbar_menu'>
        <Link className="navbar_menu-link" to="/">Home</Link>
        <Link className="navbar_menu-link" to="/about">About</Link>
        <Link className="navbar_menu-link" to="/jadwal">Jadwal</Link>
      </div>
    </nav>
  )
}

export default Navbar