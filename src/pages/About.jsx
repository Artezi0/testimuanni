import { useEffect } from "react"

const About = () => {
   useEffect(() => {
     document.title = "Tentang | Testimuni Mansa #10";
   }, []);
 
  return <div>About Us</div>;
}

export default About; 