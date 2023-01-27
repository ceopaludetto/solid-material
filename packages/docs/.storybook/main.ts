import { StorybookConfig } from "@storybook/html-vite";

export default {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    disable: true,
  },
  core: {
    disableTelemetry: true,
  },
} satisfies StorybookConfig;
