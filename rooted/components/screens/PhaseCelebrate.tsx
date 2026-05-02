'use client';

import { Celebration } from '@/lib/types';

const SESSION_ACCENT = ['#D4A853', '#9B72CF', '#CF6060', '#5CCF88'];
const SESSION_DIM    = ['#251800', '#190930', '#2E0808', '#082416'];

interface Props {
  celebration: Celebration;
  onNext: () => void;
}

export default function PhaseCelebrate({ celebration, onNext }: Props) {
  const accent = SESSION_ACCENT[celebration.session] ?? '#D4A853';
  const dim    = SESSION_DIM[celebration.session]    ?? '#251800';

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ background: 'var(--bg)' }}
    >
      <div className="w-full max-w-lg text-center space-y-8">

        {/* Icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto"
          style={{ background: dim, border: `2px solid ${accent}`, boxShadow: `0 0 32px ${accent}44` }}
        >
          ✦
        </div>

        {/* Titles */}
        <div>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>
            {celebration.subtitle}
          </p>
          <h2
            className="text-4xl sm:text-5xl font-light"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#F5E6C8' }}
          >
            {celebration.title}
          </h2>
        </div>

        {/* Established */}
        <div
          className="rounded-xl p-6 text-left space-y-3"
          style={{ background: '#161009', border: `1px solid ${accent}33` }}
        >
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: accent }}>
            You&rsquo;ve established
          </p>
          {celebration.established.map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="shrink-0 text-sm" style={{ color: accent }}>✓</span>
              <p className="text-sm" style={{ color: '#F5E6C8' }}>{item}</p>
            </div>
          ))}
        </div>

        {/* Save notice */}
        <p className="text-sm" style={{ color: '#B8A08A' }}>
          Your progress is saved — you can come back anytime.
        </p>

        {/* Next preview */}
        <div
          className="rounded-xl p-5"
          style={{ background: dim, border: `1px solid ${accent}22` }}
        >
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>
            Coming up
          </p>
          <p className="text-sm" style={{ color: '#F5E6C8' }}>{celebration.nextPreview}</p>
        </div>

        {/* CTA */}
        <button
          onClick={onNext}
          className="w-full py-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
          style={{ background: accent, color: '#0D0A05' }}
        >
          {celebration.nextSession}
        </button>
      </div>
    </div>
  );
}
