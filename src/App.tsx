import './App.css'
import {CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {getTheme} from "./theme/themes.ts";

function App() {

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    return (
        <ThemeProvider theme={getTheme(prefersDarkMode ? 'dark' : 'light')}>
            <CssBaseline/>
            <div className="App">
                <h1>Hello world!</h1>
            </div>
        </ThemeProvider>
    )
}

export default App
