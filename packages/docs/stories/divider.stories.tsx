import type { Meta, StoryObj } from "@storybook/html";

import { Divider } from "@solid-material/core";

export default {
  title: "Divider",
  render: (props) => (
    <div class="aspect-square w-[200px]">
      <Divider {...props} />
    </div>
  ),
} as Meta<typeof Divider>;

export const Default: StoryObj<typeof Divider> = {};

export const Vertical: StoryObj<typeof Divider> = {
  args: { orientation: "vertical" },
};
