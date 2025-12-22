import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Jadwal from "./pages/Jadwal"
import About from "./pages/About"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
