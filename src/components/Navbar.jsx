import { Link } from "react-router"
import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='navbar fixed w-full p-4'>
      <div className={`h-18 flex justify-between bg-white ${open ? 'rounded-t-2xl' : 'rounded-2xl'} items-center`}>
        <div className='flex items-center gap-2 ml-10'>
          <img src="/src/assets/img/favicon.svg" alt="icon" height={50} width={50}/> 
          <p className="text-xl text-black"><span className="font-bold">Testimuni Mansa</span> #10</p>
        </div>
        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-5 mr-10'>
          <Link className="text-black" to="/">Home</Link>
          <Link className="text-black" to="/about">About</Link>
          <Link className="text-black" to="/jadwal">Jadwal</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden mr-10">!</button>
      </div>
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} rounded-b-2xl`}>
        <div className="flex flex-col items-center gap-5 py-4">
          <Link className="text-black" onClick={() => setOpen(false)} to="/">
            Home
          </Link>
          <Link className="text-black" onClick={() => setOpen(false)} to="/about">
            About
          </Link>
          <Link className="text-black" onClick={() => setOpen(false)} to="/jadwal">
            Jadwal
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar