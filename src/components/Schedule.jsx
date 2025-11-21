import React from 'react'

const blocks = [
  { time: '10:00', title: 'Welcome & Brief' },
  { time: '10:15', title: 'Version A: Institutional' },
  { time: '11:15', title: 'Break' },
  { time: '11:30', title: 'Version B: Promotional' },
  { time: '12:30', title: 'Submission & Q&A' },
]

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Event Schedule</h2>
            <p className="mt-2 text-white/70">A compact overview of the day</p>
          </div>
          <a href="#" className="text-sm text-white/80 hover:text-white">View detailed schedule →</a>
        </div>
        <div className="grid gap-3">
          {blocks.map((b) => (
            <div key={b.time} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <span className="text-sm font-semibold text-white/90">{b.time}</span>
              <span className="text-white/80">{b.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
