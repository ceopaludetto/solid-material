import { Button } from "@solidjs-material/core";

import { Story } from "~/components";

export function ButtonDefault() {
  return (
    <Story>
      <Button>Filled</Button>
      <Button variant="tonal">Tonal</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </Story>
  );
}
