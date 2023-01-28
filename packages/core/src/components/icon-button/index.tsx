import type { As, PolymorphicProps } from "@kobalte/utils";
import type { VariantProps } from "class-variance-authority";
import type { JSX } from "solid-js";

import { Button as KButton } from "@kobalte/core";
import { splitProps } from "solid-js";

import { root } from "./styles";
import { createRipples } from "~/primitives";
import { mergeWithRefs } from "~/utils/refs";

type IconButtonOwnProps = KButton.ButtonRootOptions &
  VariantProps<typeof root> & {
    class?: string;
    children: JSX.Element;
  };

export type IconButtonProps<T extends As = "button"> = PolymorphicProps<T, IconButtonOwnProps>;

export function IconButton<T extends As = "button">(props: IconButtonProps<T>) {
  const [trigger] = createRipples({ center: true, disabled: props.isDisabled });
  const [local, rest] = splitProps(props, ["children", "class", "variant"]);

  return (
    <KButton.Root
      class={root({ class: local.class, variant: local.variant ?? "filled" })}
      {...mergeWithRefs(trigger, rest)}
    >
      {local.children}
    </KButton.Root>
  );
}
