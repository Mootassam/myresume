import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../components";
import { HomeImage } from "../images";
export default function Index() {
  return (
    <div className={styles.app}>
      <Header styles={styles} />
      <div className={styles.app__content}>
        <div className={styles.content__image}>
          <Image src={HomeImage} />
        </div>
        <h1>Hi, I’m Nooruddin</h1>
        <div className={styles.sub__header}>I turn design into code </div>
        <div className={styles.detaill}>
          I am a self-taught web developer with a positive drive to improve.
        </div>
        <div className={styles.content__button}>
          <button className={styles.button__about}>
            <p> About Me </p>
          </button>
          <button className={styles.button__work}>
            <p> My Works </p>
          </button>
        </div>
      </div>
    </div>
  );
}
