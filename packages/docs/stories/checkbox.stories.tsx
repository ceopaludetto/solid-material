import type { Meta, StoryObj } from "@storybook/html";

import { Checkbox } from "@solidjs-material/core";
import { Check, Minus } from "lucide-solid";

export default {
  title: "Checkbox",
  args: { label: "Terms and Conditions", checkIcon: () => <Check />, indeterminateIcon: () => <Minus /> },
  render: (props) => <Checkbox {...props} />,
} as Meta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {};

export const LabelOnRight: StoryObj<typeof Checkbox> = {
  args: { labelPlacement: "right" },
};

export const DefaultChecked: StoryObj<typeof Checkbox> = {
  args: { defaultIsChecked: true },
};

export const Indeterminate: StoryObj<typeof Checkbox> = {
  args: { isIndeterminate: true },
};

export const Disabled: StoryObj<typeof Checkbox> = {
  args: { isDisabled: true },
};

export const DisabledAndChecked: StoryObj<typeof Checkbox> = {
  args: { isDisabled: true, defaultIsChecked: true },
};

export const DisabledAndIndeterminate: StoryObj<typeof Checkbox> = {
  args: { isDisabled: true, isIndeterminate: true, defaultIsChecked: true },
};
