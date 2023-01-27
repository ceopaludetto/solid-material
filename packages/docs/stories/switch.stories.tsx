import type { Meta, StoryObj } from "@storybook/html";

import { Switch } from "@solid-material/core";

export default {
  title: "Switch",
  render: (props) => <Switch label="Dark theme" {...props} />,
} as Meta<typeof Switch>;

export const Default: StoryObj<typeof Switch> = {};

export const DefaultChecked: StoryObj<typeof Switch> = {
  args: { defaultIsChecked: true },
};

export const Disabled: StoryObj<typeof Switch> = {
  args: { isDisabled: true },
};
