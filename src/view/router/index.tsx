// import type { LoaderFunctionArgs } from "react-router-dom";
import { createBrowserRouter/* , replace */ } from "react-router-dom";

import { MainLayout } from "../layouts";
import { LoginPage, ProfilePage, PublicPage, RegisterPage } from "../pages";

import {BOOK} from './book'

// import { reduxStore } from "../../init";

// const protectedLoader = ({ request, params }: LoaderFunctionArgs) => {
//     console.log(1);
//     if (reduxStore.getState().auth.authStatus === "logged-out") {
        
//         return replace(BOOK.LOGIN);
//     }
//     return null;
// }

// async function loginLoader() {
//     console.log(2);
//     if (reduxStore.getState().auth.authStatus === "logged-in") {
        
//         return replace(BOOK.PROFILE);
//     }
//     return null;
// }

export const router = createBrowserRouter([
    {
        path: BOOK.ROOT,
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: PublicPage,
            },
            {
                path: BOOK.LOGIN,
                // loader: loginLoader,
                Component: LoginPage,
            },
            {
                path: BOOK.PROFILE,
                // loader: protectedLoader,
                Component: ProfilePage,
            },
            {
                path: BOOK.REGISTER,
                // loader: protectedLoader,
                Component: RegisterPage,
            },
        ],
    }
], {
    basename: "/"
});