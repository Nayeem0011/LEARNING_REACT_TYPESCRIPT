import type { Action, State } from "../types/state";

export const initialState: State ={
    count: 0
}

export const counterReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increment": return { count: state.count + 1};
        case "decrement": return { count: state.count - 1};
            
            
    
      default: return state
            
    }
}