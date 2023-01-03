import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer = createContext allows each datalayer to access it
export const StateContext = createContext();

// Wrap our app and provide the Data layer. For each layer allows access to get data from the state provider. 
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Push and Pull information from the data layer
export const useStateValue = () => useContext(StateContext);


//useStateValue allows to push and pull data from the data layer