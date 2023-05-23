import React from "react";
import styles from "./Nav.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <img className={styles.logo} src={logo} alt="netflix logo" />

        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/tv-shows">TV Shows</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <img
          className={styles.profile}
          src="https://via.placeholder.com/150"
          alt="profile"
        />
      </div>
    </nav>
  );
};

export default Nav;
