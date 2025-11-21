import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28">
      <div className="relative h-[68vh] min-h-[520px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 animate-pulse" />
              <span className="text-xs font-medium text-white/80">ECE • Department Event</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Megamind – UI Intern Assessment
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              A hands-on session to evaluate layout sense, hierarchy, and your ability to craft lively, modern interfaces with motion.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-white/80">
              <span className="rounded-lg bg-white/10 px-3 py-1 text-sm ring-1 ring-white/15">12 Jan, 10:00 AM</span>
              <span className="rounded-lg bg-white/10 px-3 py-1 text-sm ring-1 ring-white/15">ECE Seminar Hall</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#register" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-900/30 ring-1 ring-white/10 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-rose-500/50">
                Register Now
              </a>
              <a href="#schedule" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/10">
                View Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
