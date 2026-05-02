'use client';

import { useState } from 'react';
import { Point, PainPointId } from '@/lib/types';
import FoundationBar from '@/components/ui/FoundationBar';
import VisualBlocks from '@/components/ui/VisualBlocks';
import TakeawayCard from '@/components/ui/TakeawayCard';
import ReflectField from '@/components/ui/ReflectField';
import AskAI from '@/components/ui/AskAI';

const PHASE_LABEL  = ['Knowledge', 'Existence', 'Identity', 'Authority'];
const PHASE_ACCENT = ['#D4A853', '#9B72CF', '#CF6060', '#5CCF88'];
const PHASE_DIM    = ['#251800', '#190930', '#2E0808', '#082416'];

interface Props {
  point: Point;
  pointIdx: number;
  completed: number[];
  painPointId: PainPointId | null;
  reflection: string;
  onReflect: (val: string) => void;
  onBack: () => void;
  onComplete: () => void;
}

export default function PointView({
  point, pointIdx, completed, painPointId, reflection, onReflect, onBack, onComplete,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const accent = PHASE_ACCENT[point.phase];
  const dim    = PHASE_DIM[point.phase];
  const isHighlighted = painPointId && point.highlight.includes(painPointId);
  const isDone = completed.includes(pointIdx);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Foundation bar */}
      <div className="sticky top-0 z-10" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <FoundationBar completed={completed} current={pointIdx} />
      </div>

      <div className="max-w-2xl mx-auto px-5 py-8 space-y-8">

        {/* Phase pill + counter */}
        <div className="flex items-center gap-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{ background: dim, color: accent, border: `1px solid ${accent}44` }}
          >
            {PHASE_LABEL[point.phase]}
          </span>
          <span className="text-xs" style={{ color: '#B8A08A' }}>Point {point.n} of 12</span>
        </div>

        {/* Highlight banner */}
        {isHighlighted && (
          <div
            className="rounded-xl px-5 py-4 text-sm"
            style={{ background: '#251800', border: '1px solid #D4A85366', color: '#D4A853' }}
          >
            ✦ {point.highlightMsg}
          </div>
        )}

        {/* Title */}
        <div>
          <h2
            className="text-3xl sm:text-4xl font-light leading-tight mb-3"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#F5E6C8' }}
          >
            {point.title}
          </h2>
          <div
            className="h-0.5 w-24 rounded-full"
            style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
          />
        </div>

        {/* Claim */}
        <div
          className="rounded-xl p-5"
          style={{ background: '#161009', borderLeft: `3px solid ${accent}` }}
        >
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>
            Geisler&rsquo;s Claim
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#F5E6C8' }}>
            {point.claim}
          </p>
        </div>

        {/* Singapore context */}
        <div
          className="rounded-xl p-5"
          style={{ background: '#161009', border: '1px solid #1A1208' }}
        >
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#B8A08A' }}>
            Your Context
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#B8A08A' }}>
            {point.sg}
          </p>
        </div>

        {/* Special visual */}
        {point.specialViz && (
          <VisualBlocks type={point.specialViz} accent={accent} />
        )}

        {/* Expandable arguments */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid #1A1208' }}
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
            style={{ background: '#161009' }}
          >
            <span className="text-sm font-semibold" style={{ color: '#F5E6C8' }}>
              Study Geisler&rsquo;s Arguments
            </span>
            <span style={{ color: accent }}>{expanded ? '−' : '+'}</span>
          </button>
          {expanded && (
            <div className="px-5 pb-5 space-y-5" style={{ background: '#161009' }}>
              {point.geisler.map((section, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold mb-1" style={{ color: accent }}>
                    {section.head}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#B8A08A' }}>
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Key Insight */}
        <div
          className="rounded-xl p-5"
          style={{
            background: `linear-gradient(135deg, ${dim} 0%, #161009 100%)`,
            border: `1px solid ${accent}33`,
          }}
        >
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>
            Key Insight
          </p>
          <p
            className="text-lg leading-snug"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#F5E6C8' }}
          >
            {point.insight}
          </p>
        </div>

        {/* Takeaway */}
        <TakeawayCard text={point.takeaway} accent={accent} />

        {/* Reflect */}
        <ReflectField
          pointIdx={pointIdx}
          prompt={point.reflect}
          accent={accent}
          value={reflection}
          onChange={onReflect}
        />

        {/* Ask AI */}
        <AskAI pointN={point.n} pointTitle={point.title} accent={accent} />

        {/* Scripture */}
        <div className="text-center py-6 space-y-2">
          <p
            className="text-xl leading-snug"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#F5E6C8', fontStyle: 'italic' }}
          >
            {point.scripture}
          </p>
          <p className="text-xs" style={{ color: '#B8A08A' }}>
            {point.verses.join(' · ')}
          </p>
        </div>

        {/* Nav */}
        <div className="flex gap-3 pb-8">
          <button
            onClick={onBack}
            className="flex-1 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
            style={{ background: '#161009', border: '1px solid #1A1208', color: '#B8A08A' }}
          >
            ← Back
          </button>
          <button
            onClick={onComplete}
            className="flex-[3] py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: isDone ? '#161009' : accent, color: isDone ? accent : '#0D0A05', border: isDone ? `1px solid ${accent}` : 'none' }}
          >
            {isDone ? '✓ Continue →' : 'Mark as Read & Continue →'}
          </button>
        </div>
      </div>
    </div>
  );
}
