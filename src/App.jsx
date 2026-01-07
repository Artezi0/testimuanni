import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
