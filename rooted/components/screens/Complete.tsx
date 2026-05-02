'use client';

import { POINTS } from '@/lib/data';

const PHASE_ACCENT = ['#D4A853', '#9B72CF', '#CF6060', '#5CCF88'];
const PHASE_DIM    = ['#251800', '#190930', '#2E0808', '#082416'];

const NEXT_STEPS = [
  { icon: '📖', title: 'Read the Gospel of John', body: 'Start with the disciple who knew Jesus closest. One chapter a day.' },
  { icon: '⛪', title: 'Find a local church', body: 'Faith grows in community. Look for a church that teaches Scripture seriously.' },
  { icon: '📚', title: 'Read Mere Christianity by C.S. Lewis', body: 'The most readable case for Christian faith ever written.' },
  { icon: '🗣️', title: 'Share one point with someone', body: 'Teaching consolidates learning. Pick the point that hit hardest and explain it.' },
  { icon: '🙏', title: 'Begin a daily practice', body: 'Even five minutes of prayer and Scripture builds the foundation over time.' },
];

interface Props {
  completed: number[];
  onReset: () => void;
}

export default function Complete({ completed, onReset }: Props) {
  return (
    <div
      className="min-h-screen px-6 py-16"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-lg mx-auto space-y-10">

        {/* Header */}
        <div className="text-center space-y-4">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-4xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, #251800, #082416)',
              border: '2px solid #5CCF88',
              boxShadow: '0 0 40px #5CCF8844',
            }}
          >
            ✦
          </div>
          <h2
            className="text-5xl sm:text-6xl font-light"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#F5E6C8' }}
          >
            Rooted
          </h2>
          <p className="text-base" style={{ color: '#B8A08A' }}>
            You&rsquo;ve laid the foundation. Twelve stones in place.
          </p>
        </div>

        {/* All 12 chips */}
        <div>
          <p className="text-xs uppercase tracking-widest mb-4 text-center" style={{ color: '#B8A08A' }}>
            Your Foundation
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {POINTS.map((pt, i) => {
              const accent = PHASE_ACCENT[pt.phase];
              const dim    = PHASE_DIM[pt.phase];
              const done   = completed.includes(i);
              return (
                <span
                  key={pt.n}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: done ? dim : '#161009',
                    border: `1px solid ${done ? accent : '#1A1208'}`,
                    color: done ? accent : '#B8A08A',
                  }}
                >
                  {done ? '✓ ' : ''}{pt.short}
                </span>
              );
            })}
          </div>
        </div>

        {/* What's next */}
        <div>
          <p className="text-xs uppercase tracking-widest mb-5 text-center" style={{ color: '#5CCF88' }}>
            What&rsquo;s Next
          </p>
          <div className="space-y-3">
            {NEXT_STEPS.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl p-4"
                style={{ background: '#161009', border: '1px solid #1A1208' }}
              >
                <span className="text-2xl shrink-0">{step.icon}</span>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: '#F5E6C8' }}>{step.title}</p>
                  <p className="text-xs" style={{ color: '#B8A08A' }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reset */}
        <div className="text-center pb-8">
          <button
            onClick={onReset}
            className="px-8 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: '#161009', border: '1px solid #1A1208', color: '#B8A08A' }}
          >
            Go Through Again →
          </button>
          <p className="text-xs mt-3" style={{ color: '#B8A08A', opacity: 0.5 }}>
            This will reset your progress
          </p>
        </div>
      </div>
    </div>
  );
}
