import type { As, PolymorphicProps } from "@kobalte/utils";
import type { VariantProps } from "class-variance-authority";
import type { JSX } from "solid-js";

import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { root } from "./styles";

type CardOwnProps = VariantProps<typeof root> & {
  class?: string;
  children?: JSX.Element;
};

export type CardProps<T extends As = "div"> = PolymorphicProps<T, CardOwnProps>;

export function Card<T extends As = "div">(props: CardProps<T>) {
  const [local, rest] = splitProps(props, ["as", "children", "class", "variant"]);

  return (
    <Dynamic
      class={root({ class: local.class, variant: local.variant ?? "filled" })}
      component={local.as ?? "div"}
      {...rest}
    >
      {local.children}
    </Dynamic>
  );
}
