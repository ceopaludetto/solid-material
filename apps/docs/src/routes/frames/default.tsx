import { onMount } from "solid-js";
import { createApp } from "whyframe:app";
import "~/root.css";

export default function Frame() {
  onMount(() => {
    createApp(document.querySelector("body")!);
  });

  return (
    <html lang="en">
      <head>
        <title>SolidStart - With MDX</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body class="flex h-screen items-center justify-center gap-x-2 bg-surface-container-lowest bg-[radial-gradient(circle,rgb(var(--surface-container-high)/1)_1px,transparent_1px)] bg-[length:16px_16px]" />
    </html>
  );
}
