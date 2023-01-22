import type { Entries } from "type-fest";

export function getTypedEntries<T extends object>(value: T) {
  return Object.entries(value) as Entries<T>;
}

export function getTypedKeys<T extends object>(value: T) {
  return Object.keys(value) as (keyof T)[];
}
