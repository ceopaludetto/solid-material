import { render } from "@solidjs/testing-library";
import { AiOutlineHeart } from "solid-icons/ai";
import { describe, expect, it } from "vitest";

import { FAB } from "~/components";

describe("FAB", () => {
  it("should render", () => {
    const { asFragment } = render(() => <FAB icon={<AiOutlineHeart />} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render in secondary variant", () => {
    const { asFragment } = render(() => <FAB variant="secondary" icon={<AiOutlineHeart />} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render in tertiary variant", () => {
    const { asFragment } = render(() => <FAB variant="tertiary" icon={<AiOutlineHeart />} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render in large size", () => {
    const { asFragment } = render(() => <FAB size="large" icon={<AiOutlineHeart />} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render in small size", () => {
    const { asFragment } = render(() => <FAB size="small" icon={<AiOutlineHeart />} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render in extended mode", () => {
    const { asFragment } = render(() => <FAB icon={<AiOutlineHeart />}>Heart</FAB>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should always render in medium size when it is in extended mode", () => {
    const { asFragment } = render(() => (
      <FAB size="large" icon={<AiOutlineHeart />}>
        Heart
      </FAB>
    ));

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render as custom element", () => {
    const { asFragment, getByText } = render(() => <FAB as="a">Heart</FAB>);

    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Heart/i)).toBeInstanceOf(HTMLAnchorElement);
  });
});
