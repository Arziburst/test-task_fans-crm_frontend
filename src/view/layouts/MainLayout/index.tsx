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
        This test task demonstrates a simple login flow with three pages: a public
        page, a profile page, and a login page. In order to see the profile
        page, you must first login. Pretty standard stuff.
      </p>

      <p>
        First, visit the public page. Then, visit the profile page. You're not
        yet logged in, so you are redirected to the login page. After you login,
        you are redirected back to the profile page.
      </p>

      <p>
        Notice the URL change each time. If you click the back button at this
        point, would you expect to go back to the login page? No! You're already
        logged in. Try it out, and you'll see you go back to the page you
        visited just *before* logging in, the public page.
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
