import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">About the Session</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              This assessment challenges you to build two distinct versions of the same homepage while preserving information architecture. You will show mastery of typography, layout rhythm, and interaction emphasis, producing designs that communicate clearly and feel alive.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
              <ul className="space-y-3 text-sm text-white/80">
                <li>• Desktop 1440×1024 and Mobile 375×812 canvases</li>
                <li>• Same content, different tones: institutional vs promotional</li>
                <li>• Deliver PDF and editable Figma file</li>
                <li>• Focus on hierarchy, responsiveness, and motion cues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
