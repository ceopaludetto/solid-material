import { render } from "@solidjs/testing-library";
import { AiOutlineHeart } from "solid-icons/ai";
import { describe, it, expect } from "vitest";

import { Button } from "~/components";

describe("Button", () => {
  it("should render", () => {
    const { asFragment } = render(() => <Button>Save</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render in tonal variant", () => {
    const { asFragment } = render(() => <Button variant="tonal">Save</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render in outlined variant", () => {
    const { asFragment } = render(() => <Button variant="outlined">Save</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render in text variant", () => {
    const { asFragment } = render(() => <Button variant="text">Save</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render disabled", () => {
    const { asFragment } = render(() => <Button isDisabled>Save</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with icons", () => {
    const { asFragment } = render(() => (
      <Button startIcon={<AiOutlineHeart />} endIcon={<AiOutlineHeart />}>
        Save
      </Button>
    ));

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render as custom element", () => {
    const { asFragment, getByText } = render(() => <Button as="a">Save</Button>);

    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Save/i)).toBeInstanceOf(HTMLAnchorElement);
  });
});
