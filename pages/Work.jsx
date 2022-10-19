import React from "react";
import { Header } from "./components";
import styles from "../styles/Home.module.css";
import { WorkImage } from "../images";
import Image from "next/image";

function Work() {
  return (
    <>
      <div>
        <div className={styles.contact__top}>
          <h2>My Works </h2>
          <Image src={WorkImage} />
        </div>
        <div className={styles.contact__form}>
          <div className={styles.work__content}>
            <ul>
              <li style={{ width: 401, height: 400 }}></li>
              <li style={{ width: 444, height: 336 }}></li>
              <li style={{ width: 539, height: 324 }}></li>
              <li style={{ width: 306, height: 384 }}></li>
            </ul>
            <div className={styles.more}> See more </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
