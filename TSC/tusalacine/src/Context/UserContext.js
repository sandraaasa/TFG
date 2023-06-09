import { createContext, useState } from 'react';

const UserContext = createContext();


const UserProvider = ({children}) => {
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('usuario')))

    const login = (usuario) => {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        setUser(JSON.parse(localStorage.getItem('usuario')));
    }

    const logout = () => {
        localStorage.removeItem('usuario');
        setUser(null);
    }

    const data = { user, login, logout }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider }
export default UserContext;