"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  ////////////////////////////////// TEMPORARY!!!
  const session = true;
  const isAdmin = true;
  /////////////////////////////////////////////////

  return (
    <div className={styles.container}>
      {/* desktop navbar */}
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {/* if user is authenticated */}
        {session ? (
          <>
            {/* if authenticated as Admin */}
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            {/* for any authenticated user */}
            <button className={styles.logoutButton}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      {/* mobile navbar */}
      <button
        className={styles.mobileMenuButton}
        onClick={() => setIsMenuOpened((prev) => !prev)}
      >
        Menu
      </button>

      {isMenuOpened && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
