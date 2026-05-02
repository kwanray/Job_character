'use client';

import { useEffect, useState } from 'react';
import { AppState, PainPointId, Screen } from '@/lib/types';
import { POINTS, SESSION_BREAK_AFTER, CELEBRATIONS } from '@/lib/data';
import { loadState, saveState, clearState, defaultState } from '@/lib/storage';

import Welcome         from '@/components/screens/Welcome';
import PainPoint       from '@/components/screens/PainPoint';
import PointView       from '@/components/screens/PointView';
import PhaseCelebrate  from '@/components/screens/PhaseCelebrate';
import PersonalResponse from '@/components/screens/PersonalResponse';
import Complete        from '@/components/screens/Complete';

export default function RootedApp() {
  const [screen, setScreen]   = useState<Screen>('welcome');
  const [state, setState]     = useState<AppState>(defaultState());
  const [savedState, setSavedState] = useState<AppState | null>(null);
  const [celebrationIdx, setCelebrationIdx] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const s = loadState();
    setSavedState(s);
    setMounted(true);
  }, []);

  const persist = (next: AppState) => {
    setState(next);
    saveState(next);
  };

  const handleStart = () => {
    clearState();
    setState(defaultState());
    setScreen('painpoint');
  };

  const handleResume = () => {
    if (savedState) {
      setState(savedState);
      setScreen('point');
    }
  };

  const handlePainPoint = (id: PainPointId) => {
    const next = { ...state, painPointId: id, idx: 0 };
    persist(next);
    setScreen('point');
  };

  const handleBack = () => {
    if (state.idx === 0) {
      setScreen('painpoint');
    } else {
      persist({ ...state, idx: state.idx - 1 });
    }
  };

  const handlePointComplete = () => {
    const idx = state.idx;
    const alreadyDone = state.completed.includes(idx);
    const completed = alreadyDone
      ? state.completed
      : [...state.completed, idx];

    const next: AppState = { ...state, completed };
    persist(next);

    // Check if this is a session break
    if (SESSION_BREAK_AFTER.includes(idx)) {
      const celebIdx = SESSION_BREAK_AFTER.indexOf(idx);
      setCelebrationIdx(celebIdx);
      setScreen('celebrate');
      return;
    }

    // Advance to next point or personal-response
    if (idx >= POINTS.length - 1) {
      setScreen('personal-response');
    } else {
      persist({ ...next, idx: idx + 1 });
    }
  };

  const handleCelebrationNext = () => {
    const breakIdx = SESSION_BREAK_AFTER[celebrationIdx];
    const nextIdx  = breakIdx + 1;
    if (nextIdx >= POINTS.length) {
      setScreen('personal-response');
    } else {
      persist({ ...state, idx: nextIdx });
      setScreen('point');
    }
  };

  const handleDeclare = (text: string) => {
    const next = { ...state, declaration: text };
    persist(next);
  };

  const handleComplete = () => setScreen('complete');

  const handleReset = () => {
    clearState();
    setState(defaultState());
    setSavedState(null);
    setScreen('welcome');
  };

  const handleReflect = (val: string) => {
    const reflections = { ...state.reflections, [state.idx]: val };
    persist({ ...state, reflections });
  };

  if (!mounted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: 'var(--bg)' }}
      >
        <div className="w-4 h-4 rounded-full animate-pulse" style={{ background: '#D4A853' }} />
      </div>
    );
  }

  if (screen === 'welcome') {
    return <Welcome saved={savedState} onStart={handleStart} onResume={handleResume} />;
  }

  if (screen === 'painpoint') {
    return <PainPoint onSelect={handlePainPoint} />;
  }

  if (screen === 'point') {
    const point = POINTS[state.idx];
    return (
      <PointView
        point={point}
        pointIdx={state.idx}
        completed={state.completed}
        painPointId={state.painPointId}
        reflection={state.reflections[state.idx] ?? ''}
        onReflect={handleReflect}
        onBack={handleBack}
        onComplete={handlePointComplete}
      />
    );
  }

  if (screen === 'celebrate') {
    return (
      <PhaseCelebrate
        celebration={CELEBRATIONS[celebrationIdx]}
        onNext={handleCelebrationNext}
      />
    );
  }

  if (screen === 'personal-response') {
    return (
      <PersonalResponse
        declaration={state.declaration ?? ''}
        onDeclare={handleDeclare}
        onComplete={handleComplete}
      />
    );
  }

  if (screen === 'complete') {
    return <Complete completed={state.completed} onReset={handleReset} />;
  }

  return null;
}
