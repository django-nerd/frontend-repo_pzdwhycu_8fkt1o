export default function Ticker() {
  return (
    <div className="w-full bg-blue-800 text-white py-2 overflow-hidden">
      <div className="whitespace-nowrap animate-[marquee_18s_linear_infinite]">
        <span className="mx-8">Animasi Karya Anak SMK Kota Semarang by Banima Studios</span>
        <span className="mx-8">Penerimaan Murid Baru 2026/2027 – Daftar Mulai November 2025</span>
        <span className="mx-8">Sekolah Berbeasiswa • Berasrama • Indonesia Mini</span>
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}`}</style>
    </div>
  );
}
