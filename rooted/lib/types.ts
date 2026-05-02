export type Phase = 0 | 1 | 2 | 3;

export type PainPointId = 'inherited' | 'science' | 'bible' | 'jesus' | 'defense';

export interface PainPoint {
  id: PainPointId;
  icon: string;
  label: string;
  desc: string;
  hint: string;
}

export interface GeislerSection {
  head: string;
  body: string;
}

export type SpecialViz = null | 'surge' | '5es' | 'trilemma' | 'attributes';

export interface Point {
  n: number;
  title: string;
  short: string;
  phase: Phase;
  highlight: PainPointId[];
  highlightMsg: string;
  takeaway: string;
  claim: string;
  sg: string;
  specialViz: SpecialViz;
  geisler: GeislerSection[];
  insight: string;
  reflect: string;
  verses: string[];
  scripture: string;
  ref: string;
}

export interface Celebration {
  session: number;
  title: string;
  subtitle: string;
  established: string[];
  nextPreview: string;
  nextSession: string;
}

export interface AppState {
  painPointId: PainPointId | null;
  idx: number;
  completed: number[];
  reflections: Record<number, string>;
  declaration?: string;
}

export type Screen =
  | 'welcome'
  | 'painpoint'
  | 'point'
  | 'celebrate'
  | 'personal-response'
  | 'complete';
