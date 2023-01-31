import { IconButton, TopBar } from "@solidjs-material/core";
import { AiOutlineGithub, AiOutlineMenu } from "solid-icons/ai";

export function Header() {
  return (
    <TopBar
      class="sticky top-0 z-40"
      disableOnDesktop
      endAdornment={() => (
        <IconButton
          as="a"
          href="https://www.github.com/ceopaludetto/solid-material"
          target="_blank"
          rel="noopener noreferrer"
          variant="tonal"
          aria-label="GitHub"
        >
          {() => <AiOutlineGithub />}
        </IconButton>
      )}
    >
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <IconButton class="sidebar-toggle mr-3 lg:hidden" aria-label="Menu" variant="standard">
        <AiOutlineMenu />
      </IconButton>
      <a href="/" class="text-title-medium">
        Solid<span class="text-primary">Material</span>
      </a>
    </TopBar>
  );
}
