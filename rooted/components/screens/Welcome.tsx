'use client';

import { AppState } from '@/lib/types';
import { POINTS } from '@/lib/data';

const PHASE_ACCENT = ['#D4A853', '#9B72CF', '#CF6060', '#5CCF88'];

interface Props {
  saved: AppState | null;
  onStart: () => void;
  onResume: () => void;
}

export default function Welcome({ saved, onStart, onResume }: Props) {
  const hasProgress = saved && saved.completed.length > 0;
  const resumeLabel = hasProgress
    ? `Resume — Point ${(saved!.idx ?? 0) + 1} of 12`
    : null;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center"
      style={{ background: 'var(--bg)' }}
    >
      {/* Decorative stones row */}
      <div className="flex gap-1.5 mb-10">
        {POINTS.map((pt) => (
          <div
            key={pt.n}
            className="w-3 h-3 rounded-sm"
            style={{ background: `${PHASE_ACCENT[pt.phase]}33`, border: `1px solid ${PHASE_ACCENT[pt.phase]}55` }}
          />
        ))}
      </div>

      {/* Wordmark */}
      <h1
        className="text-6xl sm:text-7xl font-light tracking-tight mb-2"
        style={{ fontFamily: 'var(--font-cormorant)', color: '#F5E6C8' }}
      >
        Rooted
      </h1>
      <div className="w-16 h-px mb-6" style={{ background: '#D4A853' }} />
      <p className="text-base mb-2 max-w-xs" style={{ color: '#B8A08A' }}>
        A Faith Foundation Journey for Young Christians
      </p>
      <p
        className="text-sm mb-10 max-w-sm"
        style={{ color: '#B8A08A', opacity: 0.7 }}
      >
        Built on Norman Geisler&rsquo;s Twelve Points &middot; Grounded in Singapore
      </p>

      {/* CTA */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        {hasProgress && (
          <button
            onClick={onResume}
            className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: '#251800', border: '1px solid #D4A853', color: '#D4A853' }}
          >
            {resumeLabel}
          </button>
        )}
        <button
          onClick={onStart}
          className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
          style={{ background: '#D4A853', color: '#0D0A05' }}
        >
          {hasProgress ? 'Start Over' : 'Begin the Journey →'}
        </button>
      </div>

      {/* Bottom tag */}
      <p className="absolute bottom-6 text-xs" style={{ color: '#B8A08A', opacity: 0.4 }}>
        12 points · 4 phases · your pace
      </p>
    </div>
  );
}
