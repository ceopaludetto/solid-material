import { describe, expect, it } from "vitest";

import { filterMouseEvent, getClientPosition, isKeyboardEvent, isPointerEvent } from "~/utils/dom";

describe("isPointerEvent", () => {
  it("should return true when object has pointerType property", () => {
    expect(isPointerEvent({})).toBeFalsy();
    expect(isPointerEvent({ pointerType: "mouse" })).toBeTruthy();
  });
});

describe("isKeyEvent", () => {
  it("should return true when object has pointerType property", () => {
    expect(isKeyboardEvent({})).toBeFalsy();
    expect(isKeyboardEvent({ key: "Enter" })).toBeTruthy();
  });
});

describe.concurrent("getClientPosition", () => {
  it("should return 0 when is not pointer event", () => {
    expect(getClientPosition({} as any)).toStrictEqual({ clientX: 0, clientY: 0 });
  });

  it("should return clientX and clientY when is pointer event", () => {
    const event = { pointerType: "mouse", clientX: 10, clientY: 20 };
    expect(getClientPosition(event as any)).toStrictEqual({ clientX: 10, clientY: 20 });
  });
});

describe.concurrent("filterMouseEvent", () => {
  it("should return event when is not pointer event", () => {
    const event = {};
    expect(filterMouseEvent(event)).toStrictEqual(event);
  });

  it("should return event when is pointer event and button is equal to 0", () => {
    const event = { button: 0, pointerType: "mouse" };
    expect(filterMouseEvent(event)).toStrictEqual(event);
  });

  it("should return null when is pointer event and button is differente from 0", () => {
    const event = { button: 1, pointerType: "mouse" };
    expect(filterMouseEvent(event)).toBeNull();
  });
});
