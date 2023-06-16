import type { VariantProps } from "class-variance-authority";
import type { JSX, ValidComponent } from "solid-js";

import { Polymorphic, type PolymorphicProps } from "@kobalte/core";
import { createSignal, onCleanup, onMount, Show, splitProps } from "solid-js";

import { adornment, root, title } from "./styles";

export type TopBarProps<T extends ValidComponent> = Omit<VariantProps<typeof root>, "elevated"> &
  PolymorphicProps<T> & {
    class?: string;
    children: JSX.Element;
    endAdornment?: JSX.Element;
  };

export function TopBar<T extends ValidComponent = "div">(props: TopBarProps<T>) {
  const [elevated, setElevated] = createSignal(false);
  const [local, rest] = splitProps(props, ["as", "class", "disableOnDesktop", "endAdornment", "children"]);

  function onScroll() {
    if (typeof window !== "undefined" && window.scrollY > 10) {
      setElevated(true);
      return;
    }

    setElevated(false);
  }

  onMount(() => typeof window !== "undefined" && window.addEventListener("scroll", onScroll, { passive: true }));
  onCleanup(() => typeof window !== "undefined" && window.removeEventListener("scroll", onScroll));

  return (
    <Polymorphic
      class={root({ class: local.class, elevated: elevated(), disableOnDesktop: local.disableOnDesktop })}
      component={local.as ?? "div"}
      {...rest}
    >
      <div class={title()}>{local.children}</div>
      <Show when={!!local.endAdornment}>
        <div class={adornment()}>{local.endAdornment}</div>
      </Show>
    </Polymorphic>
  );
}
