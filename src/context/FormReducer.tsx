import React from 'react'

const SET_VALUE: string = "SET_VALUE";

const FormReducer = function (state: any, action: Function): object {

    return {}
}

const useFormReducer = function (value): object {
    const [state, dispatch] = React.useReducer<any>(FormReducer, {})

    const setValue = function (): void {
        dispatch({ value, type: SET_VALUE })
    }

    return {}
}

export {
    useFormReducer
}