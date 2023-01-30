import { FAB, IconButton, NavigationDrawer, NavigationDrawerItem } from "@solidjs-material/core";
import { AiOutlineHome, AiOutlineMenu, AiOutlinePlus, AiOutlineSetting } from "solid-icons/ai";

export function BasicExample() {
  return (
    <NavigationDrawer class="max-w-[300px]">
      <NavigationDrawerItem icon={() => <AiOutlineHome />}>Home</NavigationDrawerItem>
      <NavigationDrawerItem icon={() => <AiOutlineSetting />}>Settings</NavigationDrawerItem>
    </NavigationDrawer>
  );
}

export function ActiveExample() {
  return (
    <NavigationDrawer class="max-w-[300px]">
      <NavigationDrawerItem active icon={() => <AiOutlineHome />}>
        Home
      </NavigationDrawerItem>
      <NavigationDrawerItem icon={() => <AiOutlineSetting />}>Settings</NavigationDrawerItem>
    </NavigationDrawer>
  );
}

export function AdornmentExample() {
  return (
    <NavigationDrawer
      class="max-w-[300px]"
      startAdornment={() => (
        <>
          <IconButton aria-label="Menu" variant="standard">
            <AiOutlineMenu />
          </IconButton>
          <FAB aria-label="Add" variant="tertiary" icon={() => <AiOutlinePlus />}>
            Add
          </FAB>
        </>
      )}
    >
      <NavigationDrawerItem icon={() => <AiOutlineHome />}>Home</NavigationDrawerItem>
      <NavigationDrawerItem icon={() => <AiOutlineSetting />}>Settings</NavigationDrawerItem>
    </NavigationDrawer>
  );
}
