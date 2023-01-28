import type { DialogContentProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { Dialog, Button } from "@solidjs-material/core";
import { Heart } from "lucide-solid";
import { createSignal } from "solid-js";

export default {
  title: "Dialog",
  args: {
    defaultIsOpen: true,
    title: "Want delete?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et necessitatibus aspernatur labore veritatis consectetur consequuntur nostrum, autem molestias distinctio officiis iusto amet est atque? Magnam ratione enim dolorum nam ipsa?",
  },
  render: (props) => <Dialog.Content {...props} />,
} as Meta<DialogContentProps>;

export const Default: StoryObj<DialogContentProps> = {};

export const WithActions: StoryObj<DialogContentProps> = {
  render: (props) => {
    const [open, setOpen] = createSignal(true);

    return (
      <Dialog.Content
        isOpen={open()}
        onOpenChange={setOpen}
        endAdornment={() => (
          <>
            <Button variant="text" onPress={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="text" onPress={() => setOpen(false)}>
              Yes
            </Button>
          </>
        )}
        {...props}
      />
    );
  },
};

export const WithIcon: StoryObj<DialogContentProps> = {
  args: { icon: <Heart /> },
};

export const WithTrigger: StoryObj<DialogContentProps> = {
  args: { children: () => <Dialog.Trigger as={Button}>Open</Dialog.Trigger> },
};
