import React from "react";
import styles from "./LoginView.module.css";
import ListProfiles from "../components/ListProfiles/ListProfiles";

const LoginView = () => {
  return (
    <div className={styles.loginView}>
      <ListProfiles />
    </div>
  );
};

export default LoginView;
