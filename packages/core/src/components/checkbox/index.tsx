import type { VariantProps } from "class-variance-authority";
import type { JSX } from "solid-js";

import { Checkbox as KCheckbox } from "@kobalte/core";
import { Show, splitProps } from "solid-js";

import { control, indicator, label, root } from "./styles";
import { createRipples } from "~/primitives";
import { mergeWithRefs } from "~/utils/refs";

export type CheckboxProps = KCheckbox.CheckboxRootOptions &
  VariantProps<typeof root> & {
    label: string;
    checkIcon: JSX.Element;
    indeterminateIcon: JSX.Element;
    class?: string;
  };

export function Checkbox(props: CheckboxProps) {
  const [trigger, positioner] = createRipples({ size: 40, center: true, disabled: props.disabled });
  const [local, rest] = splitProps(props, ["class", "label", "checkIcon", "indeterminateIcon", "labelPlacement"]);

  return (
    <KCheckbox.Root
      class={root({ class: local.class, labelPlacement: local.labelPlacement })}
      {...mergeWithRefs(trigger, rest)}
    >
      <KCheckbox.Input />
      <KCheckbox.Label class={label()}>{local.label}</KCheckbox.Label>
      <KCheckbox.Control ref={positioner} class={control()}>
        <KCheckbox.Indicator forceMount class={indicator()}>
          <Show when={!props.indeterminate}>{local.checkIcon}</Show>
          <Show when={props.indeterminate}>{local.indeterminateIcon}</Show>
        </KCheckbox.Indicator>
      </KCheckbox.Control>
    </KCheckbox.Root>
  );
}
