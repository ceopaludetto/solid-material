import type { As, PolymorphicProps } from "@kobalte/utils";
import type { JSX } from "solid-js";

import { Show, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { adornment, root } from "./styles";

type NavigationDrawerOwnProps = {
  class?: string;
  children?: JSX.Element;
  startAdornment?: JSX.Element;
};

export type NavigationDrawerProps<T extends As = "div"> = PolymorphicProps<T, NavigationDrawerOwnProps>;

export function NavigationDrawer<T extends As = "div">(props: NavigationDrawerProps<T>) {
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
