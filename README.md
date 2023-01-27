# Solid Material

Solid-js high quality components built with [Tailwindcss](https://tailwindcss.com/) and [Kobalte](https://kobalte.dev/docs/core/overview/introduction) following [Material You](https://m3.material.io/) guidelines.

## Features

- A11y
- Tailwind CSS
- Automatic dark mode based on system settings

## Get Started

Install `@solid-material/core` and `@solid-material/tailwind`:

```
npm install @solid-material/core && npm install --save-dev @solid-material/tailwind
yarn add @solid-material/core && yarn add -D @solid-material/tailwind
pnpm add @solid-material/core && pnpm add -D @solid-material/tailwind
```

Setup `tailwindcss` preset:

```js
const { designSystem } = require("@solid-material/tailwind");

module.exports = {
  content: [
    "./node_modules/@solid-material/core/dist/*.{js,cjs}", // You must specify solid material core components
    "./src/**/*.{ts,tsx}", // Your app components
  ],
  presets: [designSystem({ baseColor: "#FACADA" })], // Try to change baseColor
};
```

Start using the components:

```tsx
import { Button } from "@solid-material/core";

export function App() {
  return <Button>Hello World!</Button>;
}
```

## Roadmap

### Components

- [x] Button
- [x] Card
- [ ] Checkbox
- [ ] Chip
- [ ] Date Pickers
- [x] Divider
- [ ] List
- [ ] Menu
- [x] FAB
- [x] Extended FAB
- [x] Icon Button
- [x] Navigation Drawer
- [x] Navigation Drawer Item
- [x] Navigation Rail
- [x] Navigation Item
- [ ] Progress Indicator
- [ ] Radio Button
- [ ] Search
- [ ] Side Sheet
- [ ] Slider
- [ ] Snackbar
- [x] Switch
- [ ] Tabs
- [x] Text Field
- [ ] Time Fields
- [ ] Top App Bar

### Library related

- [ ] Changesets
- [ ] Tests
- [ ] Docs
