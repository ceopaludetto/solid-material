import { Switch } from "@solidjs-material/core";

export function BasicExample() {
  return <Switch label="Dark theme" />;
}

export function DisabledExample() {
  return (
    <>
      <Switch label="Dark theme" isDisabled />
      <Switch label="Dark theme" defaultIsChecked isDisabled />
    </>
  );
}
