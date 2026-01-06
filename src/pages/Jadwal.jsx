import { useEffect } from 'react';

const Jadwal = () => {
  useEffect(() => {
    document.title = "Jadwal | Testimuni Mansa #10";
  }, []);
  
  return (
    <section className="w-full h-screen mt-24 p-4">
      <h1>Jadwal</h1>
    </section>
  );
}

export default Jadwal;