import React from 'react'

export default function Venue() {
  return (
    <section id="venue" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Venue & Logistics</h2>
          <p className="mt-2 text-white/70">ECE Seminar Hall, Main Campus</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-[1.2fr,1fr]">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" alt="Venue" className="h-64 w-full rounded-2xl object-cover ring-1 ring-white/10" />
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="text-sm text-white/80 space-y-2">
              <li>• Address: 123 Campus Rd, City</li>
              <li>• Nearest transport: Metro Line 2, Gate B</li>
              <li>• Parking: Lot C (limited)</li>
              <li>• Map: View on Google Maps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
