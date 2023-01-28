import type { DividerProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { Divider } from "@solidjs-material/core";

export default {
  title: "Divider",
  render: (props) => (
    <div class="aspect-square w-[200px]">
      <Divider {...props} />
    </div>
  ),
} as Meta<DividerProps>;

export const Default: StoryObj<DividerProps> = {};

export const Vertical: StoryObj<DividerProps> = {
  args: { orientation: "vertical" },
};
