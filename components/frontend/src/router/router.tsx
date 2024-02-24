import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../pages/LayoutPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'auth',
                element: <AuthPage />,
            }
        ]
    }
])