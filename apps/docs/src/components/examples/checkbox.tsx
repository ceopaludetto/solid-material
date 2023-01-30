import { Checkbox } from "@solidjs-material/core";
import { AiOutlineCheck, AiOutlineMinus } from "solid-icons/ai";

export function BasicExample() {
  return (
    <Checkbox label="Accept terms" checkIcon={() => <AiOutlineCheck />} indeterminateIcon={() => <AiOutlineMinus />} />
  );
}

export function IndeterminateExample() {
  return (
    <Checkbox
      label="Accept terms"
      checkIcon={() => <AiOutlineCheck />}
      indeterminateIcon={() => <AiOutlineMinus />}
      isIndeterminate
    />
  );
}

export function DisabledExample() {
  return (
    <>
      <Checkbox
        label="Accept terms"
        checkIcon={() => <AiOutlineCheck />}
        indeterminateIcon={() => <AiOutlineMinus />}
        isDisabled
      />
      <Checkbox
        label="Accept terms"
        checkIcon={() => <AiOutlineCheck />}
        indeterminateIcon={() => <AiOutlineMinus />}
        defaultIsChecked
        isDisabled
      />
    </>
  );
}
