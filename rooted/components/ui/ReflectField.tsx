'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  pointIdx: number;
  prompt: string;
  accent: string;
  value: string;
  onChange: (val: string) => void;
}

export default function ReflectField({ pointIdx, prompt, accent, value, onChange }: Props) {
  const [saved, setSaved] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
    setSaved(false);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setSaved(true), 800);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-widest" style={{ color: accent }}>
          Reflect
        </p>
        {saved && value && (
          <span className="text-xs" style={{ color: '#5CCF88' }}>
            ✓ Saved
          </span>
        )}
      </div>
      <p className="text-sm" style={{ color: '#B8A08A' }}>{prompt}</p>
      <textarea
        rows={4}
        placeholder="Write your thoughts here…"
        value={value}
        onChange={handleChange}
        key={pointIdx}
      />
    </div>
  );
}
