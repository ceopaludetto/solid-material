import { ripple } from "./styles";
import { applyClasses, applyStyles, getClientPosition } from "~/utils/dom";

const self = () => document;

export const completedFactor = 0.4;
export const duration = 800;
export const timingFunction = "cubic-bezier(0.2, 0, 0, 1)";

type CreateRippleOptions = {
  name: string;
  size?: number;
  fromKeyboard?: boolean;
};

export function createRipple<T extends HTMLElement>(
  { name, size, fromKeyboard }: CreateRippleOptions,
  ref: T,
  event: KeyboardEvent | PointerEvent,
): HTMLDivElement {
  const element = self().createElement("div");

  const { clientX, clientY } = getClientPosition(event);
  const { height, width, top, left } = ref.getBoundingClientRect();

  const maxHeight = fromKeyboard ? height / 2 : Math.max(clientY - top, height - clientY + top);
  const maxWidth = fromKeyboard ? width / 2 : Math.max(clientX - left, width - clientX + left);

  const currentSize = size ? `${size}px` : `${Math.hypot(maxHeight, maxWidth) * 2}px`;

  const classes = ripple({ class: name });

  const styles = {
    height: currentSize,
    width: currentSize,
    transition: `transform ${duration * 0.6}ms ${timingFunction}, opacity ${Math.max(duration * 0.05, 140)}ms ease-out`,
  };

  requestAnimationFrame(() => {
    applyClasses("scale-100", element);
  });

  applyStyles(styles, element);
  return applyClasses(classes, element);
}

export function cancelRippleAnimation<T extends HTMLElement>(element: T) {
  const styles = {
    transition: `transform ${duration * 0.6}ms ${timingFunction}, opacity ${duration * 0.65}ms ease-in-out ${
      duration * 0.13
    }ms`,
  };

  applyClasses("opacity-0", element);
  applyStyles(styles, element);

  requestAnimationFrame(() => {
    element.addEventListener("transitionend", (e) => {
      if (e.propertyName === "opacity") element.remove();
    });
  });
}

type CenterElementToPointerOptions<T extends HTMLElement> = {
  event: KeyboardEvent | PointerEvent;
  target: HTMLElement;
  element: T;
  center?: boolean;
};

export function centerElementToPointer<T extends HTMLElement>({
  target,
  event,
  element,
  center = false,
}: CenterElementToPointerOptions<T>): T {
  if (center) {
    element.style.setProperty("top", "50%");
    element.style.setProperty("left", "50%");

    return element;
  }

  const { top, left } = target.getBoundingClientRect();

  element.style.setProperty("top", `${(event as PointerEvent).clientY - top}px`);
  element.style.setProperty("left", `${(event as PointerEvent).clientX - left}px`);

  return element;
}
