import { Tabs } from "@solidjs-material/core";
import { AiOutlineCompass, AiOutlineShopping } from "solid-icons/ai";

export function BasicExample() {
  return (
    <Tabs.Root
      hasIcons
      items={() => (
        <>
          <Tabs.Item icon={() => <AiOutlineShopping />} value="shop">
            Shop
          </Tabs.Item>
          <Tabs.Item icon={() => <AiOutlineCompass />} value="explore">
            Explore
          </Tabs.Item>
        </>
      )}
    >
      <Tabs.Content value="shop">Shop content</Tabs.Content>
      <Tabs.Content value="explore">Explore content</Tabs.Content>
    </Tabs.Root>
  );
}

export function WithoutIconsExample() {
  return (
    <Tabs.Root
      items={() => (
        <>
          <Tabs.Item value="shop">Shop</Tabs.Item>
          <Tabs.Item value="explore">Explore</Tabs.Item>
        </>
      )}
    >
      <Tabs.Content value="shop">Shop content</Tabs.Content>
      <Tabs.Content value="explore">Explore content</Tabs.Content>
    </Tabs.Root>
  );
}

export function SecondaryExample() {
  return (
    <Tabs.Root
      variant="secondary"
      items={() => (
        <>
          <Tabs.Item value="shop">Shop</Tabs.Item>
          <Tabs.Item value="explore">Explore</Tabs.Item>
        </>
      )}
    >
      <Tabs.Content value="shop">Shop content</Tabs.Content>
      <Tabs.Content value="explore">Explore content</Tabs.Content>
    </Tabs.Root>
  );
}
