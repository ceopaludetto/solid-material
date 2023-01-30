import { IconButton } from "@solidjs-material/core";
import { AiOutlineHeart } from "solid-icons/ai";

export function BasicExample() {
  return (
    <>
      <IconButton aria-label="Heart">
        <AiOutlineHeart />
      </IconButton>
      <IconButton aria-label="Heart" variant="tonal">
        <AiOutlineHeart />
      </IconButton>
      <IconButton aria-label="Heart" variant="outlined">
        <AiOutlineHeart />
      </IconButton>
      <IconButton aria-label="Heart" variant="standard">
        <AiOutlineHeart />
      </IconButton>
    </>
  );
}

export function DisabledExample() {
  return (
    <>
      <IconButton aria-label="Heart" isDisabled>
        <AiOutlineHeart />
      </IconButton>
      <IconButton aria-label="Heart" variant="tonal" isDisabled>
        <AiOutlineHeart />
      </IconButton>
      <IconButton aria-label="Heart" variant="outlined" isDisabled>
        <AiOutlineHeart />
      </IconButton>
      <IconButton aria-label="Heart" variant="standard" isDisabled>
        <AiOutlineHeart />
      </IconButton>
    </>
  );
}
