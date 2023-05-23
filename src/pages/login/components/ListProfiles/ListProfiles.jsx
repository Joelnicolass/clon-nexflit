import React from "react";

import styles from "./ListProfiles.module.css";
import AddProfile from "../AddProfile/AddProfile";
import CardProfile from "../CardProfile/CardProfile";

const ListProfiles = () => {
  return (
    <div className={styles.listProfiles}>
      <CardProfile name={"User 1"} src="https://via.placeholder.com/150" />
      <CardProfile name={"User 2"} src="https://via.placeholder.com/150" />
      <CardProfile name={"User 3"} src="https://via.placeholder.com/150" />
      <CardProfile name={"User 4"} src="https://via.placeholder.com/150" />
      <AddProfile />
    </div>
  );
};

export default ListProfiles;
