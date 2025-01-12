import React, { useEffect, createContext, useState, useContext } from 'react';
import { getSession } from '../appWrite';

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
    const [LocalSession, setLocalSession] = useState(null);

    useEffect(() => {
        const checkSession = async () => {
            try {
                console.log("Checking session...");

                if (!LocalSession) {
                    const sessionFromServer = await getSession();
                    console.log("Session from server:", sessionFromServer);

                    if (sessionFromServer.success) {
                        setLocalSession(sessionFromServer.session);
                    }
                }
            } catch (error) {
                console.error("Error in checkSession:", error);
            }
        };

        checkSession();
    }, []);

    return (
        <Context.Provider value={{ LocalSession, setLocalSession }}>
            {children}
        </Context.Provider>
    );
};

export const useCustomContext = () => {
    const customContext = useContext(Context);
    if (!customContext) {
        throw new Error('Missing Required Context');
    }
    return customContext;
};

export default ContextProvider;