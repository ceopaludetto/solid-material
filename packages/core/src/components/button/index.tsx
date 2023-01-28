import type { PolymorphicProps, As } from "@kobalte/utils";
import type { VariantProps } from "class-variance-authority";
import type { JSX } from "solid-js";

import { Button as KButton } from "@kobalte/core";
import { Show, splitProps } from "solid-js";

import { icon, root } from "./styles";
import { createRipples } from "~/primitives";
import { mergeWithRefs } from "~/utils/refs";

type ButtonOwnProps = KButton.ButtonRootOptions &
  Omit<VariantProps<typeof root>, "hasEndIcon" | "hasStartIcon"> & {
    class?: string;
    children: JSX.Element;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
  };

export type ButtonProps<T extends As = "button"> = PolymorphicProps<T, ButtonOwnProps>;

export function Button<T extends As = "button">(props: ButtonProps<T>) {
  const [trigger] = createRipples({ disabled: props.isDisabled });
  const [local, rest] = splitProps(props, ["class", "children", "variant", "startIcon", "endIcon"]);

  return (
    <KButton.Root
      class={root({
        class: local.class,
        variant: local.variant ?? "filled",
        hasStartIcon: !!local.startIcon,
        hasEndIcon: !!local.endIcon,
      })}
      {...mergeWithRefs(trigger, rest)}
    >
      <Show when={!!local.startIcon}>
        <span class={icon()}>{local.startIcon}</span>
      </Show>
      {local.children}
      <Show when={!!local.endIcon}>
        <span class={icon()}>{local.endIcon}</span>
      </Show>
    </KButton.Root>
  );
}
