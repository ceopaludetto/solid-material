import type { As, PolymorphicProps } from "@kobalte/utils";

import { Separator as KSeparator } from "@kobalte/core";
import { splitProps } from "solid-js";

import { root } from "./styles";

type DividerOwnProps = {
  class?: string;
};

export type DividerProps<T extends As = "hr"> = PolymorphicProps<T, DividerOwnProps>;

export function Divider<T extends As = "hr">(props: DividerProps<T>) {
  const [local, rest] = splitProps(props, ["class"]);

  return <KSeparator.Root class={root({ class: local.class })} {...rest} />;
}
