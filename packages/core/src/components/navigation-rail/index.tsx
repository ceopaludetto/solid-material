import type { PolymorphicProps } from "@kobalte/core";
import type { JSX, ValidComponent } from "solid-js";

import { Show, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { adornment, root } from "./styles";

export type NavigationRailProps<T extends ValidComponent> = PolymorphicProps<T> & {
  class?: string;
  children?: JSX.Element;
  startAdornment?: JSX.Element;
};

export function NavigationRail<T extends ValidComponent = "div">(props: NavigationRailProps<T>) {
  const [local, rest] = splitProps(props, ["as", "children", "class", "startAdornment"]);

  return (
    <Dynamic component={local.as ?? "div"} class={root({ class: local.class })} {...rest}>
      <Show when={!!local.startAdornment}>
        <div class={adornment()}>{local.startAdornment}</div>
      </Show>
      {local.children}
    </Dynamic>
  );
}
