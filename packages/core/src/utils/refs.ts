type Ref<T extends HTMLElement> = T | ((el: T) => void) | undefined;

export function mergeRefs<T extends HTMLElement>(...refs: Ref<T>[]) {
  return (el: T) => {
    for (let ref of refs) {
      if (!ref) continue;

      if (typeof ref === "function") {
        ref(el);
        continue;
      }

      ref = el;
    }
  };
}

export function mergeWithRefs<T extends HTMLElement, P extends { ref?: T }>(ref: Ref<T>, props: P) {
  return { ...props, ref: mergeRefs<T>(ref, props?.ref) };
}
