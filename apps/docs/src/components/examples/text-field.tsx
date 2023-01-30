import { IconButton, TextField } from "@solidjs-material/core";
import { AiOutlineEye, AiOutlineUser } from "solid-icons/ai";

export function BasicExample() {
  return <TextField label="E-mail" />;
}

export function AdornmentExample() {
  return (
    <>
      <TextField label="E-mail" startAdornment={() => <AiOutlineUser class="text-icon-medium" />} />
      <TextField
        label="E-mail"
        endAdornment={() => (
          <IconButton variant="standard">
            <AiOutlineEye />
          </IconButton>
        )}
      />
    </>
  );
}

export function DescriptionExample() {
  return <TextField label="E-mail" description="Some random description" />;
}

export function ErrorExample() {
  return <TextField label="E-mail" description="Some random error" validationState="invalid" />;
}

export function DisabledExample() {
  return <TextField label="E-mail" isDisabled />;
}
