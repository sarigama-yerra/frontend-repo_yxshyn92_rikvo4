import React from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#speakers', label: 'Speakers' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#resources', label: 'Resources' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-rose-600 shadow-lg shadow-rose-900/30 ring-1 ring-white/10" />
              <div className="text-sm leading-tight">
                <div className="font-semibold text-white tracking-tight">ECE Dept.</div>
                <div className="text-xs text-white/60">UI Intern Assessment</div>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition">
                  {l.label}
                </a>
              ))}
              <a href="#register" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-900/30 ring-1 ring-white/10 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-rose-500/50">
                Register
              </a>
            </div>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-white/10 text-white/90 hover:bg-white/5" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="text-sm text-white/90" onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
                <a href="#register" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-900/30 ring-1 ring-white/10">
                  Register
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
