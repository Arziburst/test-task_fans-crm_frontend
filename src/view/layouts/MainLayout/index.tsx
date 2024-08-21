import {
  Link,
  Outlet,
} from "react-router-dom";

import {BOOK} from '../../router/book'

import {AuthStatus} from '../../components'

export const MainLayout = () => {
  return (
    <div>
      <h1>Test task for Full Stack Developer fans-crm.com</h1>

      <p>
        This test task demonstrates a simple login flow with four pages: a public
        page, a profile page, register page, and a login page. In order to see the profile
        page, you must first login. Pretty standard stuff.
      </p>

      <AuthStatus />

      <ul>
        <li>
          <Link to={BOOK.ROOT}>public Page</Link>
        </li>
        <li>
          <Link to={BOOK.PROFILE}>profile Page</Link>
        </li>
        <li>
          <Link to={BOOK.REGISTER}>register Page</Link>
        </li>
        <li>
          <Link to={BOOK.LOGIN}>login Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
