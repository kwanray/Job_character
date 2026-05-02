import { AppState } from './types';

const KEY = 'rooted-v3';

export const defaultState = (): AppState => ({
  painPointId: null,
  idx: 0,
  completed: [],
  reflections: {},
  declaration: undefined,
});

export function loadState(): AppState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AppState;
  } catch {
    return null;
  }
}

export function saveState(state: AppState): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function clearState(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(KEY);
}
