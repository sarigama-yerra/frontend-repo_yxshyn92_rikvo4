import React from 'react'

export default function Speaker() {
  return (
    <section id="speakers" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Resource Person</h2>
          <p className="mt-2 text-white/70">Megamind – UI Intern Assessment</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-[220px,1fr] items-start">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" alt="Speaker" className="h-52 w-52 rounded-2xl object-cover ring-1 ring-white/10" />
          <div>
            <p className="text-white/80 leading-relaxed">
              Passionate about interface clarity and motion literacy. Focuses on transforming complex information into elegant, engaging experiences. Based in Bengaluru. Connect for portfolio feedback and career guidance.
            </p>
            <div className="mt-4">
              <a href="#" className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500 hover:underline">LinkedIn Profile →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
