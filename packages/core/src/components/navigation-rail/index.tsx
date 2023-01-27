import type { As, PolymorphicProps } from "@kobalte/utils";
import type { JSX } from "solid-js";

import { Show, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { adornment, root } from "./styles";

type NavigationRailOwnProps = {
  class?: string;
  children?: JSX.Element;
  startAdornment?: JSX.Element;
};

export type NavigationRailProps<T extends As = "div"> = PolymorphicProps<T, NavigationRailOwnProps>;

export function NavigationRail<T extends As = "div">(props: NavigationRailProps<T>) {
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
