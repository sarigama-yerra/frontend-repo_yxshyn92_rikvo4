import React from 'react'
import { Sparkles, Palette, Layers3, Rocket } from 'lucide-react'

const items = [
  { icon: Sparkles, title: 'Visual Hierarchy', desc: 'Craft clear, readable layouts with strong information flow.' },
  { icon: Palette, title: 'Design Systems', desc: 'Use consistent spacing, type, and color tokens.' },
  { icon: Layers3, title: 'Responsive Patterns', desc: 'Adapt elegantly across desktop and mobile breakpoints.' },
  { icon: Rocket, title: 'Motion Thinking', desc: 'Enhance clarity with subtle, purposeful animations.' },
]

export default function Highlights() {
  return (
    <section className="relative py-16 sm:py-20" id="highlights">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Key Highlights</h2>
          <p className="mt-2 text-white/70">What you will practice during the session</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur transition hover:translate-y-[-2px] hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-rose-600 text-white shadow-lg shadow-rose-900/30 ring-1 ring-white/10">
                <Icon size={18} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
