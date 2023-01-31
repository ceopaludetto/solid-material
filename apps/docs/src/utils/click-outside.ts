import { createSignal, onCleanup, onMount } from "solid-js";

const events = ["mousedown", "touchstart"];

export function createClickOutside<T extends HTMLElement>(callback: (el: T) => void) {
  const [ref, getRef] = createSignal<T>();

  function onClick(event: Event) {
    const el = ref();
    if (el && !el.contains(event.target as HTMLElement)) callback(el);
  }

  onMount(() => events.forEach((event) => document.addEventListener(event, onClick)));
  onCleanup(() => events.forEach((event) => document.removeEventListener(event, onClick)));

  return getRef;
}
