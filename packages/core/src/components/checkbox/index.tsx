import type { As, PolymorphicProps } from "@kobalte/utils";
import type { VariantProps } from "class-variance-authority";
import type { JSX } from "solid-js";

import { Checkbox as KCheckbox } from "@kobalte/core";
import { createSignal, Show, splitProps } from "solid-js";

import { control, indicator, root } from "./styles";
import { createRipples } from "~/primitives";
import { mergeWithRefs } from "~/utils/refs";

type CheckboxOwnProps = KCheckbox.CheckboxRootOptions &
  VariantProps<typeof root> & {
    label: string;
    checkIcon: JSX.Element;
    indeterminateIcon: JSX.Element;
    class?: string;
  };

export type CheckboxProps<T extends As = "label"> = PolymorphicProps<T, CheckboxOwnProps>;

export function Checkbox<T extends As = "label">(props: CheckboxProps<T>) {
  const [ref, getRef] = createSignal<HTMLLabelElement>();

  let controlRef!: HTMLDivElement;

  createRipples({ ref, positioner: () => controlRef, size: 40, center: true, disabled: props.isDisabled });
  const [local, rest] = splitProps(props, ["class", "label", "checkIcon", "indeterminateIcon", "labelPlacement"]);

  return (
    <KCheckbox.Root
      class={root({ class: local.class, labelPlacement: local.labelPlacement })}
      {...mergeWithRefs(getRef, rest)}
    >
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
