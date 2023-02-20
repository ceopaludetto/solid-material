import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";

import { Divider } from "~/components";

describe("Divider", () => {
  it("should render", () => {
    const { asFragment } = render(() => <Divider />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render in vertical orientation", () => {
    const { asFragment } = render(() => <Divider orientation="vertical" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
