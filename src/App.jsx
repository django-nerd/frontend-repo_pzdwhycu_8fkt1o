import Header from "./components/Header";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Majors from "./components/Majors";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Ticker />
      <Hero />
      <Advantages />
      <Majors />
      <footer className="mt-auto bg-slate-900 text-blue-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid lg:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-3">SMK Bagimu Negeriku</h4>
            <p className="text-sm opacity-80">Jl. Palir Raya No. 66-68 (50187), Podorejo, Ngaliyan, Semarang</p>
            <p className="text-sm opacity-80 mt-1">Telp. (024) 76437854 • Email: sekolah@smkbagimunegeriku.sch.id</p>
            <div className="mt-4">
              <iframe title="map" src="https://www.google.com/maps?q=Jl.%20Palir%20Raya%20No.%2066-68%20(50187),%20Podorejo,%20Ngaliyan,%20Semarang&output=embed" width="100%" height="160" className="rounded-lg border border-blue-900" loading="lazy"></iframe>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Tautan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Beranda</a></li>
              <li><a href="#" className="hover:underline">Tentang Kami</a></li>
              <li><a href="#" className="hover:underline">SPMB</a></li>
              <li><a href="#" className="hover:underline">Hubungi Kami</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Ikuti Kami</h4>
            <div className="text-sm opacity-80">Instagram • YouTube</div>
            <div className="mt-6 p-4 rounded-lg bg-blue-950/50 border border-blue-900">
              <p className="text-xs">© 2025 SMK Bagimu Negeriku</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
