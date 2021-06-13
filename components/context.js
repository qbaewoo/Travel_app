import React, { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from '../components/reducer';

export const AuthContext = createContext();

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    return (
        <AppContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </AppContext.Provider>
    );
};