import { render } from "@solidjs/testing-library";
import { AiOutlineHeart } from "solid-icons/ai";
import { describe, it, expect } from "vitest";

import { IconButton } from "~/components";

describe("IconButton", () => {
  it("should render", () => {
    const { asFragment } = render(() => (
      <IconButton>
        <AiOutlineHeart />
      </IconButton>
    ));

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render in tonal variant", () => {
    const { asFragment } = render(() => (
      <IconButton variant="tonal">
        <AiOutlineHeart />
      </IconButton>
    ));

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render in outlined variant", () => {
    const { asFragment } = render(() => (
      <IconButton variant="outlined">
        <AiOutlineHeart />
      </IconButton>
    ));

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render in standard variant", () => {
    const { asFragment } = render(() => (
      <IconButton variant="standard">
        <AiOutlineHeart />
      </IconButton>
    ));

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render disabled", () => {
    const { asFragment } = render(() => (
      <IconButton isDisabled>
        <AiOutlineHeart />
      </IconButton>
    ));

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render as custom element", () => {
    const { asFragment, getByRole } = render(() => (
      <IconButton as="a">
        <AiOutlineHeart />
      </IconButton>
    ));

    expect(asFragment()).toMatchSnapshot();
    expect(getByRole(/button/i)).toBeInstanceOf(HTMLAnchorElement);
  });
});
