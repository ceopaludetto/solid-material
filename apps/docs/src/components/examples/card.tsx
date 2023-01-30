import { Button, Card } from "@solidjs-material/core";

export function BasicExample() {
  return (
    <>
      <Card class="p-5">Some content</Card>
      <Card variant="outlined" class="p-5">
        Some content
      </Card>
    </>
  );
}

export function CompositionExample() {
  return (
    <Card class="p-5">
      Some content
      <div class="mt-2 flex items-center gap-x-2 text-right">
        <Button variant="text">Cancel</Button>
        <Button variant="outlined">Cool</Button>
      </div>
    </Card>
  );
}
