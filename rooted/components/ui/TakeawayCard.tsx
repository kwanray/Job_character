'use client';

import { useState } from 'react';

interface Props {
  text: string;
  accent: string;
}

export default function TakeawayCard({ text, accent }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="rounded-xl p-5 flex items-start gap-4"
      style={{ background: '#161009', border: `1px solid ${accent}44` }}
    >
      <div className="flex-1">
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>
          One Line to Remember
        </p>
        <p
          className="text-lg leading-snug"
          style={{ fontFamily: 'var(--font-cormorant)', color: '#F5E6C8' }}
        >
          &ldquo;{text}&rdquo;
        </p>
      </div>
      <button
        onClick={copy}
        className="shrink-0 mt-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
        style={{
          background: copied ? accent : 'transparent',
          border: `1px solid ${accent}`,
          color: copied ? '#0D0A05' : accent,
        }}
      >
        {copied ? '✓ Copied' : 'Copy'}
      </button>
    </div>
  );
}
