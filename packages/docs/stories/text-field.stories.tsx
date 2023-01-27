import type { Meta, StoryObj } from "@storybook/html";

import { TextField, IconButton } from "@solid-material/core";
import { Eye, User, X } from "lucide-solid";

export default {
  title: "TextField",
  render: (props) => <TextField label="E-mail" {...props} />,
} as Meta<typeof TextField>;

export const Default: StoryObj<typeof TextField> = {};

export const DefaultValue: StoryObj<typeof TextField> = {
  args: { defaultValue: "some@example.com" },
};

export const Disabled: StoryObj<typeof TextField> = {
  args: { isDisabled: true, defaultValue: "some@example.com" },
};

export const WithDescription: StoryObj<typeof TextField> = {
  args: { description: "Supporting Text" },
};

export const WithError: StoryObj<typeof TextField> = {
  args: {
    description: "Invalid!",
    validationState: "invalid",
    startAdornment: () => <User />,
    endAdornment: () => <X />,
  },
};

export const WithAdornment: StoryObj<typeof TextField> = {
  args: {
    startAdornment: () => <User />,
    endAdornment: () => (
      <IconButton aria-label="See password" variant="standard">
        <Eye />
      </IconButton>
    ),
  },
};
