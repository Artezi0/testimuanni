import React from "react"

function App() {
  const ada = false
  return (
    <>
      <main className="main">
        <h1>Cek Gugus & Kelompok</h1>
        <h3>Dapatkan informasi mengenai gugus dan kelompokmu!</h3>
        <section className="main_input">
          <form>
            <input type="text" placeholder="Masukkan nama"/>
            <button type="submit">Cari</button>
          </form>
        </section>
        {ada ? 
        <section className="main_output">
          <p className="main_output-name">nama</p>
          <p className="main_output-gugus">gugus prodi</p>
          <p className="main_output-kelompok">kelompok</p>
        </section> : <section className="main_output">
          <p className="main_output-info">Tidak ditemukan</p>
        </section>
        }
      </main>
    </>
  )
}

export default App
