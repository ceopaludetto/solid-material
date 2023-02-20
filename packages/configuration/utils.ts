export function buildExternal(pkg: Record<string, any>, keep: string[]) {
  return [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)].filter((item) => !keep.includes(item));
}
