import type { VariantProps } from "class-variance-authority";

import { Switch as KSwitch } from "@kobalte/core";
import { splitProps } from "solid-js";

import { control, label, root, thumb } from "./styles";
import { createRipples } from "~/primitives";
import { mergeWithRefs } from "~/utils/refs";

export type SwitchProps = KSwitch.SwitchRootOptions &
  VariantProps<typeof root> & {
    label: string;
    class?: string;
  };

export function Switch(props: SwitchProps) {
  const [trigger, positioner] = createRipples({ disabled: props.disabled, center: true, size: 40 });
  const [local, rest] = splitProps(props, ["class", "label", "labelPlacement"]);

  return (
    <KSwitch.Root
      class={root({ class: local.class, labelPlacement: local.labelPlacement })}
      {...mergeWithRefs(trigger, rest)}
    >
      <KSwitch.Input />
      <KSwitch.Label class={label()}>{local.label}</KSwitch.Label>
      <KSwitch.Control class={control()}>
        <KSwitch.Thumb ref={positioner} class={thumb()} />
      </KSwitch.Control>
    </KSwitch.Root>
  );
}
