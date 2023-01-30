import { FAB, IconButton, NavigationItem, NavigationRail } from "@solidjs-material/core";
import { AiOutlineHome, AiOutlineMenu, AiOutlinePlus, AiOutlineSetting } from "solid-icons/ai";

export function BasicExample() {
  return (
    <NavigationRail>
      <NavigationItem icon={() => <AiOutlineHome />}>Home</NavigationItem>
      <NavigationItem icon={() => <AiOutlineSetting />}>Settings</NavigationItem>
    </NavigationRail>
  );
}

export function ActiveExample() {
  return (
    <NavigationRail>
      <NavigationItem active icon={() => <AiOutlineHome />}>
        Home
      </NavigationItem>
      <NavigationItem icon={() => <AiOutlineSetting />}>Settings</NavigationItem>
    </NavigationRail>
  );
}

export function AdornmentExample() {
  return (
    <NavigationRail
      startAdornment={() => (
        <>
          <IconButton aria-label="Menu" variant="standard">
            <AiOutlineMenu />
          </IconButton>
          <FAB aria-label="Add" variant="tertiary" icon={() => <AiOutlinePlus />} />
        </>
      )}
    >
      <NavigationItem icon={() => <AiOutlineHome />}>Home</NavigationItem>
      <NavigationItem icon={() => <AiOutlineSetting />}>Settings</NavigationItem>
    </NavigationRail>
  );
}
