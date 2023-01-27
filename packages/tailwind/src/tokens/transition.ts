import { getTypedEntries } from "~/utils";

export const transitionTokens = {
  emphasized: [0.2, 0, 0, 1],
  "emphasized-accelerate": [0.3, 0, 0.8, 0.15],
  "emphasized-decelerate": [0.05, 0.7, 0.1, 1],
  linear: [0, 0, 1, 1],
  standard: [0.2, 0, 0, 1],
  "standard-accelerate": [0.3, 0, 1, 1],
  "standard-decelerate": [0, 0, 0, 1],
};

export type TransitionVariants = keyof typeof transitionTokens;

type TransitionTokens = Record<TransitionVariants, string>;

export function createTransitionTokens() {
  return getTypedEntries(transitionTokens).reduce((acc, [name, value]) => {
    acc[name] = `cubic-bezier(${value.join(",")})`;
    return acc;
  }, {} as TransitionTokens);
}

export const durationTokens = {
  "extra-long1": 700,
  "extra-long2": 800,
  "extra-long3": 900,
  "extra-long4": 1000,
  long1: 450,
  long2: 500,
  long3: 550,
  long4: 600,
  medium1: 250,
  medium2: 300,
  medium3: 350,
  medium4: 400,
  short1: 50,
  short2: 100,
  short3: 150,
  short4: 200,
};

export type DurationVariants = keyof typeof durationTokens;

type DurationTokens = Record<DurationVariants, string>;

export function createDurationTokens() {
  return getTypedEntries(durationTokens).reduce((acc, [name, value]) => {
    acc[name] = `${value}ms`;
    return acc;
  }, {} as DurationTokens);
}
