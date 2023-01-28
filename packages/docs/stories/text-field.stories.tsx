import type { TextFieldProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { TextField, IconButton } from "@solidjs-material/core";
import { Eye, User, X } from "lucide-solid";

export default {
  title: "TextField",
  args: { label: "E-mail" },
  render: (props) => <TextField {...props} />,
} as Meta<TextFieldProps>;

export const Default: StoryObj<TextFieldProps> = {};

export const DefaultValue: StoryObj<TextFieldProps> = {
  args: { defaultValue: "some@example.com" },
};

export const Disabled: StoryObj<TextFieldProps> = {
  args: { isDisabled: true, defaultValue: "some@example.com" },
};

export const WithDescription: StoryObj<TextFieldProps> = {
  args: { description: "Supporting Text" },
};

export const WithError: StoryObj<TextFieldProps> = {
  args: {
    description: "Invalid!",
    validationState: "invalid",
    startAdornment: () => <User />,
    endAdornment: () => <X />,
  },
};

export const WithAdornment: StoryObj<TextFieldProps> = {
  args: {
    startAdornment: () => <User />,
    endAdornment: () => (
      <IconButton aria-label="See password" variant="standard">
        <Eye />
      </IconButton>
    ),
  },
};
