import type { ParentProps } from "solid-js";

import { getWhyframeSource } from "@whyframe/core/utils";
import { createSignal, onMount } from "solid-js";

export function Story(props: ParentProps) {
  let iframe!: HTMLIFrameElement;
  const [source, setSource] = createSignal<string>();

  onMount(() => {
    setSource(getWhyframeSource(iframe) ?? "");
  });

  return (
    <>
      <iframe class="w-full rounded-md border border-surface-container-high" ref={iframe} data-why>
        {props.children}
      </iframe>
      <pre>{source()}</pre>
    </>
  );
}
