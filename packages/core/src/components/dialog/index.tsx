import type { As, PolymorphicProps } from "@kobalte/utils";
import type { JSX } from "solid-js";

import { Dialog as KDialog } from "@kobalte/core";
import { Show, splitProps } from "solid-js";

import { actions, content, description, icon, overlay, positioner, title } from "./styles";

type DialogOwnProps = KDialog.DialogRootOptions & {
  class?: string;
  children?: JSX.Element;
  title: string;
  description: string;
  endAdornment?: JSX.Element;
  icon?: JSX.Element;
};

export type DialogContentProps<T extends As = "div"> = PolymorphicProps<T, DialogOwnProps>;

function Content<T extends As = "div">(props: DialogContentProps<T>) {
  const [local, rest] = splitProps(props, ["class", "title", "children", "description", "endAdornment", "icon"]);

  return (
    <KDialog.Root {...rest}>
      <Show when={local.children}>{local.children}</Show>
      <KDialog.Portal>
        <KDialog.Overlay class={overlay()} />
        <div class={positioner()}>
          <KDialog.Content class={content({ class: local.class })}>
            <Show when={local.icon}>
              <span class={icon()}>{local.icon}</span>
            </Show>
            <KDialog.Title class={title()}>{local.title}</KDialog.Title>
            <KDialog.Description class={description()}>{local.description}</KDialog.Description>
            <div class={actions()}>
              <Show when={!!local.endAdornment}>{local.endAdornment}</Show>
            </div>
          </KDialog.Content>
        </div>
      </KDialog.Portal>
    </KDialog.Root>
  );
}

export const Dialog = { Content, Trigger: KDialog.Trigger };
