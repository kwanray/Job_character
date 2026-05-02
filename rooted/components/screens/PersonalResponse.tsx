'use client';

import { useState } from 'react';

interface Props {
  declaration: string;
  onDeclare: (text: string) => void;
  onComplete: () => void;
}

const PRAYER = `Lord, I've traced the evidence. From truth to logic, from logic to Your existence, from Your creation to Your entry into it, from Your resurrection to Your authority, from Your authority to Your Word — I've followed the chain and I believe it holds.\n\nI choose now to trust not just the argument, but the Person the argument leads to. I confess Jesus as Lord. Root me in this foundation.\n\nAmen.`;

export default function PersonalResponse({ declaration, onDeclare, onComplete }: Props) {
  const [path, setPath] = useState<'believe' | 'working' | null>(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer]     = useState('');
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [decText, setDecText]   = useState(declaration);
  const [saved, setSaved]       = useState(false);

  const askGrok = async () => {
    if (!question.trim()) return;
    setLoading(true); setError(''); setAnswer('');
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pointN: 12, pointTitle: 'The Conclusion — Your Response', question }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setAnswer(data.answer);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Error');
    } finally {
      setLoading(false);
    }
  };

  const saveDec = () => {
    onDeclare(decText);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ background: 'var(--bg)' }}
    >
      <div className="w-full max-w-lg space-y-8">

        <div className="text-center">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#5CCF88' }}>
            Twelve Points Complete
          </p>
          <h2
            className="text-4xl sm:text-5xl font-light mb-3"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#F5E6C8' }}
          >
            Where are you now?
          </h2>
          <p className="text-sm" style={{ color: '#B8A08A' }}>
            You&rsquo;ve worked through the full chain of reasoning. This is your moment to respond.
          </p>
        </div>

        {/* Path choice */}
        {!path && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setPath('believe')}
              className="rounded-xl p-6 text-left transition-all hover:opacity-90"
              style={{ background: '#082416', border: '1px solid #5CCF8844' }}
            >
              <p className="text-2xl mb-3" style={{ fontFamily: 'var(--font-cormorant)' }}>✝</p>
              <p className="font-semibold mb-1" style={{ color: '#5CCF88' }}>I believe</p>
              <p className="text-xs" style={{ color: '#B8A08A' }}>
                I&rsquo;m ready to declare my faith — I want to respond to what I&rsquo;ve learned.
              </p>
            </button>
            <button
              onClick={() => setPath('working')}
              className="rounded-xl p-6 text-left transition-all hover:opacity-90"
              style={{ background: '#161009', border: '1px solid #1A1208' }}
            >
              <p className="text-2xl mb-3">🔍</p>
              <p className="font-semibold mb-1" style={{ color: '#D4A853' }}>Still working through it</p>
              <p className="text-xs" style={{ color: '#B8A08A' }}>
                I have remaining questions — I&rsquo;d like to explore them before deciding.
              </p>
            </button>
          </div>
        )}

        {/* Path A — I believe */}
        {path === 'believe' && (
          <div className="space-y-6">
            <div
              className="rounded-xl p-6"
              style={{ background: '#082416', border: '1px solid #5CCF8833' }}
            >
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#5CCF88' }}>
                A Prayer of Commitment
              </p>
              <p
                className="text-base leading-relaxed whitespace-pre-line"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#F5E6C8' }}
              >
                {PRAYER}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest" style={{ color: '#5CCF88' }}>
                Your Declaration (Optional)
              </p>
              <p className="text-sm" style={{ color: '#B8A08A' }}>
                Write your own declaration of faith — in your own words.
              </p>
              <textarea
                rows={4}
                placeholder="In my own words, I believe…"
                value={decText}
                onChange={(e) => setDecText(e.target.value)}
              />
              <button
                onClick={saveDec}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                style={{ background: saved ? '#5CCF88' : 'transparent', border: '1px solid #5CCF88', color: saved ? '#0D0A05' : '#5CCF88' }}
              >
                {saved ? '✓ Saved' : 'Save Declaration'}
              </button>
            </div>

            <button
              onClick={onComplete}
              className="w-full py-4 rounded-xl font-semibold text-sm"
              style={{ background: '#5CCF88', color: '#0D0A05' }}
            >
              Complete the Journey →
            </button>
          </div>
        )}

        {/* Path B — Still working */}
        {path === 'working' && (
          <div className="space-y-5">
            <p className="text-sm" style={{ color: '#B8A08A' }}>
              That&rsquo;s honest — and honesty is where real faith begins. Ask Grok anything that&rsquo;s still standing in the way.
            </p>
            <textarea
              rows={3}
              placeholder="What's your remaining question?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              onClick={askGrok}
              disabled={loading || !question.trim()}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-40"
              style={{ background: '#D4A853', color: '#0D0A05' }}
            >
              {loading ? 'Thinking…' : 'Ask Grok →'}
            </button>
            {error && <p className="text-sm" style={{ color: '#CF6060' }}>{error}</p>}
            {answer && (
              <div
                className="rounded-xl p-5 text-sm leading-relaxed"
                style={{ background: '#161009', border: '1px solid #D4A85333' }}
              >
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#D4A853' }}>Grok says</p>
                <p style={{ color: '#F5E6C8' }}>{answer}</p>
              </div>
            )}
            <button
              onClick={onComplete}
              className="w-full py-4 rounded-xl font-semibold text-sm"
              style={{ background: '#161009', border: '1px solid #1A1208', color: '#B8A08A' }}
            >
              Continue to Summary →
            </button>
          </div>
        )}

        {/* Back link */}
        {path && (
          <button
            onClick={() => setPath(null)}
            className="text-xs underline"
            style={{ color: '#B8A08A' }}
          >
            ← Change my answer
          </button>
        )}
      </div>
    </div>
  );
}
