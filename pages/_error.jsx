import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Header } from "./components";
import { Forbidden } from "../images";

function _error() {
  return (
    <div className={styles.app__404}>
      <Header styles={styles} />
      <div className={styles.error__message}>
        <div className={styles.message__left}>
          <h1> This is not the page you are looking for.</h1>
        </div>
        <div className={styles.message__right}>
          <Image src={Forbidden} width='423' height='474' />
        </div>
      </div>
    </div>
  );
}

export default _error;
