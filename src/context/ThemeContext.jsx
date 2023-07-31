import { createContext, useState } from "react";


export const ThemeContext = createContext()

const ThemeProvider =({children})=>{

const [myTheme, setMyTheme] = useState("light")

    return(
        <ThemeContext.Provider value={{myTheme, setMyTheme}}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider