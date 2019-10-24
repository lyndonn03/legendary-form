import React, { Fragment } from "react";
import { create, act } from "react-test-renderer";
import { useForm } from "../../src/index";

const TestComponent = () => {
  const [data, { setValue }] = useForm({ sample1: "Test" });

  const handleChange = () => setValue("sample1", "Test Change");

  return (
    <Fragment>
      <div>{data.sample1}</div>
      <button onClick={handleChange}>Click</button>
    </Fragment>
  );
};

describe("FormContext Test Cases", () => {
  it("should pass if components read the FormContext Values", () => {
    const component = create(<TestComponent />);
    const root = component.root;
    const returnedDiv = root.findByType("div");
    expect(returnedDiv.props.children).toBe("Test");
  });

  it("should pass if the setValue changes the value of a key in FormContext", () => {
    const component = create(<TestComponent />);
    const root = component.root;
    const returnedDiv = root.findByType("div");
    const returnedButton = root.findByType("button");
    act(() => returnedButton.props.onClick());
    expect(returnedDiv.props.children).toBe("Test Change");
  });
});
