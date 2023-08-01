import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";
import { useSession, signOut } from "next-auth/react";

function MainNavigation() {
  const { data: session, status } = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/list">List of lakes</Link>
          </li>
          <li>
            <Link href="/add">Add new lake</Link>
          </li>
          {!session && (
            <li>
              <Link href="/auth">Login/Register form</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
