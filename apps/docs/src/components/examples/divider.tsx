import { Divider } from "@solidjs-material/core";

export function BasicExample() {
  return <Divider />;
}

export function VerticalExample() {
  return (
    <div class="h-10">
      <Divider orientation="vertical" />
    </div>
  );
}
