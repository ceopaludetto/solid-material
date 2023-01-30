import { Button } from "@solidjs-material/core";
import { AiOutlineHeart } from "solid-icons/ai";

export function BasicExample() {
  return (
    <>
      <Button>Save</Button>
      <Button variant="tonal">Save</Button>
      <Button variant="outlined">Save</Button>
      <Button variant="text">Save</Button>
    </>
  );
}

export function IconsExample() {
  return (
    <>
      <Button startIcon={() => <AiOutlineHeart />}>Save</Button>
      <Button endIcon={() => <AiOutlineHeart />}>Save</Button>
    </>
  );
}

export function DisabledExample() {
  return (
    <>
      <Button isDisabled>Save</Button>
      <Button variant="tonal" isDisabled>
        Save
      </Button>
      <Button variant="outlined" isDisabled>
        Save
      </Button>
      <Button variant="text" isDisabled>
        Save
      </Button>
    </>
  );
}
