import type { FABProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { FAB } from "@solidjs-material/core";
import { Plus } from "lucide-solid";

export default {
  title: "FAB",
  args: { children: "Save" },
  render: (props) => <FAB {...props} />,
} as Meta<FABProps>;

export const Default: StoryObj<FABProps> = {};

export const Secondary: StoryObj<FABProps> = {
  args: { variant: "secondary" },
};

export const Tertiary: StoryObj<FABProps> = {
  args: { variant: "tertiary" },
};

export const WithIcon: StoryObj<FABProps> = {
  args: { icon: <Plus /> },
};

export const OnlyIcon: StoryObj<FABProps> = {
  args: { icon: <Plus />, children: undefined, "aria-label": "Add" },
};

export const CustomSize: StoryObj<FABProps> = {
  args: { icon: <Plus />, children: undefined, size: "small", "aria-label": "Add" },
};
