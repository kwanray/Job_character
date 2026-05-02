'use client';

import { useState } from 'react';
import { PAIN_POINTS } from '@/lib/data';
import { PainPointId } from '@/lib/types';

interface Props {
  onSelect: (id: PainPointId) => void;
}

export default function PainPoint({ onSelect }: Props) {
  const [hovered, setHovered] = useState<PainPointId | null>(null);
  const [selected, setSelected] = useState<PainPointId | null>(null);

  const choose = (id: PainPointId) => {
    setSelected(id);
    setTimeout(() => onSelect(id), 300);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ background: 'var(--bg)' }}
    >
      <div className="w-full max-w-lg">
        <p className="text-xs uppercase tracking-widest mb-4 text-center" style={{ color: '#D4A853' }}>
          Before we begin
        </p>
        <h2
          className="text-3xl sm:text-4xl font-light text-center mb-3"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#F5E6C8' }}
        >
          What brings you here?
        </h2>
        <p className="text-sm text-center mb-10" style={{ color: '#B8A08A' }}>
          Choose the tension you feel most. We&rsquo;ll highlight what&rsquo;s most relevant to you along the way.
        </p>

        <div className="space-y-3">
          {PAIN_POINTS.map((pp) => {
            const isHov = hovered === pp.id;
            const isSel = selected === pp.id;
            return (
              <button
                key={pp.id}
                onClick={() => choose(pp.id)}
                onMouseEnter={() => setHovered(pp.id)}
                onMouseLeave={() => setHovered(null)}
                className="w-full text-left rounded-xl p-4 transition-all duration-200"
                style={{
                  background: isSel ? '#251800' : isHov ? '#161009' : '#161009',
                  border: `1px solid ${isSel ? '#D4A853' : isHov ? '#D4A85355' : '#1A1208'}`,
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{pp.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold" style={{ color: '#F5E6C8' }}>{pp.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#B8A08A' }}>{pp.desc}</p>
                    {isHov && (
                      <p className="text-xs mt-2 italic" style={{ color: '#D4A853' }}>
                        {pp.hint}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
