import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-rose-600 shadow-lg shadow-rose-900/30 ring-1 ring-white/10" />
              <div className="text-sm leading-tight">
                <div className="font-semibold text-white tracking-tight">ECE Dept.</div>
                <div className="text-xs text-white/60">UI Intern Assessment</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/70 max-w-sm">Department of Electronics & Communication Engineering. Reach out for queries or collaborations.</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <ul className="mt-2 text-sm text-white/80">
              <li>ece@university.edu</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Social</div>
            <ul className="mt-2 text-sm text-white/80">
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">© {new Date().getFullYear()} ECE Department. All rights reserved.</div>
      </div>
    </footer>
  )
}
