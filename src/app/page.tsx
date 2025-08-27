import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F6F5F2' }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif', color: '#2C2C2C' }}>
          Bienvenido a Renové
        </h1>
        <Link 
          href="/sculptra"
          className="inline-block px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-white"
          style={{ backgroundColor: '#2CC6C6' }}
        >
          Ver Landing Page SCULPTRA®
        </Link>
      </div>
    </main>
  );
}
