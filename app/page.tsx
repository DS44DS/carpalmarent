'use client'
import { useMemo, useState } from "react"
import { Brand } from "@/components/Brand"
import CookiesBanner from "@/components/Cookies"

const FLEET = [
  { id: "eco", name: "Económico", desc: "Compacto ideal para ciudad.", img: "https://images.unsplash.com/photo-1549921296-3a6b3ac4e62c?q=80&w=1600&auto=format&fit=crop", rate: 28 },
  { id: "std", name: "Estándar", desc: "Espacio y comodidad.", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop", rate: 42 },
  { id: "suv", name: "SUV / Familiar", desc: "Perfecto para escapadas.", img: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop", rate: 58 },
  { id: "lux", name: "Premium", desc: "Confort y estilo premium.", img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1600&auto=format&fit=crop", rate: 85 },
]

export default function Home() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), [])
  const [pickup, setPickup] = useState(today)
  const [dropoff, setDropoff] = useState(today)
  const [category, setCategory] = useState("std")
  const days = Math.max(1, Math.ceil((new Date(dropoff).getTime() - new Date(pickup).getTime()) / 86400000))

  const selectedCar = FLEET.find(c => c.id === category)!
  const total = selectedCar.rate * days

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Brand />
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#reserva" className="hover:text-brand">Reserva</a>
            <a href="#flota" className="hover:text-brand">Flota</a>
            <a href="#opiniones" className="hover:text-brand">Opiniones</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
            <a href="#contacto" className="hover:text-brand">Contacto</a>
          </nav>
          <a href="#reserva" className="px-4 py-2 rounded-xl bg-brand text-white text-sm font-medium shadow hover:bg-brand-dark">Reservar</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2000&auto=format&fit=crop" alt="Carretera en Mallorca" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Alquila tu coche en <span className="text-brand-dark">Carpalmarent</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Entregas en Aeropuerto de Palma (PMI) y en toda la isla. Seguro claro, precios sin sorpresas.
            </p>
          </div>
        </div>
      </section>

      {/* WIDGET SIMPLE */}
      <section id="reserva" className="relative -mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 grid md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium">Fecha recogida</label>
              <input type="date" className="input w-full mt-1" value={pickup} onChange={(e) => setPickup(e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium">Fecha devolución</label>
              <input type="date" className="input w-full mt-1" value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium">Categoría</label>
              <select className="input w-full mt-1" value={category} onChange={(e) => setCategory(e.target.value)}>
                {FLEET.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-sm text-gray-600">Total: <span className="font-semibold text-gold">€{total}</span></p>
              <a href="/reservar" className="mt-2 px-4 py-2 rounded-xl bg-brand text-white font-medium hover:bg-brand-dark text-center">Continuar</a>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="flota" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Nuestra flota</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {FLEET.map(car => (
              <div key={car.id} className="bg-white rounded-2xl shadow overflow-hidden border">
                <img src={car.img} alt={car.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{car.name}</h3>
                    <span className="text-gold font-semibold">€{car.rate}/día</span>
                  </div>
                  <p className="text-sm text-gray-600">{car.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 mt-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Carpalmarent. Todos los derechos reservados.
      </footer>

      <CookiesBanner />
    </div>
  )
}
