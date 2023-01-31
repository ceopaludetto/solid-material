import type { As, PolymorphicProps } from "@kobalte/utils";
import type { VariantProps } from "class-variance-authority";
import type { JSX } from "solid-js";

import { createSignal, onCleanup, onMount, Show, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { adornment, root, title } from "./styles";

type TopBarOwnProps = Omit<VariantProps<typeof root>, "elevated"> & {
  class?: string;
  children: JSX.Element;
  endAdornment?: JSX.Element;
};

export type TopBarProps<T extends As = "div"> = PolymorphicProps<T, TopBarOwnProps>;

export function TopBar<T extends As = "div">(props: TopBarProps<T>) {
  const [elevated, setElevated] = createSignal(false);
  const [local, rest] = splitProps(props, ["as", "class", "disableOnDesktop", "endAdornment", "children"]);

  function onScroll() {
    if (window.scrollY > 10) {
      setElevated(true);
      return;
    }

    setElevated(false);
  }

  onMount(() => window.addEventListener("scroll", onScroll, { passive: true }));
  onCleanup(() => window.removeEventListener("scroll", onScroll));

  return (
    <Dynamic
      class={root({ class: local.class, elevated: elevated(), disableOnDesktop: local.disableOnDesktop })}
      component={local.as ?? "div"}
      {...rest}
    >
      <div class={title()}>{local.children}</div>
      <Show when={!!local.endAdornment}>
        <div class={adornment()}>{local.endAdornment}</div>
      </Show>
    </Dynamic>
  );
}
