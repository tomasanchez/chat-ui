import './App.css'
import {CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {getTheme} from "./theme/themes.ts";
import {RouterProvider} from "react-router-dom";
import router from "./Router.tsx";
import {Suspense} from "react";
import LoadingPage from "./pages/LoadingPage.tsx";

function App() {

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    return (
        <ThemeProvider theme={getTheme(prefersDarkMode ? 'dark' : 'light')}>
            <CssBaseline/>
            <Suspense fallback={<LoadingPage/>}>
                <RouterProvider router={router}/>
            </Suspense>

        </ThemeProvider>
    )
}

export default App
