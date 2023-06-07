import { createContext, useState } from 'react';

const ThemContext = createContext();


const ThemProvider = ({children}) => {
    const [ theme, setTheme ] = useState(false)


    const changeTheme = (theme) => {
        setTheme(theme);
    }

    const data = { theme, changeTheme }

    return (
        <ThemContext.Provider value={data}>
            {children}
        </ThemContext.Provider>
    )
}

export { ThemProvider }
export default ThemContext;