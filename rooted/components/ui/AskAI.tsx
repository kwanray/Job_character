'use client';

import { useState } from 'react';

interface Props {
  pointN: number;
  pointTitle: string;
  accent: string;
}

export default function AskAI({ pointN, pointTitle, accent }: Props) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer]     = useState('');
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  const ask = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setError('');
    setAnswer('');

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pointN, pointTitle, question }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      setAnswer(data.answer);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-widest" style={{ color: accent }}>
        Ask a Question
      </p>
      <p className="text-sm" style={{ color: '#B8A08A' }}>
        Got a question about this point? Ask Grok — your AI apologetics guide.
      </p>
      <textarea
        rows={2}
        placeholder="e.g. How do I explain this to a Buddhist friend?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.metaKey) ask();
        }}
      />
      <button
        onClick={ask}
        disabled={loading || !question.trim()}
        className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-40"
        style={{
          background: accent,
          color: '#0D0A05',
        }}
      >
        {loading ? 'Thinking…' : 'Ask Grok ↵'}
      </button>

      {error && (
        <div
          className="rounded-lg p-4 text-sm"
          style={{ background: '#2E0808', color: '#CF6060', border: '1px solid #CF606044' }}
        >
          {error}
        </div>
      )}

      {answer && (
        <div
          className="rounded-xl p-5 text-sm leading-relaxed space-y-2"
          style={{ background: '#161009', border: `1px solid ${accent}33` }}
        >
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: accent }}>
            Grok says
          </p>
          <p style={{ color: '#F5E6C8' }}>{answer}</p>
          <button
            onClick={() => { setQuestion(''); setAnswer(''); }}
            className="text-xs mt-3 underline"
            style={{ color: '#B8A08A' }}
          >
            Ask another question
          </button>
        </div>
      )}
    </div>
  );
}
