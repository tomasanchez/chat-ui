import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";
import {URLs} from "./routes/BrowserProvider.ts";

const Landing = lazy(() => import('./pages/Landing'));


const router = createBrowserRouter(
    [
        {
            path: URLs.HOME,
            element: <Landing/>
        },
    ]
)

export default router