import type { VariantProps } from "class-variance-authority";
import type { JSX } from "solid-js";

import { Tabs as KTabs } from "@kobalte/core";
import { Show, splitProps } from "solid-js";

import { icon, indicator, item, line, list, root } from "./styles";
import { createRipples } from "~/primitives";

export type TabsProps = KTabs.TabsRootOptions &
  VariantProps<typeof list> & {
    class?: string;
    items: JSX.Element;
    children: JSX.Element;
  };

function Root(props: TabsProps) {
  const [local, rest] = splitProps(props, ["class", "items", "children", "variant", "hasIcons"]);

  return (
    <KTabs.Root class={root({ class: local.class })} {...rest}>
      <KTabs.List class={list({ variant: local.variant ?? "primary", hasIcons: local.hasIcons })}>
        <KTabs.Indicator class={indicator()}>
          <span class={line({ variant: local.variant ?? "primary" })} />
        </KTabs.Indicator>
        {local.items}
      </KTabs.List>
      {local.children}
    </KTabs.Root>
  );
}

export type TabsItemProps = KTabs.TabsTriggerOptions & {
  class?: string;
  icon?: JSX.Element;
  children: JSX.Element;
};

function Item(props: TabsItemProps) {
  const [local, rest] = splitProps(props, ["children", "icon", "class", "value"]);
  const [ref] = createRipples({});

  return (
    <KTabs.Trigger ref={ref} class={item({ class: local.class })} value={local.value} {...rest}>
      <Show when={local.icon}>
        <div class={icon()}>{local.icon}</div>
      </Show>
      {local.children}
    </KTabs.Trigger>
  );
}

export const Tabs = { Root, Content: KTabs.Content, Item };
