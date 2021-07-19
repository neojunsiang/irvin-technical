//* Importing modules that will set up the data layer to track all data
import React, { createContext, useContext, useReducer } from 'react'

//* Creating of Data Layer
const StateContext = createContext();

//* Build a provider for all data from the Data Layer to the children component that needs it
const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}


//* Using the data layer inside a component
const useStateValue = () => useContext(StateContext);

//* Exporting the modules
export { StateContext, StateProvider, useStateValue };
