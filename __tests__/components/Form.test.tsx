/**
 * <Form /> Test Cases Requirements:
 * 
 * 1. it can set initialValue and validationSchema data.
 * 2. supports multiple form value in 1 component.
 * 3. supports returning of data using function.
 * 
 * Note: Please add requirements here if you add additional features
 *       in this component.
 * 
 */
import React, { useContext } from 'react';
import { create } from 'react-test-renderer';
import { Form, FormContext } from '../../src/index';

const INIT_VALUE = { "test": "Test Value" }
const INIT_VALUE_2 = { "test": "Test Value 2" }

const ChildTestComponent: React.FC = () => {
    const { initialValue } = useContext(FormContext)
    return <input value={initialValue.test} />
}

// TestComponent of Test cases #1 and #3
const TestComponent: React.FC = () => (
    <div>
        <Form initialValue={INIT_VALUE}>
            <ChildTestComponent />
        </Form>
        <Form initialValue={INIT_VALUE_2}>
            <ChildTestComponent />
        </Form>
    </div>
);

// TestComponent of test case #3
const TestComponent2: React.FC = () => (
    <Form initialValue={INIT_VALUE}>
        {({ values }) => <input value={values.test} />}
    </Form>
)

describe("<Form /> Test Cases", () => {

    test("Form Component if it can hold initial and validation schema", () => {
        const component = create(<TestComponent />);
        const root = component.root;
        const input = root.findAllByType("input")
        expect(input[0].props.value).toBe(INIT_VALUE.test)
    });

    test("Form must supports isolation of data.", () => {
        const component = create(<TestComponent />);
        const root = component.root;
        const input = root.findAllByType("input")
        expect(input[1].props.value).toBe(INIT_VALUE_2.test)
    });

    test("Form must supports functional children that gets the values.", () => {
        const component = create(<TestComponent2 />);
        const root = component.root;
        const input = root.findByType("input")
        expect(input.props.value).toBe(INIT_VALUE.test)
    });
});
