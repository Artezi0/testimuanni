import { useState } from "react"
import { getStudents } from "../services/studentService"
import Countdown from "../components/Countdown";
import { LuAlarmClock, LuPartyPopper, LuMegaphone, LuMic, LuArrowDownToLine, LuBookOpen, LuUser } from "react-icons/lu";

const Home = () => {
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
    <section className="relative w-full">
      <div id="home" className="w-full h-fit flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 overflow-hidden md:p-15 p-0">
          <img className="w-full h-full object-contain" src="envelope.png" alt="envelope" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-4">
          <div>
            <p className="w-fit px-4 py-1 bg-[#7A1616] text-[#FBC33D] font-medium text-xl rounded-4xl border-4 border-[#FBC33D]"> <LuAlarmClock className="inline mb-1 mr-1" /> Time Until The Event</p>
            <p className="text-[#7A1616]">Testimuni #10 will be held on 21/1/2026 which is precisely:</p>
          </div>
          <Countdown />
        </div>
      </div>
      <div id="about" className="w-full h-fit pt-24 px-10">
        <h1 className="text-[#7A1616] text-center font-bold leading-[1.1] sm:leading-[1.15] md:leading-tight tracking-tight text-[clamp(2rem,4vw,2.25rem)] md:text-[clamp(2.25rem,5vw,3rem)]">Everything in Testimuni #10</h1>
        <div className="mt-5 md:mt-20 h-fit flex flex-col md:flex-row justify-between gap-8 md:gap-14">
          <div className="w-full relative bg-[#7A1616] text-[#FBC33D] border-4 border-[#541313] p-4 md:p-8 rounded-xl">
            <h2 className="absolute top-4 left-1/2 -translate-x-1/2 w-fit px-4 py-1 text-center text-xl bg-[#7A1616] font-medium rounded-full border-4 border-[#FBC33D]"><LuMic className="inline mb-1 mr-1"/>College Talkshow</h2>
            <div className="overflow-hiddenbg-white w-full h-60 mb-4 border-4 border-[#FBC33D] rounded-xs">
              <img className="w-full h-full object-cover" src="image3.webp" alt="dokum 1" />
            </div>
            <p className="text-justify">In Testimuni #10, Alnesa alumni from all over the country's top universities will share their story and experience on continuing their study in college. Recieve meaningful insights from top alumni regarding the many ways of enrolling to universities!</p>
          </div>
          <div className="w-full relative bg-[#7A1616] text-[#FBC33D] border-4 border-[#541313] p-4 md:p-8 rounded-xl">
            <h2 className="absolute top-4 left-1/2 -translate-x-1/2 w-fit px-4 py-1 text-center text-xl bg-[#7A1616] font-medium rounded-full border-4 border-[#FBC33D]"><LuMegaphone className="inline mb-1 mr-1"/> Bloom Expedition</h2>
            <div className="bg-white w-full h-60 mb-4 border-4 border-[#FBC33D] rounded-xs">
              <img className="w-full h-full object-cover" src="image2.webp" alt="dokum 2" />
            </div>
            <p className="text-justify">Numerous alumni from all kinds of sciences will share everything they know about their major. From what they're studying to what kind of jobs they will land and how to survive in each major. From social science, politics, and language, to health, medicine, pure sciences and engineering, everything goes!</p>
          </div>
          <div className="w-full relative bg-[#7A1616] text-[#FBC33D] border-4 border-[#541313] p-4 md:p-8 rounded-xl">
            <h2 className="absolute top-4 left-1/2 -translate-x-1/2 w-fit px-4 py-1 text-center text-xl bg-[#7A1616] font-medium rounded-full border-4 border-[#FBC33D]"><LuPartyPopper className="inline mb-1 mr-1"/> Campus Expo</h2>
            <div className="bg-white w-full h-60 mb-4 border-4 border-[#FBC33D] rounded-xs">
              <img className="w-full h-full object-cover" src="image1.webp" alt="dokum 3" />
            </div>
            <p className="text-justify">Explore each stand from alumni representing many different universities in the country! Ask any information about anything and they will gladly inform you and share their knowledge on that matter.</p>
          </div>
        </div>
      </div>
      <div id="booklet" className="w-full h-fit pt-24">
        <h1 className="text-[#7A1616] text-center font-bold leading-[1.1] sm:leading-[1.15] md:leading-tight tracking-tight text-[clamp(2rem,4vw,2.25rem)] md:text-[clamp(2.25rem,5vw,3rem)]">Booklet & Twibbon</h1>
        <div className=" bg-[#7A1616] flex h-130 p-10 mt-5 md:mt-20">
          <div className="md:w-1/2 h-full flex flex-col justify-center md:items-end gap-10">
            <div className="md:w-3/4">
              <h2 className="w-fit px-4 py-1 text-xl bg-[#7A1616] text-[#FBC33D] font-medium rounded-full border-4 border-[#FBC33D]"><LuBookOpen className="inline mb-1 mr-2"/>Booklet</h2>
              <p className="my-4 text-[#FBC33D]">Don't forget to download and read the booklet to know everything you need to know about Testimuni #10.</p>
              <a className="w-fit px-4 py-1 text-xl bg-[#FBC33D] text-[#7A1616] font-medium rounded-full border-4 border-[#7A1616]" href="#"><LuArrowDownToLine className="inline mb-1 mr-1" />Download Booklet</a>
            </div>
            <div className="md:w-3/4">
              <h2 className="w-fit px-4 py-1 text-xl bg-[#7A1616] text-[#FBC33D] font-medium rounded-full border-4 border-[#FBC33D]"><LuUser className="inline mb-1 mr-1"/>Twibbon</h2>
              <p className="my-4 text-[#FBC33D]">Also feel free to download our twibbon and upload it to your instagram story by adding your own name to it!</p>
              <a className="w-fit px-4 py-1 text-xl bg-[#FBC33D] text-[#7A1616] font-medium rounded-full border-4 border-[#7A1616]" href="#"><LuArrowDownToLine className="inline mb-1 mr-1" />Download Twibbon</a>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center"></div>
        </div>
      </div>
      <div id="grouping" className="w-full h-screen pt-24 px-10">
        <h1 className="text-[#7A1616] text-center font-bold leading-[1.1] sm:leading-[1.15] md:leading-tight tracking-tight text-[clamp(2rem,4vw,2.25rem)] md:text-[clamp(2.25rem,5vw,3rem)]">Check Your Grouping</h1>
        <div className="w-full gap-4 mt-20 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <form onSubmit={handleSearch}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama lengkap"
              />
            <button type="submit">Check Grouping</button>
            </form>
          </div>
          <div className="md:w-1/2 h-100 bg-[#7A1616] rounded-xl border-4 border-[#541313] p-4 text-[#FBC33D]">
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {result && (
              <div>
                <p>Nama: {result.nama}</p>
                <p>Kelas: {result.gugus}</p>
                <p>Gugus: {result.kelas}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;