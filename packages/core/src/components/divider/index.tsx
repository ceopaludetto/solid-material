import { Separator as KSeparator } from "@kobalte/core";
import { splitProps } from "solid-js";

import { root } from "./styles";

export type DividerProps = KSeparator.SeparatorRootOptions & {
  class?: string;
};

export function Divider(props: DividerProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return <KSeparator.Root class={root({ class: local.class })} {...rest} />;
}
