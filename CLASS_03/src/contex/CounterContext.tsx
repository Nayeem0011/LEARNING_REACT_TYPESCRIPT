import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Action, State } from "../types/state";
import { counterReducer, initialState } from "../reducers/counterReducer";

const CounterContex = createContext<{
    state: State,
    dispatch: React.Dispatch<Action>
} | undefined>(undefined)

export const CounterProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer( counterReducer, initialState )

    return (
        <CounterContex.Provider value={{state, dispatch}}>
            {children}
        </CounterContex.Provider>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useCounter = () => {
    const context = useContext(CounterContex)
    if (!context) throw new Error ("useContext must be used withing provider")

        return context
}