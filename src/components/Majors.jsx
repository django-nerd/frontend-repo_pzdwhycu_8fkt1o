const majors = [
  {
    name: "Desain Komunikasi Visual",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Rekayasa Perangkat Lunak",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Kuliner",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Teknik Konstruksi Perumahan",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Teknik Pengelasan",
    img: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Majors(){
  return (
    <section className="py-12 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Konsentrasi Keahlian</h2>
          <a href="#" className="text-sm text-[#005c9d] hover:underline">Lihat semua</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {majors.map((m) => (
            <a key={m.name} href="#" className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 text-sm">{m.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
