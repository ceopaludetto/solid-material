import type { PolymorphicProps } from "@kobalte/core";
import type { JSX, ValidComponent } from "solid-js";

import { Show, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { adornment, root } from "./styles";

export type NavigationDrawerProps<T extends ValidComponent> = PolymorphicProps<T> & {
  class?: string;
  children?: JSX.Element;
  startAdornment?: JSX.Element;
};

export function NavigationDrawer<T extends ValidComponent = "div">(props: NavigationDrawerProps<T>) {
  const [local, rest] = splitProps(props, ["as", "class", "children", "startAdornment"]);

  return (
    <Dynamic class={root({ class: local.class })} component={local.as ?? "div"} {...rest}>
      <Show when={!!local.startAdornment}>
        <div class={adornment()}>{local.startAdornment}</div>
      </Show>
      {local.children}
    </Dynamic>
  );
}
