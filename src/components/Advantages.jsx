import { CheckCircle2 } from "lucide-react";

const items = [
  { title: "Berbeasiswa" },
  { title: "Berasrama" },
  { title: "Indonesia Mini" },
];

export default function Advantages(){
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Keunggulan Sekolah</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it)=> (
            <div key={it.title} className="rounded-2xl border border-blue-100 p-6 flex items-center gap-4 bg-blue-50/50">
              <CheckCircle2 className="text-green-600"/>
              <p className="text-slate-800 font-semibold">{it.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
