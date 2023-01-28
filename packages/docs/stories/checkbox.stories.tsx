import type { CheckboxProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { Checkbox } from "@solidjs-material/core";
import { Check, Minus } from "lucide-solid";

export default {
  title: "Checkbox",
  args: { label: "Terms and Conditions", checkIcon: () => <Check />, indeterminateIcon: () => <Minus /> },
  render: (props) => <Checkbox {...props} />,
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

export const LabelOnRight: StoryObj<CheckboxProps> = {
  args: { labelPlacement: "right" },
};

export const DefaultChecked: StoryObj<CheckboxProps> = {
  args: { defaultIsChecked: true },
};

export const Indeterminate: StoryObj<CheckboxProps> = {
  args: { isIndeterminate: true },
};

export const Disabled: StoryObj<CheckboxProps> = {
  args: { isDisabled: true },
};

export const DisabledAndChecked: StoryObj<CheckboxProps> = {
  args: { isDisabled: true, defaultIsChecked: true },
};

export const DisabledAndIndeterminate: StoryObj<CheckboxProps> = {
  args: { isDisabled: true, isIndeterminate: true, defaultIsChecked: true },
};
