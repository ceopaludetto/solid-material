import type { As, PolymorphicProps } from "@kobalte/utils";
import type { VariantProps } from "class-variance-authority";
import type { JSX } from "solid-js";

import { TextField as KTextField } from "@kobalte/core";
import { createMemo, createSignal, onCleanup, onMount, Show, splitProps } from "solid-js";

import { adornment, description, field, input, label, root, wrapper } from "./styles";
import { mergeWithRefs } from "~/utils/refs";

type TextFieldOwnProps = KTextField.TextFieldRootOptions &
  VariantProps<typeof wrapper> & {
    label: string;
    startAdornment?: JSX.Element;
    endAdornment?: JSX.Element;
    description?: string;
    class?: string;
  };

export type TextFieldProps<T extends As = "input"> = PolymorphicProps<T, TextFieldOwnProps>;

export function TextField<T extends As = "input">(props: TextFieldProps<T>) {
  const [ref, getRef] = createSignal<HTMLInputElement>();
  const [keepFloating, setKeepFloating] = createSignal(false);

  const [local, parent, rest] = splitProps(
    props,
    ["class", "label", "variant", "description", "startAdornment", "endAdornment"],
    [
      "value",
      "defaultValue",
      "onValueChange",
      "id",
      "name",
      "validationState",
      "isRequired",
      "isDisabled",
      "isReadOnly",
    ],
  );

  function shouldFloat(event: Event) {
    setKeepFloating(!!(event.target as HTMLInputElement)?.value);
  }

  onMount(() => {
    const el = ref();

    setKeepFloating(!!el?.value);
    el?.addEventListener("change", shouldFloat);
  });

  onCleanup(() => {
    const el = ref();

    el?.removeEventListener("change", shouldFloat);
  });

  const hasError = createMemo(() => props.validationState === "invalid");

  return (
    <KTextField.Root class={root({ class: local.class })} {...parent}>
      <div class={wrapper({ variant: local.variant ?? "filled" })}>
        <Show when={!!local.startAdornment}>
          <div class={adornment({ variant: "start" })}>{local.startAdornment}</div>
        </Show>
        <div class={field()}>
          <KTextField.Label class={label({ keepFloating: keepFloating() })}>{local.label}</KTextField.Label>
          <KTextField.Input class={input()} {...mergeWithRefs(getRef, rest)} />
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
