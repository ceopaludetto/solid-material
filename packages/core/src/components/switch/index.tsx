import type { As, PolymorphicProps } from "@kobalte/utils";

import { Switch as KSwitch } from "@kobalte/core";
import { splitProps } from "solid-js";

import { control, root, thumb } from "./styles";
import { createRipples } from "~/primitives";

type SwitchOwnProps = KSwitch.SwitchRootOptions & {
  label: string;
  class?: string;
};

export type SwitchProps<T extends As = "label"> = PolymorphicProps<T, SwitchOwnProps>;

export function Switch<T extends As = "label">(props: SwitchProps<T>) {
  let ref!: HTMLLabelElement;
  let thumbRef!: HTMLDivElement;

  createRipples({ ref: () => ref, positioner: () => thumbRef, disabled: props.isDisabled, center: true, size: 40 });

  const [local, rest] = splitProps(props, ["class", "label"]);

  return (
    <KSwitch.Root ref={ref} class={root({ class: local.class })} {...rest}>
      <KSwitch.Input />
      <KSwitch.Label>{local.label}</KSwitch.Label>
      <KSwitch.Control class={control()}>
        <KSwitch.Thumb ref={thumbRef} class={thumb()} />
      </KSwitch.Control>
    </KSwitch.Root>
  );
}
