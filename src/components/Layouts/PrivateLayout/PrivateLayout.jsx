import React from "react";
import styles from "./PrivateLayout.module.css";
import { Outlet } from "react-router-dom";
import Nav from "../../Nav/Nav";

const PrivateLayout = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
