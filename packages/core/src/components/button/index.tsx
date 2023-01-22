import type { PolymorphicProps, As } from "@kobalte/utils";
import type { JSX } from "solid-js";

import { Button as KButton } from "@kobalte/core";
import { splitProps } from "solid-js";

import { root } from "./styles";

export type ButtonProps<T extends As = "button"> = PolymorphicProps<T, KButton.ButtonRootOptions>;

export function Button(props: ButtonProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "children"]);

  return (
    <KButton.Root class={root({ class: local.class })} {...rest}>
      {local.children}
    </KButton.Root>
  );
}
