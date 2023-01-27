function isPointerEvent(event: any): event is PointerEvent {
  return "pointerType" in event;
}

export function isKeyboardEvent(event: any): event is KeyboardEvent {
  return "key" in event;
}

export function getClientPosition(event: KeyboardEvent | PointerEvent) {
  if (isPointerEvent(event)) {
    return { clientX: event.clientX, clientY: event.clientY };
  }

  return { clientX: 0, clientY: 0 };
}

export function filterKeyboardEvent(event: any, keys = ["Enter", " "]) {
  if (isKeyboardEvent(event) && !keys.includes(event.key)) {
    return null;
  }

  return event;
}

export function filterMouseEvent(event: any) {
  if (isPointerEvent(event) && event.button !== 0) {
    return null;
  }

  return event;
}

export function applyClasses<T extends HTMLElement>(classes: string, target: T): T {
  if (!target) return target;

  classes
    .split(" ")
    .filter((item) => !target.classList.contains(item))
    .forEach((item) => target.classList.add(item));

  return target;
}

export function applyStyles<T extends HTMLElement>(styles: Record<string, string>, target: T): T {
  if (!target) return target;

  Object.entries(styles).forEach(([property, value]) => {
    target.style.setProperty(property, value);
  });

  return target;
}

export function isTouchDevice(): boolean {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || ((navigator as any)?.msMaxTouchPoints ?? false);
}
