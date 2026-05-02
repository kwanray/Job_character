'use client';

const SURGE_ROWS = [
  { letter: 'S', label: 'Something exists',          body: 'I exist. You exist. The universe exists. Something is undeniably real.' },
  { letter: 'U', label: 'Universe began',             body: 'Big Bang cosmology confirms the universe had a definite beginning — it is not eternal.' },
  { letter: 'R', label: 'Rules of nature are fine-tuned', body: 'Physical constants are calibrated to 1 in 10^123 precision. This demands explanation.' },
  { letter: 'G', label: 'God is the best explanation', body: 'A personal, powerful, transcendent Creator is the most coherent explanation for all three.' },
  { letter: 'E', label: 'Evil points to a standard', body: 'Our outrage at evil presupposes an objective moral standard — which requires a moral Lawgiver.' },
];

const FIVE_ES_ROWS = [
  { letter: 'E', label: 'Enemies attest',   body: 'Roman and Jewish sources confirm Jesus existed and was executed — even hostile witnesses never denied the empty tomb.' },
  { letter: 'E', label: 'Empty tomb',        body: 'Jerusalem authorities could not produce a body. If the body existed, the movement would have died in its birthplace.' },
  { letter: 'E', label: 'Eyewitness reports', body: '500+ people claimed to see Jesus alive. Paul names many still living — an open invitation to verify.' },
  { letter: 'E', label: 'Early creeds',      body: '1 Corinthians 15:3–7 is a creed scholars date to within 2–5 years of the crucifixion — far too early for legend.' },
  { letter: 'E', label: 'Explosive growth',  body: 'Christianity spread fastest in Jerusalem — ground zero — where evidence was freshest and refutation easiest.' },
];

const TRILEMMA = [
  {
    label: 'Liar',
    color: '#CF6060',
    dim:   '#2E0808',
    body:  'Jesus knew His claims were false — yet let people worship Him, die for Him, and forsake everything. A calculated fraud who taught the highest ethics in history?',
    verdict: 'Implausible',
  },
  {
    label: 'Lunatic',
    color: '#9B72CF',
    dim:   '#190930',
    body:  'Jesus was sincerely deluded — He thought He was God but wasn\'t. Yet His clarity, composure under trial, and depth of teaching are incompatible with psychosis.',
    verdict: 'Implausible',
  },
  {
    label: 'Lord',
    color: '#5CCF88',
    dim:   '#082416',
    body:  'Jesus is exactly who He claimed to be. The resurrection confirms it. God authenticated His identity by raising Him from the dead.',
    verdict: 'The evidence points here',
  },
];

const ATTRIBUTES = [
  { label: 'Self-Existent',    body: 'Not caused by anything outside Himself. The uncaused First Cause.' },
  { label: 'Eternal',          body: 'Outside time — neither began nor will end. The Creator of time itself.' },
  { label: 'Immutable',        body: 'Does not change. His character and purposes are perfectly consistent.' },
  { label: 'Omnipotent',       body: 'All-powerful. Created everything from nothing; sustains it by His word.' },
  { label: 'Omniscient',       body: 'All-knowing. No fact, thought, or possibility is hidden from Him.' },
  { label: 'Omnipresent',      body: 'Fully present everywhere simultaneously — not distributed but whole.' },
  { label: 'Perfectly Good',   body: 'The objective standard of moral goodness. Not good by external standard but the ground of goodness itself.' },
];

interface Props {
  type: 'surge' | '5es' | 'trilemma' | 'attributes';
  accent: string;
}

export default function VisualBlocks({ type, accent }: Props) {
  if (type === 'surge') {
    return (
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: accent }}>
          The SURGE Argument for God
        </p>
        {SURGE_ROWS.map((row) => (
          <div
            key={row.letter}
            className="flex gap-3 rounded-lg p-3"
            style={{ background: '#161009', border: '1px solid #1A1208' }}
          >
            <div
              className="w-8 h-8 shrink-0 rounded flex items-center justify-center font-bold text-sm"
              style={{ background: accent, color: '#0D0A05' }}
            >
              {row.letter}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#F5E6C8' }}>{row.label}</p>
              <p className="text-xs mt-0.5" style={{ color: '#B8A08A' }}>{row.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === '5es') {
    return (
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: accent }}>
          The 5 E&rsquo;s of the Resurrection
        </p>
        {FIVE_ES_ROWS.map((row, i) => (
          <div
            key={i}
            className="flex gap-3 rounded-lg p-3"
            style={{ background: '#161009', border: '1px solid #1A1208' }}
          >
            <div
              className="w-8 h-8 shrink-0 rounded flex items-center justify-center font-bold text-sm"
              style={{ background: accent, color: '#0D0A05' }}
            >
              {row.letter}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#F5E6C8' }}>{row.label}</p>
              <p className="text-xs mt-0.5" style={{ color: '#B8A08A' }}>{row.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'trilemma') {
    return (
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: accent }}>
          The Trilemma — C.S. Lewis
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TRILEMMA.map((card) => (
            <div
              key={card.label}
              className="rounded-xl p-4 flex flex-col gap-2"
              style={{ background: card.dim, border: `1px solid ${card.color}44` }}
            >
              <p className="text-base font-bold" style={{ color: card.color }}>{card.label}</p>
              <p className="text-xs leading-relaxed flex-1" style={{ color: '#B8A08A' }}>{card.body}</p>
              <p className="text-xs font-semibold mt-auto" style={{ color: card.color }}>{card.verdict}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'attributes') {
    return (
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: accent }}>
          Seven Attributes of the Biblical God
        </p>
        {ATTRIBUTES.map((attr) => (
          <div
            key={attr.label}
            className="flex gap-3 items-start rounded-lg p-3"
            style={{ background: '#161009', border: '1px solid #1A1208' }}
          >
            <div
              className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center text-[10px] mt-0.5"
              style={{ background: accent, color: '#0D0A05' }}
            >
              ✓
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#F5E6C8' }}>{attr.label}</p>
              <p className="text-xs mt-0.5" style={{ color: '#B8A08A' }}>{attr.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
