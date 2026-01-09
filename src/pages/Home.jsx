import { useState } from "react"
import { getStudents } from "../services/studentService"
import Countdown from "../components/Countdown";
import { LuAlarmClock, LuPartyPopper, LuMegaphone, LuMic, LuArrowDownToLine, LuBookOpen, LuUser, LuSearch, LuInstagram, LuGithub} from "react-icons/lu";
import Footer from "../components/Footer";

const Home = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await getStudents(name);

      if (data?.error) {
        setError(data.error);
        return;
      }

      setResult({
        student: data.student,
        sameKelas: data.sameKelas || []
      });

    } catch (err) {
      setError("Gagal menghubungi server");
    } finally {
      setLoading(false);
    }
  } 
  
  console.log(result)

  return (
    <section className="relative w-full">
      <div id="home" className="w-full h-fit flex flex-col md:flex-row pt-24 md:pt-0">
        <div className="w-full md:w-1/2 overflow-hidden md:p-15 p-5">
          <img className="w-full h-full object-contain" src="envelope.png" alt="envelope" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-4">
          <div>
            <p className="w-fit px-4 py-1 bg-[#7A1616] text-[#FBC33D] font-medium md:text-xl rounded-4xl border-2 border-[#FBC33D]"> <LuAlarmClock className="inline mb-1 mr-1" /> Time Until The Event</p>
            <p className="text-[#7A1616]">Testimuni #10 will be held on 21/1/2026 which is precisely:</p>
          </div>
          <Countdown />
        </div>
      </div>
      <div id="about" className="w-full h-fit pt-24 px-10">
        <h1 className="text-[#7A1616] text-center font-bold leading-[1.1] sm:leading-[1.15] md:leading-tight tracking-tight text-[clamp(2rem,4vw,2.25rem)] md:text-[clamp(2.25rem,5vw,3rem)]">Everything in Testimuni #10</h1>
        <div className="mt-5 md:mt-20 h-fit flex flex-col md:flex-row justify-between gap-8 md:gap-14">
          <div className="w-full relative bg-[#7A1616] text-[#FBC33D] border-2 border-[#541313] p-4 md:p-8 rounded-xl">
            <h2 className="absolute top-2 md:top-4 left-1/4 md:left-1/2 -translate-x-1/8 md:-translate-x-1/2 w-fit px-4 py-1 text-center md:text-xl bg-[#7A1616] font-medium rounded-full border-2 border-[#FBC33D]"><LuMic className="inline mb-1 mr-1"/>College Talkshow</h2>
            <div className="overflow-hiddenbg-white w-full h-40 md:h-60 mb-4 border-2 border-[#FBC33D] rounded-xs">
              <img className="w-full h-full object-cover" src="image3.webp" alt="dokum 1" />
            </div>
            <p className="text-justify">In Testimuni #10, Alnesa alumni from all over the country's top universities will share their story and experience on continuing their study in college. Recieve meaningful insights from top alumni regarding the many ways of enrolling to universities!</p>
          </div>
          <div className="w-full relative bg-[#7A1616] text-[#FBC33D] border-2 border-[#541313] p-4 md:p-8 rounded-xl">
            <h2 className="absolute top-2 md:top-4 left-1/4 md:left-1/2 -translate-x-1/8 md:-translate-x-1/2 w-fit px-4 py-1 text-center md:text-xl bg-[#7A1616] font-medium rounded-full border-2 border-[#FBC33D]"><LuMegaphone className="inline mb-1 mr-1"/> Bloom Expedition</h2>
            <div className="bg-white w-full h-40 md:h-60 mb-4 border-2 border-[#FBC33D] rounded-xs">
              <img className="w-full h-full object-cover" src="image2.webp" alt="dokum 2" />
            </div>
            <p className="text-justify">Numerous alumni from all kinds of sciences will share everything they know about their major. From what they're studying to what kind of jobs they will land and how to survive in each major. From social science, politics, and language, to health, medicine, pure sciences and engineering, everything goes!</p>
          </div>
          <div className="w-full relative bg-[#7A1616] text-[#FBC33D] border-2 border-[#541313] p-4 md:p-8 rounded-xl">
            <h2 className="absolute top-2 md:top-4 left-1/4 md:left-1/2 -translate-x-1/12 md:-translate-x-1/2 w-fit px-4 py-1 text-center md:text-xl bg-[#7A1616] font-medium rounded-full border-2 border-[#FBC33D]"><LuPartyPopper className="inline mb-1 mr-1"/> Campus Expo</h2>
            <div className="bg-white w-full h-40 md:h-60 mb-4 border-2 border-[#FBC33D] rounded-xs">
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
              <h2 className="w-fit px-4 py-1 md:text-xl bg-[#7A1616] text-[#FBC33D] font-medium rounded-full border-2 border-[#FBC33D]"><LuBookOpen className="inline mb-1 mr-2"/>Booklet</h2>
              <p className="my-4 text-[#FBC33D]">Don't forget to download and read the booklet to know everything you need to know about Testimuni #10.</p>
              <a className="w-fit px-4 py-1 md:text-xl bg-[#FBC33D] text-[#7A1616] font-medium rounded-full border-2 border-[#7A1616]" href="https://drive.google.com/drive/folders/1akzkE8j9l2K6tpRU3ePI1cgwwfN4iouT?usp=drive_link" target="_blank"><LuArrowDownToLine className="inline mb-1 mr-1" />Download Booklet</a>
            </div>
            <div className="md:w-3/4">
              <h2 className="w-fit px-4 py-1 md:text-xl bg-[#7A1616] text-[#FBC33D] font-medium rounded-full border-2 border-[#FBC33D]"><LuUser className="inline mb-1 mr-1"/>Twibbon</h2>
              <p className="my-4 text-[#FBC33D]">Also feel free to download our twibbon and upload it to your instagram story by adding your own name to it!</p>
              <a className="w-fit px-4 py-1 md:text-xl bg-[#FBC33D] text-[#7A1616] font-medium rounded-full border-2 border-[#7A1616]" href="https://drive.google.com/drive/folders/1TJcee9Q6ZAsff9acJpNZJSONoFDUWG0_?usp=drive_link" target="_blank" ><LuArrowDownToLine className="inline mb-1 mr-1" />Download Twibbon</a>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center"></div>
        </div>
      </div>
      <div id="grouping" className="w-full h-fit pt-24 px-10">
        <div className="w-full gap-14 mt-5 md:mt-20 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col justify-baseline">
            <h1 className="text-[#7A1616] font-bold leading-[1.1] sm:leading-[1.15] md:leading-tight tracking-tight text-[clamp(2rem,4vw,2.25rem)] md:text-[clamp(2.25rem,5vw,3rem)]">Check Your Grouping</h1>
            <p className="text-[#7A1616] text-bold mb-6 text-justify">Hanya masukkan karakter berupa huruf, <span className="font-bold">Contoh: Takbir Cendekia Aswaja</span></p>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 md:gap-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Insert your full name here!"
                className="bg-white pl-4 pr-8 py-1 rounded-2xl md:text-xl w-full"
              />
              <button type="submit" className="w-full md:w-fit px-4 py-1 bg-[#7A1616] text-[#FBC33D] font-medium md:text-xl rounded-4xl border-2 border-[#FBC33D] whitespace-nowrap"><LuSearch className="inline mb-1 mr-1" /> Check Grouping</button>
            </form>
          </div>
          <div className="md:w-1/2 h-100 bg-[#7A1616] rounded-xl border-2 border-[#541313] p-4 text-[#FBC33D]  text-xl font-medium flex flex-col justify-center items-center">
            <div className={`${loading || error || result ? "hidden" : "visible"}`}>
              <div className="h-60 overflow-hidden">
                <img className="w-full h-full object-contain" src="logo.gif" alt="logo kelompok" />
              </div>
              <h2 className="text-center">Find your grouping here!</h2>
            </div>
            {loading && <h2>Loading...</h2>}
            {error && <h2>Not Found</h2>}
            {result && (
            <div className="h-full text-center flex flex-col gap-2 items-center">
              <div className="h-60 overflow-hidden">
                <img className="w-full h-full object-contain" src={result.student.logo} alt="logo kelompok" />
              </div>
              <h2>{result.student.nama}</h2>
              <h2 className="px-4 py-1 bg-[#FBC33D] text-[#7A1616] rounded-2xl">{result.student.gugus} - {result.student.kelas}</h2>
            </div>
            )}
          </div>
        </div>
        {result && result.sameKelas.length > 0 &&
        <div className="mt-5 md:mt-20">
          <h1 className="text-[#7A1616] font-bold leading-[1.1] sm:leading-[1.15] md:leading-tight tracking-tight text-[clamp(2rem,4vw,2.25rem)] md:text-[clamp(2.25rem,5vw,3rem)]">Group List</h1>
          <p className="text-[#7A1616] text-bold text-justify">Students with the same grouping</p>
          <ul className="w-full flex flex-col md:flex-row gap-4 my-6">
            <a className="text-center px-4 py-1 md:text-xl bg-[#FBC33D] text-[#7A1616] font-medium rounded-full border-2 border-[#7A1616]" href={`https://wa.me/${result.student.cpa}`} target="_blank" rel="noopener noreferrer">Contact Person 1</a>
            <a className="text-center px-4 py-1 md:text-xl bg-[#FBC33D] text-[#7A1616] font-medium rounded-full border-2 border-[#7A1616]" href={`https://wa.me/${result.student.cpb}`} target="_blank" rel="noopener noreferrer">Contact Person 2</a>
          </ul>
          <div className="overflow-x-auto">
            <table className="min-w-[600px] md:min-w-full border-2 border-[#541313]">
              <thead className="bg-[#7A1616]">
                <tr>
                  <th className="border border-[#541313] text-[#FBC33D] px-4 py-2 text-left">No</th>
                  <th className="border border-[#541313] text-[#FBC33D] px-4 py-2 text-left">Nama</th>
                  <th className="border border-[#541313] text-[#FBC33D] px-4 py-2 text-left">Gugus</th>
                  <th className="border border-[#541313] text-[#FBC33D] px-4 py-2 text-left">Kelas</th>
                </tr>
              </thead>
              <tbody>
                {result.sameKelas.map((s, i) => (
                  <tr
                    key={`${s.nama}-${i}`}
                    className="bg-[#FBC33D] hover:bg-[#7A1616] hover:text-[#FBC33D]"
                  >
                    <td className="border px-4 py-2">{i + 1}</td>
                    <td className="border px-4 py-2">{s.nama}</td>
                    <td className="border px-4 py-2">{s.gugus}</td>
                    <td className="border px-4 py-2">{s.kelas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        }
      </div>
      <footer className="mt-5 md:mt-20 w-full h-fit flex bg-[#7A1616] font-normal text-[#FBC33D] border-t-2 border-[#541313]">
        <div className="w-1/2 flex flex-col justify-center items-baseline p-15">
          <img className="
            h-18
            sm:h-20
            md:h-28 
            lg:h-32
            w-auto 
          " src="logo.svg" alt="logo" />
          <ul className="my-4">
            <li>MAN 1 Yogyakarta, Jl. C. Simanjuntak No.60, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223</li>
            <li>21-22 Januari 2026</li>
            <li>Contact Person : 0812345789</li> 
          </ul>
          <p>2026 Testimuni. All rights reserved.</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center p-15">
          <ul>
            <li><LuInstagram className="inline"/> Instagram</li>
            {/* <li><LuTiktok /> Tiktok</li> */}
            <li><LuGithub className="inline"/> Github</li>
          </ul>
        </div>
      </footer>
    </section>
  );
}

export default Home;