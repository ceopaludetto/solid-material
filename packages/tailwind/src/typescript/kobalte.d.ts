/* eslint-disable @typescript-eslint/consistent-type-imports */

declare module "@kobalte/tailwindcss" {
  const plugin: { handler: import("tailwindcss/types/config").PluginCreator };
  export default plugin;
}
