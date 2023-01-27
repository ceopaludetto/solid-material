import type { As, PolymorphicProps } from "@kobalte/utils";
import type { VariantProps } from "class-variance-authority";
import type { JSX } from "solid-js";

import { Button as KButton } from "@kobalte/core";
import { splitProps } from "solid-js";

import { root } from "./styles";
import { createRipples } from "~/primitives";

type IconButtonOwnProps = VariantProps<typeof root> & {
  class?: string;
  children: JSX.Element;
};

export type IconButtonProps<T extends As = "button"> = PolymorphicProps<T, IconButtonOwnProps>;

export function IconButton<T extends As>(props: IconButtonProps<T>) {
  let ref!: HTMLButtonElement;

  createRipples({ ref: () => ref, center: true, disabled: props.isDisabled });
  const [local, rest] = splitProps(props, ["children", "class", "variant"]);

  return (
    <KButton.Root ref={ref} class={root({ class: local.class, variant: local.variant ?? "filled" })} {...rest}>
      {local.children}
    </KButton.Root>
  );
}