import React from 'react'

const resources = [
  { name: 'Event Poster (PDF)', href: '#' },
  { name: 'Brief & Requirements', href: '#' },
  { name: 'Speaker Slides', href: '#' },
]

export default function Resources() {
  return (
    <section id="resources" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Related Resources</h2>
            <p className="mt-2 text-white/70">Downloads and helpful links</p>
          </div>
        </div>
        <div className="grid gap-3">
          {resources.map((r) => (
            <a key={r.name} href={r.href} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90 hover:bg-white/10">
              {r.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
