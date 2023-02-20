import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";

import { Card } from "~/components";

describe("Card", () => {
  it("should render", () => {
    const { asFragment } = render(() => <Card>Test</Card>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with outlined variant", () => {
    const { asFragment } = render(() => <Card variant="outlined">Test</Card>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render as custom element", () => {
    const { asFragment, getByText } = render(() => <Card as="button">Test</Card>);

    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Test/i)).toBeInstanceOf(HTMLButtonElement);
  });
});
