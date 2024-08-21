import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts";
import { LoginPage, ProfilePage, PublicPage, RegisterPage } from "../pages";

import {BOOK} from './book'

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
                Component: LoginPage,
            },
            {
                path: BOOK.PROFILE,
                Component: ProfilePage,
            },
            {
                path: BOOK.REGISTER,
                Component: RegisterPage,
            },
        ],
    }
], {
    basename: "/"
});