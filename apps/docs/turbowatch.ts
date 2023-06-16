import { defineConfig } from "turbowatch";

export default defineConfig({
  project: __dirname,
  triggers: [
    {
      expression: [
        "anyof",
        ["allof", ["dirname", "node_modules"], ["dirname", "dist"], ["match", "*"]],
        ["allof", ["not", ["dirname", "node_modules"]], ["dirname", "src"], ["match", "*"]],
      ],
      interruptible: false,
      name: "build",
      onChange: async ({ spawn }) => {
        await spawn`pnpm run dev`;
      },
    },
  ],
});
