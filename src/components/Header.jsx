import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { useState } from "react";

const contact = {
  address: "Jl. Palir Raya No. 66-68 (50187), Podorejo, Ngaliyan, Semarang",
  phone: "(024) 76437854",
  email: "sekolah@smkbagimunegeriku.sch.id",
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    "Beranda",
    "Tentang Kami",
    "Konsentrasi Keahlian",
    "Galeri",
    "Berita",
    "Alumni",
    "Perpustakaan",
    "SPMB",
    "Hubungi Kami",
  ];

  return (
    <header className="w-full bg-white/90 backdrop-blur border-b border-blue-100 sticky top-0 z-40">
      {/* top info bar */}
      <div className="hidden md:flex items-center justify-between text-sm text-slate-700 px-4 lg:px-8 py-2 bg-blue-50">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-blue-700"/> {contact.address}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 hover:text-blue-700"><Phone size={16} className="text-blue-700"/> {contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-blue-700"><Mail size={16} className="text-blue-700"/> {contact.email}</a>
        </div>
      </div>

      {/* main nav */}
      <div className="px-4 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-800 text-white grid place-items-center font-bold">SMK</div>
          <div>
            <p className="text-sm text-slate-500 leading-tight">SMK</p>
            <p className="text-base font-semibold text-slate-900 leading-tight">Bagimu Negeriku</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((item) => (
            <a key={item} href="#" className="text-slate-700 hover:text-blue-800 text-sm font-medium">
              {item}
            </a>
          ))}
          <a href="https://bit.ly/spmbsmkbn2627" target="_blank" rel="noreferrer" className="ml-2 inline-flex items-center px-4 py-2 rounded-full bg-[#005c9d] text-white text-sm font-semibold shadow hover:opacity-90">Daftar SPMB</a>
        </nav>

        <button className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          {nav.map((item) => (
            <a key={item} href="#" className="block py-2 text-slate-700 hover:text-blue-800 text-sm font-medium">
              {item}
            </a>
          ))}
          <a href="https://bit.ly/spmbsmkbn2627" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-full bg-[#005c9d] text-white text-sm font-semibold shadow hover:opacity-90">Daftar SPMB</a>
        </div>
      )}
    </header>
  );
}
