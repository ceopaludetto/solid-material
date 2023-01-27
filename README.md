# Solid Material

Solid-js high quality components built with [Tailwindcss](https://tailwindcss.com/) and [Kobalte](https://kobalte.dev/docs/core/overview/introduction) following [Material You](https://m3.material.io/) guidelines.

## Features

- A11y
- Tailwind CSS
- Automatic dark mode based on system settings

## Get Started

Install `@solidjs-material/core` and `@solidjs-material/tailwind`:

```
npm install @solidjs-material/core && npm install --save-dev @solidjs-material/tailwind
yarn add @solidjs-material/core && yarn add -D @solidjs-material/tailwind
pnpm add @solidjs-material/core && pnpm add -D @solidjs-material/tailwind
```

Setup `tailwindcss` preset:

```js
const { designSystem } = require("@solidjs-material/tailwind");

module.exports = {
  content: [
    "./node_modules/@solidjs-material/core/dist/*.{js,cjs}", // You must specify solid material core components
    "./src/**/*.{ts,tsx}", // Your app components
  ],
  presets: [designSystem({ baseColor: "#FACADA" })], // Try to change baseColor
};
```

Start using the components:

```tsx
import { Button } from "@solidjs-material/core";

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
