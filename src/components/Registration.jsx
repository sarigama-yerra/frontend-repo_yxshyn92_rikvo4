import React from 'react'

export default function Registration() {
  return (
    <section id="register" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Quick Registration</h3>
            <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-500/50" placeholder="Full name" />
              <input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-rose-500/50" placeholder="Email" />
              <select className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-rose-500/50">
                <option className="bg-slate-900">Student</option>
                <option className="bg-slate-900">Guest</option>
              </select>
              <button type="button" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-900/30 ring-1 ring-white/10">
                Submit
              </button>
            </form>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
            <h3 className="text-xl font-semibold text-white">Tickets</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-white/70">Student</div>
                <div className="text-2xl font-semibold text-white mt-1">Free</div>
                <p className="mt-2 text-sm text-white/60">Valid college ID required</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-white/70">Guest</div>
                <div className="text-2xl font-semibold text-white mt-1">₹199</div>
                <p className="mt-2 text-sm text-white/60">Includes refreshments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
