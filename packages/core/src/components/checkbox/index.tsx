import type { As, PolymorphicProps } from "@kobalte/utils";
import type { VariantProps } from "class-variance-authority";

import { Checkbox as KCheckbox } from "@kobalte/core";
import { Show, splitProps } from "solid-js";

import { control, indicator, root } from "./styles";
import { createRipples } from "~/primitives";

type CheckboxOwnProps = KCheckbox.CheckboxRootOptions &
  VariantProps<typeof root> & {
    label: string;
    checkIcon: JSX.Element;
    indeterminateIcon: JSX.Element;
    class?: string;
  };

export type CheckboxProps<T extends As> = PolymorphicProps<T, CheckboxOwnProps>;

export function Checkbox<T extends As = "label">(props: CheckboxProps<T>) {
  let ref!: HTMLLabelElement;
  let controlRef!: HTMLDivElement;

  createRipples({ ref: () => ref, positioner: () => controlRef, size: 40, center: true, disabled: props.isDisabled });
  const [local, rest] = splitProps(props, ["class", "label", "checkIcon", "indeterminateIcon", "labelPlacement"]);

  return (
    <KCheckbox.Root ref={ref} class={root({ class: local.class, labelPlacement: local.labelPlacement })} {...rest}>
      <KCheckbox.Input />
      <KCheckbox.Label>{local.label}</KCheckbox.Label>
      <KCheckbox.Control ref={controlRef} class={control()}>
        <KCheckbox.Indicator forceMount class={indicator()}>
          <Show when={!props.isIndeterminate}>{local.checkIcon}</Show>
          <Show when={props.isIndeterminate}>{local.indeterminateIcon}</Show>
        </KCheckbox.Indicator>
      </KCheckbox.Control>
    </KCheckbox.Root>
  );
}
