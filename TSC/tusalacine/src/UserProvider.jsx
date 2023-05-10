import React, { useContext, useState} from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext(){
    return useContext(userContext);
}

export function useUserToggleContext(){
    return useContext(userToggleContext);
}

export function UserProvider({children}) {

    const [user, setUser] = useState(null);

    const cambiarLogin = () => {
        if (user) {
        setUser(null);
        } else {
        setUser({
            name: 'sandra',
            email: 'sandra@email.com'
        })
        }
    }

    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={cambiarLogin}>
                {children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}