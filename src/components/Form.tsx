import React from 'react'
import { FormContextProvider } from '../context/FormContext'

interface FormProps {
    initialValue?: object;
    validationSchema?: object;
    provider?: React.Provider<any>;
    children?: object;
}

/**
 * The Parent who holds all the functions and values.
 * 
 * @param props [initialValue, validationSchema, provider, children]
 * @initalValue => the values of the form. @object [@Required]
 * @validationSchema => for yup validation. @object | @Shape [@Optional]
 * @provider => if you have another custom context outside of this library. @ReactProvider [@Optional]
 * @children => sub components of the Form. @object [@Optional]
 */
const Form: React.FC<FormProps> = (props: FormProps) => {
    const FormProvider: React.Provider<any> = props.provider || FormContextProvider;

    const getRenderedProps = function (): object {
        if (typeof props.children === "function")
            return props.children({ values: props.initialValue })
        return props.children
    }

    return (
        <FormProvider
            value={{ initialValue: props.initialValue, validationSchema: props.validationSchema }}>
            {getRenderedProps()}
        </FormProvider>
    )
}

export default Form