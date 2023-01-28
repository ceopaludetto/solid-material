import type { As, PolymorphicProps } from "@kobalte/utils";
import type { VariantProps } from "class-variance-authority";

import { Switch as KSwitch } from "@kobalte/core";
import { splitProps } from "solid-js";

import { control, root, thumb } from "./styles";
import { createRipples } from "~/primitives";
import { mergeWithRefs } from "~/utils/refs";

type SwitchOwnProps = KSwitch.SwitchRootOptions &
  VariantProps<typeof root> & {
    label: string;
    class?: string;
  };

export type SwitchProps<T extends As = "label"> = PolymorphicProps<T, SwitchOwnProps>;

export function Switch<T extends As = "label">(props: SwitchProps<T>) {
  const [trigger, positioner] = createRipples({ disabled: props.isDisabled, center: true, size: 40 });
  const [local, rest] = splitProps(props, ["class", "label", "labelPlacement"]);

  return (
    <KSwitch.Root
      class={root({ class: local.class, labelPlacement: local.labelPlacement })}
      {...mergeWithRefs(trigger, rest)}
    >
      <KSwitch.Input />
      <KSwitch.Label>{local.label}</KSwitch.Label>
      <KSwitch.Control class={control()}>
        <KSwitch.Thumb ref={positioner} class={thumb()} />
      </KSwitch.Control>
    </KSwitch.Root>
  );
}
