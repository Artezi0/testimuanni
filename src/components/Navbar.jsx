import { Link } from "react-router"
import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='navbar fixed w-full p-4'>
      <div className={`h-15 flex justify-between bg-[#7A1616] border-2 border-[#FBC33D] ${open ? 'rounded-t-4xl' : 'rounded-4xl'} items-center`}>
        <div className='flex items-center ml-5'>
          <img className="mt-3" src="/public/logo.svg" alt="icon" height={300} width={300}/> 
        </div>
        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-5 mr-5'>
          <li><a className="text-[#FBC33D]" href="/">Beranda</a></li>
          <li><a className="text-[#FBC33D]" href="/about">Tentang</a></li>
          <li><a className="text-[#FBC33D]" href="/jadwal">Booklet</a></li>
          <li><a className="text-[#7A1616] bg-[#FBC33D] rounded-full px-4 py-1" href="/jadwal">Cek Kluster</a></li>
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