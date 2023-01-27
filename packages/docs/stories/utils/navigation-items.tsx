import { Home, Settings, ShoppingBag } from "lucide-solid";

export const navigationItems = [
  { children: "Home", icon: () => <Home />, active: true },
  { children: "Shop", icon: () => <ShoppingBag /> },
  { children: "Settings", icon: () => <Settings /> },
];
