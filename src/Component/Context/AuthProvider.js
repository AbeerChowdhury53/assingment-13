import React, { createContext } from 'react';
import useFirebas from '../Hooks/usefirebas';



export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContexts= useFirebas()
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;