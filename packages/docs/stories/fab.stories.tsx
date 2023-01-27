import type { Meta, StoryObj } from "@storybook/html";

import { FAB } from "@solid-material/core";
import { Plus } from "lucide-solid";

export default {
  title: "FAB",
  args: { children: "Save" },
  render: (props) => <FAB {...props} />,
} as Meta<typeof FAB>;

export const Default: StoryObj<typeof FAB> = {};

export const Secondary: StoryObj<typeof FAB> = {
  args: { variant: "secondary" },
};

export const Tertiary: StoryObj<typeof FAB> = {
  args: { variant: "tertiary" },
};

export const WithIcon: StoryObj<typeof FAB> = {
  args: { icon: <Plus /> },
};

export const OnlyIcon: StoryObj<typeof FAB> = {
  args: { icon: <Plus />, children: undefined, "aria-label": "Add" },
};

export const CustomSize: StoryObj<typeof FAB> = {
  args: { icon: <Plus />, children: undefined, size: "small", "aria-label": "Add" },
};
