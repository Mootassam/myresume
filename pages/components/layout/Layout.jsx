import React from "react";
import styles from "../../../styles/Home.module.css";
import Header from "./Header";

function Layout(props) {
  return (
    <div className={styles.app}>
      <Header styles={styles} />
      <div className={styles.contact__form}>
        <div className={styles.left}>
          <div className={styles.circle}></div>
          Home
        </div>
        {props.children}
        <div className={styles.right}>
          <div className={styles.circle}></div>
          Works
        </div>
      </div>
    </div>
  );
}

export default Layout;
