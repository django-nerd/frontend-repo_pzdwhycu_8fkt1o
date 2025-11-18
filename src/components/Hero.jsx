export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#005c9d] via-blue-700 to-blue-900 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(800px_400px_at_10%_10%,#fff,transparent)]"></div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs tracking-wide">Resmi • SMK Bagimu Negeriku</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Sistem Penerimaan Murid Baru (SPMB) 2026/2027
          </h1>
          <p className="mt-4 text-blue-100 text-lg">Pendaftaran Mulai November 2025</p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="https://bit.ly/spmbsmkbn2627" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#ffc107] text-slate-900 font-bold shadow-lg hover:brightness-95">
              DAFTAR SEKARANG!
            </a>
            <a href="https://bit.ly/spmbsmkbn2627" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 border border-white/20">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://bit.ly/spmbsmkbn2627" alt="QR SPMB" className="w-16 h-16 bg-white p-1 rounded" />
              <div>
                <p className="font-semibold">Scan untuk daftar</p>
                <p className="text-blue-100 text-sm">bit.ly/spmbsmkbn2627</p>
              </div>
            </a>
          </div>
        </div>

        <div className="relative">
          <img src="https://images.unsplash.com/photo-1606326608606-1c44c4b2f614?q=80&w=1600&auto=format&fit=crop" alt="Siswa-siswi SMK" className="w-full rounded-2xl shadow-2xl border border-white/20" />
          <div className="absolute -bottom-4 -right-4 bg-white text-[#005c9d] px-4 py-3 rounded-xl shadow-xl font-semibold">Sekolah Berkarakter • Berprestasi</div>
        </div>
      </div>
    </section>
  );
}
