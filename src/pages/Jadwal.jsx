import { useEffect } from 'react';

const Jadwal = () => {
  useEffect(() => {
    document.title = "Jadwal | Testimuni Mansa #10";
  }, []);
  
  return <div>Jadwal Page</div>;
} 

export default Jadwal;