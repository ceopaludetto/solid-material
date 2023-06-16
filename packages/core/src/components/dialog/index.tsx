import type { JSX } from "solid-js";

import { Dialog as KDialog } from "@kobalte/core";
import { Show, splitProps } from "solid-js";

import { actions, content, description, icon, overlay, positioner, title } from "./styles";

export type DialogContentProps = KDialog.DialogRootOptions & {
  class?: string;
  children?: JSX.Element;
  title: string;
  description: string;
  endAdornment?: JSX.Element;
  icon?: JSX.Element;
};

function Content(props: DialogContentProps) {
  const [local, rest] = splitProps(props, ["class", "title", "children", "description", "endAdornment", "icon"]);

  return (
    <KDialog.Root {...rest}>
      <Show when={local.children}>{(children) => children()}</Show>
      <KDialog.Portal>
        <KDialog.Overlay class={overlay()} />
        <div class={positioner()}>
          <KDialog.Content class={content({ class: local.class })}>
            <Show when={local.icon}>{(iconComponent) => <span class={icon()}>{iconComponent()}</span>}</Show>
            <KDialog.Title class={title()}>{local.title}</KDialog.Title>
            <KDialog.Description class={description()}>{local.description}</KDialog.Description>
            <Show when={local.endAdornment}>{(endAdornment) => <div class={actions()}>{endAdornment()}</div>}</Show>
          </KDialog.Content>
        </div>
      </KDialog.Portal>
    </KDialog.Root>
  );
}

export const Dialog = { Content, Trigger: KDialog.Trigger };
