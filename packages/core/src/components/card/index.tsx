import type { PolymorphicProps } from "@kobalte/core";
import type { VariantProps } from "class-variance-authority";
import type { JSX, ValidComponent } from "solid-js";

import { Polymorphic } from "@kobalte/core";
import { splitProps } from "solid-js";

import { root } from "./styles";

export type CardProps<T extends ValidComponent> = PolymorphicProps<T> &
  VariantProps<typeof root> & {
    class?: string;
    children?: JSX.Element;
  };

export function Card<T extends ValidComponent = "div">(props: CardProps<T>) {
  const [local, rest] = splitProps(props, ["as", "children", "class", "variant"]);

  return (
    <Polymorphic
      component={local.as ?? "div"}
      class={root({ class: local.class, variant: local.variant ?? "filled" })}
      {...rest}
    >
      {local.children}
    </Polymorphic>
  );
}
