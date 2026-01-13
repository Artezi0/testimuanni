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
    <section className="relative w-full overflow-x-hidden">
      <div id="home" className="pb-16 bg-linear-to-tl from-[#0986FF] from-40% to-[#B2E1FF] w-full h-fit flex flex-col md:flex-row pt-24 md:pt-0 relative">
        <div className="w-fill md:w-fill h-fit absolute bottom-0">
          <img src="land.webp" className=" w-full h-full object-contain"/>
        </div>
        <div className="w-full md:w-1/2 overflow-hidden md:p-15 p-5 z-10">
          <img className="w-full h-full object-contain" src="envelope.png" alt="envelope" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 p-4">
          <div>
            <p className="w-fit px-4 py-1 bg-[#7A1616] text-[#FBC33D] font-medium md:text-xl rounded-4xl border-2 border-[#FBC33D]"> <LuAlarmClock className="inline mb-1 mr-1" /> Time Until The Event</p>
            <p className="text-[#7A1616] font-medium mt-2">Testimuni #10 will be held on 20/1/2026 which is precisely:</p>
          </div>
          <Countdown />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[#FBC33D] rounded-t-4xl"></div>
      </div>
      <div id="about" className="w-full h-fit md:pt-24 px-10">
        <h1 className="text-[#7A1616] text-center font-bold leading-[1.1] sm:leading-[1.15] md:leading-tight tracking-tight text-[clamp(2rem,4vw,2.25rem)] md:text-[clamp(2.25rem,5vw,3rem)]">Everything in Testimuni #10</h1>
        <div className="mt-5 md:mt-20 h-fit flex flex-col md:flex-row justify-between gap-8 md:gap-14">
          <div className="w-full relative bg-radial from-[#B12525] from-40% to-[#7a1616] text-[#FBC33D] border-2 border-[#541313] p-4 md:p-8 rounded-xl">
            <h2 className="absolute top-2 md:top-4 left-1/4 md:left-1/2 -translate-x-1/8 md:-translate-x-1/2 w-fit px-4 py-1 text-center md:text-xl bg-[#7A1616] font-medium rounded-full border-2 border-[#FBC33D]"><LuMic className="inline mb-1 mr-1"/>College Talkshow</h2>
            <div className="overflow-hiddenbg-white w-full h-40 md:h-60 mb-4 border-2 border-[#FBC33D] rounded-xs">
              <img className="w-full h-full object-cover" src="image3.webp" alt="dokum 1" />
            </div>
            <p className="text-justify">In Testimuni #10, Alnesa alumni from all over the country's top universities will share their story and experience on continuing their study in college. Recieve meaningful insights from top alumni regarding the many ways of enrolling to universities!</p>
          </div>
          <div className="w-full relative bg-radial from-[#B12525] from-40% to-[#7a1616] text-[#FBC33D] border-2 border-[#541313] p-4 md:p-8 rounded-xl">
            <h2 className="absolute top-2 md:top-4 left-1/4 md:left-1/2 -translate-x-1/8 md:-translate-x-1/2 w-fit px-4 py-1 text-center md:text-xl bg-[#7A1616] font-medium rounded-full border-2 border-[#FBC33D]"><LuMegaphone className="inline mb-1 mr-1"/> Bloom Expedition</h2>
            <div className="bg-white w-full h-40 md:h-60 mb-4 border-2 border-[#FBC33D] rounded-xs">
              <img className="w-full h-full object-cover" src="image2.webp" alt="dokum 2" />
            </div>
            <p className="text-justify">Numerous alumni from all kinds of sciences will share everything they know about their major. From what they're studying to what kind of jobs they will land and how to survive in each major. From social science, politics, and language, to health, medicine, pure sciences and engineering, everything goes!</p>
          </div>
          <div className="w-full relative bg-radial from-[#B12525] from-40% to-[#7a1616] text-[#FBC33D] border-2 border-[#541313] p-4 md:p-8 rounded-xl">
            <h2 className="absolute top-2 md:top-4 left-1/4 md:left-1/2 -translate-x-1/12 md:-translate-x-1/2 w-fit px-4 py-1 text-center md:text-xl bg-[#7A1616] font-medium rounded-full border-2 border-[#FBC33D]"><LuPartyPopper className="inline mb-1 mr-1"/> Campus Expo</h2>
            <div className="bg-white w-full h-40 md:h-60 mb-4 border-2 border-[#FBC33D] rounded-xs">
              <img className="w-full h-full object-cover" src="image1.webp" alt="dokum 3" />
            </div>
            <p className="text-justify">Explore each stand from alumni representing many different universities in the country! Ask any information about anything and they will gladly inform you and share their knowledge on that matter.</p>
          </div>
        </div>
      </div>
      <div id="booklet" className="w-full h-fit pt-24 relative">
        <h1 className="text-[#7A1616] text-center font-bold leading-[1.1] sm:leading-[1.15] md:leading-tight tracking-tight text-[clamp(2rem,4vw,2.25rem)] md:text-[clamp(2.25rem,5vw,3rem)]">Booklet & Twibbon</h1>
        <div className="bg-gradient-to-r from-[#7A1616] to-[#B12525] flex flex-col md:flex-row md:h-130 p-10 mt-5 md:mt-20 gap-0 md:gap-15">
          <div className="md:w-1/2 h-fit flex flex-col justify-center md:items-end gap-10">
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
          <div className="h-fit md:w-1/2">
            <img src="bt.webp" alt="booklet & twibbon" className="
              h-128
              sm:h-128
              md:h-132
              lg:h-148
              w-auto 
              object-contain
              hidden sm:block
            "/>
          </div>
        </div>
        <div className="p-10 h-64 relative block sm:hidden">
          <img src="bt.webp" alt="booklet & twibbon" className="
            absolute
            -top-5
            h-64
            sm:h-128
            md:h-132
            lg:h-148
            w-auto 
            object-contain
          "/>
        </div>
      </div>
      <div id="grouping" className="w-full md:pt-24 h-fit px-10">
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
          <div className="md:w-1/2 h-100 bg-radial from-[#B12525] from-40% to-[#7a1616] rounded-xl border-2 border-[#541313] p-4 text-[#FBC33D]  text-xl font-medium flex flex-col justify-center items-center">
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
      <footer className="mt-15 md:mt-24 w-full h-fit bg-gradient-to-r bg-[#7A1616] font-normal text-[#FBC33D] flex flex-col justify-between gap-10">
        <div className="h-fit w-full flex justify-end">
          <img src="footer.svg" className="
            h-18
            sm:h-14
            md:h-22
            lg:h-26
            w-auto 
          "/>
        </div>
        <div className="flex flex-col md:flex-row h-fit gap-5 md:gap-0">
          <div className="flex flex-col md:w-1/2 px-15 h-full">
            <div>
              <img className="
                h-18
                sm:h-20
                md:h-32 
                lg:h-36
                w-auto 
              " src="logo.svg" alt="logo" />
            </div>
            <p className="">2026 Testimuni #10. All Rights Reserved</p>
          </div>
          <div className="flex flex-col md:flex-row md:w-1/2 h-full justify-between px-15 gap-5 md:gap-0">
            <ul className="">
              <p className="font-medium md:text-xl">Testimuni Website</p>
              <li><a className="text-[#FBC33D]" href="#home">Home</a></li>
              <li><a className="text-[#FBC33D]" href="#about">About</a></li>
              <li><a className="text-[#FBC33D]" href="#booklet">Booklet</a></li>
              <li><a className="text-[#FBC33D]" href="#grouping">Grouping</a></li>
            </ul>
            <ul className="">
              <p className="font-medium md:text-xl">Contact Person</p>
              <li><a className="text-[#FBC33D]" href="https://wa.me/6285786628288" target="_blank">+62 857-8662-8288 (Ais)</a></li>
              <li><a className="text-[#FBC33D]" href="https://wa.me/6281904038377" target="_blank">+62 819-0403-8377 (Scheva)</a></li>
            </ul>
            <ul className="">
              <p className="font-medium md:text-xl">Social Media</p>
              <li><a className="text-[#FBC33D]" href="https://www.instagram.com/testimunimansa/"  target="_blank">Instagram</a></li>
              <li><a className="text-[#FBC33D]" href="https://www.tiktok.com/@eventmansa" target="_blank">Tiktok</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <img src="footer.svg" className="
            h-18
            sm:h-14
            md:h-22
            lg:h-26
            w-auto 
          "/>
        </div>
      </footer>
    </section>
  );
}

export default Home;