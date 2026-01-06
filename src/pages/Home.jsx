import { useEffect, useState } from "react"
import { getStudents } from "../services/studentService"

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
      <h1 className="mb-5">Cek Kluster</h1>
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
      )}
    </section>
  );
}

export default Home;