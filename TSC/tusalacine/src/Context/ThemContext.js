import { createContext, useState } from 'react';

const ThemContext = createContext();


const ThemProvider = ({children}) => {
    const [ theme, setTheme ] = useState(false)


    const cambiarTheme = (theme) => {
        setTheme(theme);
    }

    const data = { theme, cambiarTheme }

    return (
        <ThemContext.Provider value={data}>
            {children}
        </ThemContext.Provider>
    )
}

export { ThemProvider }
export default ThemContext;