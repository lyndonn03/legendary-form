import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { useForm } from "../src/";

const TestComponent = () => {
  const [data, { setValue }] = useForm({ sample1: "Test" });

  const handleChange = () => setValue("sample1", "Test Change");

  const handleReset = () => setValue("sample1", "Test");

  return (
    <Fragment>
      <div>{data.sample1}</div>
      <button onClick={handleChange}>Click to Change</button>
      &nbsp;
      <button onClick={handleReset}>Reset</button>
    </Fragment>
  );
};

storiesOf("Form", module).add("Set Value", () => <TestComponent />);
