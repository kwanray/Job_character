'use client';

import { POINTS } from '@/lib/data';

const PHASE_ACCENT = ['#D4A853', '#9B72CF', '#CF6060', '#5CCF88'];
const PHASE_DIM    = ['#251800',  '#190930', '#2E0808', '#082416'];

interface Props {
  completed: number[];
  current: number;
}

export default function FoundationBar({ completed, current }: Props) {
  return (
    <div className="w-full flex gap-1 px-4 py-3">
      {POINTS.map((pt, i) => {
        const accent = PHASE_ACCENT[pt.phase];
        const dim    = PHASE_DIM[pt.phase];
        const done   = completed.includes(i);
        const active = i === current;

        let bg     = '#0D0A05';
        let border = '#1A1208';
        let shadow = '';

        if (done) {
          bg     = accent;
          border = accent;
        } else if (active) {
          bg     = dim;
          border = accent;
          shadow = `0 0 8px ${accent}66`;
        }

        return (
          <div
            key={pt.n}
            title={pt.short}
            className="flex-1 h-6 rounded-sm flex items-center justify-center text-[9px] font-bold transition-all duration-300"
            style={{
              background: bg,
              border: `1px solid ${border}`,
              boxShadow: shadow,
              color: done ? '#0D0A05' : active ? accent : '#B8A08A',
            }}
          >
            {done ? '✓' : active ? pt.n : ''}
          </div>
        );
      })}
    </div>
  );
}
