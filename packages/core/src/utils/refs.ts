type Ref<T extends HTMLElement> = T | ((el: T) => void) | undefined;

function hasRef<P extends object>(props: P): props is P & { ref: Ref<any> } {
  return "ref" in props;
}

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

export function mergeWithRefs<T extends HTMLElement, P extends object>(ref: Ref<T>, props: P) {
  if (hasRef(props)) {
    return { ...props, ref: mergeRefs<T>(ref, props?.ref) };
  }

  return { ...props, ref: mergeRefs<T>(ref) };
}
