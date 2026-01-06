import { useEffect } from "react"

const About = () => {
   useEffect(() => {
     document.title = "Tentang | Testimuni Mansa #10";
   }, []);
 
  return (
    <section className="w-full h-screen mt-24 p-3">
      <h1>About Us</h1>
    </section>
  )
}

export default About; 