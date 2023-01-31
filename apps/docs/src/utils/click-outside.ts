import type { Accessor } from "solid-js";

import { onCleanup, onMount } from "solid-js";

const events = ["mousedown", "touchstart"];

type CreateClickOutsideOptions<T extends HTMLElement> = {
  ref: Accessor<T | undefined>;
  isDisabled?: Accessor<boolean | undefined>;
  callback: (el: T) => void;
};

export function createClickOutside<T extends HTMLElement>(options: CreateClickOutsideOptions<T>) {
  function onClick(event: Event) {
    if (options.isDisabled?.()) return;

    const el = options.ref();
    if (el && !el.contains(event.target as HTMLElement)) options.callback(el);
  }

  onMount(() => events.forEach((event) => document.addEventListener(event, onClick)));
  onCleanup(() => events.forEach((event) => document.removeEventListener(event, onClick)));
}
