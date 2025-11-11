import { useState } from 'react'
import { Plane, MapPin, Calendar, Users, Search } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/20 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-orange-400 to-rose-500 text-black font-bold">
            FA
          </span>
          <span className="text-white font-semibold tracking-wide">Flights Airways</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#destinations" className="text-white/80 hover:text-white transition">Destinations</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm text-white/90 hover:text-white transition">Sign in</button>
          <a href="#book" className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 to-rose-500 text-black font-medium shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition">
            Book now
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white">
          <span className="sr-only">Toggle menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            <a href="#features" className="block text-white/80 hover:text-white">Features</a>
            <a href="#destinations" className="block text-white/80 hover:text-white">Destinations</a>
            <a href="#contact" className="block text-white/80 hover:text-white">Contact</a>
            <a href="#book" className="block mt-2 px-4 py-2 rounded-md bg-gradient-to-r from-orange-400 to-rose-500 text-black font-medium text-center">Book now</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Plane className="h-4 w-4 text-orange-400" />
            Elevate your journey
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Seamless flights. Modern comfort.
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Discover great deals to destinations worldwide. Secure payments, flexible fares, and a delightfully smooth booking experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#book" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-400 to-rose-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition">
              <Search className="h-4 w-4" /> Start booking
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
              Learn more
            </a>
          </div>
        </div>
        <BookingCard />
      </div>
    </section>
  )
}

function Field({ icon: Icon, label, placeholder, type = 'text' }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs text-white/70">{label}</span>
      <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white/90 focus-within:border-white/20">
        {Icon && <Icon className="h-4 w-4 text-orange-300" />}
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent placeholder:text-white/40 focus:outline-none"
        />
      </div>
    </label>
  )
}

function BookingCard() {
  return (
    <div id="book" className="mt-10">
      <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-black/30 backdrop-blur-xl p-4 sm:p-6 shadow-2xl shadow-black/30">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <Field icon={MapPin} label="From" placeholder="City or airport" />
          </div>
          <div className="md:col-span-2">
            <Field icon={MapPin} label="To" placeholder="City or airport" />
          </div>
          <div className="md:col-span-1">
            <Field icon={Users} label="Passengers" placeholder="1 Adult" />
          </div>
          <div className="md:col-span-2">
            <Field icon={Calendar} label="Departure" type="date" placeholder="" />
          </div>
          <div className="md:col-span-2">
            <Field icon={Calendar} label="Return" type="date" placeholder="" />
          </div>
          <div className="md:col-span-1 flex items-end">
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-orange-400 to-rose-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition">
              <Search className="h-4 w-4" /> Search
            </button>
          </div>
        </div>
        <p className="mt-3 text-xs text-white/60">No hidden fees. Free 24h changes on eligible fares.</p>
      </div>
    </div>
  )
}

function Features() {
  const items = [
    {
      title: 'Flexible fares',
      desc: 'Change or cancel on eligible tickets with ease.',
    },
    {
      title: 'Seamless payments',
      desc: 'Pay with cards, wallets, or installments securely.',
    },
    {
      title: 'Global network',
      desc: 'Fly to 120+ cities with trusted partners.',
    },
  ]
  return (
    <section id="features" className="bg-gradient-to-b from-black to-[#0a0a0a] text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Why choose us</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Designed for modern travelers who value time, transparency, and comfort.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-orange-400 to-rose-500" />
              <h3 className="mt-4 text-xl font-medium">{it.title}</h3>
              <p className="mt-2 text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Destinations() {
  const cards = [
    { city: 'Paris', country: 'France', img: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1974&auto=format&fit=crop' },
    { city: 'Tokyo', country: 'Japan', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1974&auto=format&fit=crop' },
    { city: 'New York', country: 'USA', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1974&auto=format&fit=crop' },
  ]
  return (
    <section id="destinations" className="bg-[#0a0a0a] text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Popular destinations</h2>
            <p className="mt-2 text-white/70">Handpicked places to inspire your next trip.</p>
          </div>
          <a href="#book" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition">See all</a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={c.img} alt={`${c.city}, ${c.country}`} className="h-64 w-full object-cover opacity-80 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm text-white/70">{c.country}</p>
                <h3 className="text-xl font-semibold">{c.city}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-orange-400 to-rose-500 text-black font-bold">FA</span>
            <span className="text-white/90">© {new Date().getFullYear()} Flights Airways. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black font-[Inter,ui-sans-serif,system-ui]">
      <Navbar />
      <Hero />
      <Features />
      <Destinations />
      <Footer />
    </div>
  )
}

export default App
