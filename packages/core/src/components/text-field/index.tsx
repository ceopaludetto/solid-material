import type { As, PolymorphicProps } from "@kobalte/utils";
import type { VariantProps } from "class-variance-authority";
import type { JSX } from "solid-js";

import { TextField as KTextField } from "@kobalte/core";
import { createMemo, createSignal, onCleanup, onMount, Show, splitProps } from "solid-js";

import { adornment, description, input, label, root, wrapper } from "./styles";

type TextFieldOwnProps = KTextField.TextFieldRootOptions &
  VariantProps<typeof wrapper> & {
    label: string;
    startAdornment?: JSX.Element;
    endAdornment?: JSX.Element;
    description?: string;
    class?: string;
  };

export type TextFieldProps<T extends As> = PolymorphicProps<T, TextFieldOwnProps>;

export function TextField<T extends As>(props: TextFieldProps<T>) {
  let ref!: HTMLInputElement;
  const [keepFloating, setKeepFloating] = createSignal(false);

  const [local, rest] = splitProps(props, [
    "class",
    "label",
    "variant",
    "description",
    "startAdornment",
    "endAdornment",
  ]);

  function shouldFloat(event: Event) {
    setKeepFloating(!!(event.target as HTMLInputElement)?.value);
  }

  onMount(() => {
    setKeepFloating(!!ref.value);
    ref.addEventListener("change", shouldFloat);
  });

  onCleanup(() => {
    ref.removeEventListener("change", shouldFloat);
  });

  const hasError = createMemo(() => props.validationState === "invalid");

  return (
    <KTextField.Root class={root({ class: local.class })} {...rest}>
      <div class={wrapper({ variant: local.variant ?? "filled" })}>
        <Show when={!!local.startAdornment}>
          <div class={adornment({ variant: "start" })}>{local.startAdornment}</div>
        </Show>
        <div class="relative">
          <KTextField.Label class={label({ keepFloating: keepFloating() })}>{local.label}</KTextField.Label>
          <KTextField.Input ref={ref} class={input()} />
        </div>
        <Show when={!!local.endAdornment}>
          <div class={adornment({ variant: "end" })}>{local.endAdornment}</div>
        </Show>
      </div>
      <Show when={hasError() && !!local.description}>
        <KTextField.ErrorMessage class={description()}>{local.description}</KTextField.ErrorMessage>
      </Show>
      <Show when={!hasError() && !!local.description}>
        <KTextField.Description class={description()}>{local.description}</KTextField.Description>
      </Show>
    </KTextField.Root>
  );
}
