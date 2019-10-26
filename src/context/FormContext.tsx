import React from 'react'

/** Type of required values of the context */
interface InitStateType {
    initialValue: any;
    validationSchema?: object;
}

/** Initial Value */
const INIT_STATE = { initialValue: {} }

/**
 * FormContext:
 * 
 * Context to hold all the data of the form as JSON
 * 
 * returns @Object
 */
const FormContext: React.Context<InitStateType> =
    React.createContext<InitStateType>(INIT_STATE);


/**
 * FormContextProvider:
 * 
 * Creates the default of the FormContext.
 * This will be use to change the initial value of the FormContext.
 * 
 * returns @Provider
 */
const FormContextProvider: React.Provider<object> = FormContext.Provider;


/** export */
export {
    FormContext,
    FormContextProvider,
    InitStateType
}