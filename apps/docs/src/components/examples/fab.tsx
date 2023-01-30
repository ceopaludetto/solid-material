import { FAB } from "@solidjs-material/core";
import { AiOutlinePlus } from "solid-icons/ai";

export function BasicExample() {
  return (
    <>
      <FAB icon={<AiOutlinePlus />} />
      <FAB icon={<AiOutlinePlus />} variant="secondary" />
      <FAB icon={<AiOutlinePlus />} variant="tertiary" />
    </>
  );
}

export function SizeExample() {
  return (
    <>
      <FAB icon={<AiOutlinePlus />} size="small" />
      <FAB icon={<AiOutlinePlus />} size="medium" />
      <FAB icon={<AiOutlinePlus />} size="large" />
    </>
  );
}

export function ExtendedExample() {
  return <FAB icon={<AiOutlinePlus />}>Add</FAB>;
}
