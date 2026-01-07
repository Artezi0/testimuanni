import { useEffect, useState } from "react"
import { getStudents } from "../services/studentService"
import Countdown from "../components/Countdown";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Beranda | Testimuni Mansa #10";
  }, []);

  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      setLoading(true);
      setError("");

      const data = await getStudents(name);
      if (data.error) {
        setError(data.error);
        setResult(null);
      } else {
        setResult(data);
      }
    } catch (err) {
      setError("Gagal menghubungi server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-screen mt-24 p-4">
      <div className="w-full h-10/12 flex border-2">
        <div className="w-1/2 overflow-hidden">
          <img className="w-full h-full object-contain" src="/public/envelope.png" alt="envelope" />
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-4 p-4">
          <div>
            <p className="w-fit px-4 py-1 bg-[#7A1616] text-[#FBC33D] font-medium rounded-4xl border-4 border-[#FBC33D]">Time Until The Event</p>
            <p className="text-[#7A1616]">Testimuni #10 will be held on 21/1/2026 which is precisely:</p>
          </div>
          <Countdown />
        </div>
      </div>
      <div className="w-full h-screen border-2 pt-24">
        <h1 className="text-[#7A1616] text-2xl text-center font-bold">Everything in Testimuni #10</h1>
        <div className="mt-20 w-full h-fit flex gap-10">
          <div className="bg-[#7A1616] text-[#FBC33D] border-4 border-[#541313] p-4 rounded-xl">
            <h2>College Talkshow</h2>
            <div></div>
            <p>In Testimuni #10, Alnesa alumni from all over the country’s top universities will share their story and experience on continuing their study in college. Recieve meaningful insights from top alumni regarding the many ways of enrolling to universities!</p>
          </div>
          <div className="bg-[#7A1616] text-[#FBC33D] border-4 border-[#541313] p-4 rounded-xl">
            <h2>College Talkshow</h2>
            <div></div>
            <p>In Testimuni #10, Alnesa alumni from all over the country’s top universities will share their story and experience on continuing their study in college. Recieve meaningful insights from top alumni regarding the many ways of enrolling to universities!</p>
          </div>
          <div className="bg-[#7A1616] text-[#FBC33D] border-4 border-[#541313] p-4 rounded-xl">
            <h2>College Talkshow</h2>
            <div></div>
            <p>In Testimuni #10, Alnesa alumni from all over the country’s top universities will share their story and experience on continuing their study in college. Recieve meaningful insights from top alumni regarding the many ways of enrolling to universities!</p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen border-2"></div>
      {/* <h1 className="mb-5">Cek Kluster</h1>
      <form onSubmit={handleSearch}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan nama lengkap"
        />
        <button>Cari</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <div>
          <p>Nama: {result.nama}</p>
          <p>Kelas: {result.gugus}</p>
          <p>Gugus: {result.kelas}</p>
        </div>
      )} */}
      <Footer />
    </section>
  );
}

export default Home;