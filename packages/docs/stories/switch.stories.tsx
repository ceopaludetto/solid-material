import type { SwitchProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { Switch } from "@solidjs-material/core";

export default {
  title: "Switch",
  args: { label: "Dark theme" },
  render: (props) => <Switch {...props} />,
} as Meta<SwitchProps>;

export const Default: StoryObj<SwitchProps> = {};

export const LabelOnRight: StoryObj<SwitchProps> = {
  args: { labelPlacement: "right" },
};

export const DefaultChecked: StoryObj<SwitchProps> = {
  args: { defaultIsChecked: true },
};

export const Disabled: StoryObj<SwitchProps> = {
  args: { isDisabled: true },
};

export const DisabledAndChecked: StoryObj<SwitchProps> = {
  args: { isDisabled: true, defaultIsChecked: true },
};
