import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

import { cleanup } from "@solidjs/testing-library";
import matchers from "@testing-library/jest-dom/matchers";
import { afterEach, expect } from "vitest";

declare global {
  namespace Vi {
    interface JestAssertion<T = any> extends jest.Matchers<void, T>, TestingLibraryMatchers<T, void> {}
  }
}

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
