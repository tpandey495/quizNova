import React from 'react'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="8" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
        <line x1="4" y1="6" x2="4" y2="6" />
      </svg>
    ),
    title: 'Easy to Use',
    description:
      'Simple and clean interface. Create full 20-question decks in under 3 minutes with zero training.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Secure & Reliable',
    description:
      'Protected accounts and quiz data with enterprise encryption, anti-cheat randomized answer pools.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'Play with Friends',
    description:
      'Make learning more fun with instant team lobbies, podium reveals, custom sound packs, and badges.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Wide Range of Topics',
    description:
      'From technology to trivia, explore thousands of curated community templates or import custom spreadsheets.',
  },
]

function Footer() {
  return (
    <footer className="w-full">

      {/* ── Features section ── */}
      <div className="px-8 py-16 bg-[#e8e3f5]">
        {/* Heading + subtext — fully centered independently */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-[22px] font-semibold tracking-tight mb-2" style={{ color: '#000' }}>
            Everything you need for effortless quizzes
          </h2>
          <p className="text-sm leading-relaxed text-[#5a5270] max-w-sm">
            Designed from the ground up for smooth classroom presentations, corporate
            icebreakers, and casual tournament games.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: '#fff',
                border: '1.5px solid #c9c1e8',
                boxShadow: '0 2px 8px rgba(100,70,180,0.08)',
              }}
            >
              {/* Icon bubble */}
              <span
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
                style={{ background: '#ddd6f8', color: '#7c3aed' }}
              >
                {icon}
              </span>
              <div>
                <h3 className="text-sm font-semibold mb-1 text-[#0f0a1e]">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-[#5a5270]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs"
        style={{
          background: '#fff',
          borderTop: '1.5px solid #c9c1e8',
          color: '#5a5270',
        }}
      >
        {/* Left: logo + copyright */}
        <div className="flex items-center gap-2">
          <img src="/favicon.svg" alt="QuizNova Logo" className="w-5 h-5" />
          <span className="font-semibold text-[13px] text-[#0f0a1e]">QuizNova</span>
          <span>© 2026 QuizNova Inc. All rights reserved.</span>
        </div>

        {/* Center: nav links */}
        <nav aria-label="Footer navigation" className="flex items-center gap-5">
          <a href="/privacy"  className="text-[#7c3aed] hover:underline transition-colors">Privacy Policy</a>
          <a href="/terms"    className="text-[#7c3aed] hover:underline transition-colors">Terms of Service</a>
          <a href="/contact"  className="text-[#5a5270] hover:text-[#7c3aed] transition-colors">Contact</a>
        </nav>

        {/* Right: icon buttons */}
        <div className="flex items-center gap-1.5">

          {/* Globe */}
          <button
            type="button"
            aria-label="Language settings"
            className="w-7 h-7 flex items-center justify-center rounded-md transition-colors"
            style={{ border: '1.5px solid #c9c1e8', color: '#5a5270' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.color = '#7c3aed' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#c9c1e8'; e.currentTarget.style.color = '#5a5270' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>

          {/* Chat */}
          <button
            type="button"
            aria-label="Feedback"
            className="w-7 h-7 flex items-center justify-center rounded-md transition-colors"
            style={{ border: '1.5px solid #c9c1e8', color: '#5a5270' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.color = '#7c3aed' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#c9c1e8'; e.currentTarget.style.color = '#5a5270' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          {/* Code */}
          <button
            type="button"
            aria-label="View source"
            className="w-7 h-7 flex items-center justify-center rounded-md transition-colors"
            style={{ border: '1.5px solid #c9c1e8', color: '#5a5270' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.color = '#7c3aed' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#c9c1e8'; e.currentTarget.style.color = '#5a5270' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </button>

        </div>
      </div>
    </footer>
  )
}

export default Footer
