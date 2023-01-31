import { FAB } from "@solidjs-material/core";
import { AiOutlinePlus } from "solid-icons/ai";

export function BasicExample() {
  return (
    <>
      <FAB icon={<AiOutlinePlus />} aria-label="Add" />
      <FAB icon={<AiOutlinePlus />} aria-label="Add" variant="secondary" />
      <FAB icon={<AiOutlinePlus />} aria-label="Add" variant="tertiary" />
    </>
  );
}

export function SizeExample() {
  return (
    <>
      <FAB icon={<AiOutlinePlus />} aria-label="Add" size="small" />
      <FAB icon={<AiOutlinePlus />} aria-label="Add" size="medium" />
      <FAB icon={<AiOutlinePlus />} aria-label="Add" size="large" />
    </>
  );
}

export function ExtendedExample() {
  return <FAB icon={<AiOutlinePlus />}>Add</FAB>;
}
