import { createSignal, onCleanup, onMount } from "solid-js";

import { cancelRippleAnimation, centerElementToPointer, completedFactor, createRipple, duration } from "./utils";
import { applyClasses, filterKeyboardEvent, filterMouseEvent, isKeyboardEvent, isTouchDevice } from "~/utils/dom";

export type RippleOptions = {
  size?: number;
  center?: boolean;
  disabled?: boolean;
};

const self = () => document;

const startEvents = ["pointerdown", "keydown"] as const;
const endEvents = ["pointerout", "pointerup", "keyup"] as const;

const className = "solid-material--ripple";

/**
 * Add ripples to positioner element.
 *
 * Heavily inspired in https://github.com/asplunds/use-ripple
 *
 * @param options Ripple Options
 * @returns void
 */
export function createRipples<T extends HTMLElement = HTMLElement, U extends HTMLElement = T>({
  disabled,
  size,
  center,
}: RippleOptions) {
  const [trigger, getTrigger] = createSignal<T>();
  const [positioner, getPositioner] = createSignal<U>();

  const [pressing, setPressing] = createSignal(false);

  function onPointerDown(event: KeyboardEvent | PointerEvent) {
    const target = positioner() ?? trigger();
    const fromKeyboard = isKeyboardEvent(event);

    if (!target || disabled || pressing() || !filterMouseEvent(event) || !filterKeyboardEvent(event)) return;
    if (fromKeyboard) setPressing(true);

    if (window.getComputedStyle(target).position === "static") applyClasses("relative", target);

    requestAnimationFrame(() => {
      const begun = Date.now();
      const ripple = centerElementToPointer({
        event,
        target,
        center: fromKeyboard || center,
        element: createRipple({ name: className, size, fromKeyboard }, target, event),
      });

      const cancelRipple = () => {
        setPressing(false);

        const now = Date.now();
        const diff = now - begun;

        setTimeout(() => cancelRippleAnimation(ripple), diff > 0.4 * duration ? 0 : completedFactor * duration - diff);
        endEvents.forEach((item) => self().removeEventListener(item, cancelRipple));
      };

      if (!isTouchDevice()) endEvents.forEach((item) => self().addEventListener(item, cancelRipple));
      else setTimeout(() => cancelRippleAnimation(ripple), duration * completedFactor);

      target.appendChild(ripple);
    });
  }

  onMount(() => startEvents.forEach((event) => trigger()?.addEventListener(event, onPointerDown)));
  onCleanup(() => startEvents.forEach((event) => trigger()?.removeEventListener(event, onPointerDown)));

  return [getTrigger, getPositioner] as const;
}
