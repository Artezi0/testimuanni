import { Link } from "react-router"
import { useState } from "react"
import { LuMenu, LuX } from "react-icons/lu";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='navbar fixed top-0 left-0 w-full p-4 z-50'>
      <div className={`h-15 flex justify-between bg-[#7A1616] ${open ? 'rounded-t-4xl border-b-0' : 'rounded-4xl'} items-center border-2 border-[#FBC33D]`}>
        <div className='flex items-center ml-5'>
          <img className="
            h-14
            sm:h-16
            md:h-20 
            lg:h-24
            w-auto 
            mt-3" src="logo.svg" alt="icon"/> 
        </div>
        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-5 mr-5'>
          <li><a className="text-[#FBC33D]" href="#home">Home</a></li>
          <li><a className="text-[#FBC33D]" href="#about">About</a></li>
          <li><a className="text-[#FBC33D]" href="#booklet">Booklet</a></li>
          <li><a className="text-[#7A1616] bg-[#FBC33D] rounded-full px-4 py-1" href="#grouping">Check Grouping</a></li>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden mr-10 text-xl">{open ? <LuX className="text-[#FBC33D]"/> : <LuMenu className="text-[#FBC33D]" />}</button>
      </div>
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-[#7A1616] overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} rounded-b-4xl border-2 border-t-0 border-[#FBC33D]`}>
        <div className="flex flex-col items-center gap-5 py-4">
          <a className="text-[#FBC33D]" onClick={() => setOpen(false)} href="#home">Home</a>
          <a className="text-[#FBC33D]" onClick={() => setOpen(false)} href="#about">About</a>
          <a className="text-[#FBC33D]" onClick={() => setOpen(false)} href="#booklet">Booklet</a>
          <a className="text-[#7A1616] bg-[#FBC33D] rounded-full px-4 py-1" onClick={() => setOpen(false)} href="#grouping">Check Grouping</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar