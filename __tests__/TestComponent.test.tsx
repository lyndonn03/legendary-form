import React from "react";
import { create, act, ReactTestRenderer } from "react-test-renderer";
import Count from "../src/TestComponent";

describe("<Count />", () => {
  it("should pass", () => {
    const count = <Count />;
    const component: ReactTestRenderer = create(count);
    const root = component.root;
    const h1 = root.findByType("h1");
    const button = root.findByType("button");
    expect(h1.props.children).toBe(0);
    act(() => {
      button.props.onClick();
    });
    expect(h1.props.children).toBe(1);
  });
});
