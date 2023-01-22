import type { KebabCase } from "type-fest";

import kebab from "kebab-case";

export function kebabCase<T extends string>(value: T) {
  return kebab(value) as KebabCase<T>;
}
