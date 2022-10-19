import React from "react";
import { Header } from "./components";
import { AboutImage } from "../images";
import Image from "next/image";
import styles from "../styles/Home.module.css";
function About() {
  return (
    <div className={styles.about__content}>
      <div className={styles.about__left}>
        <h2>About Me</h2>
        <h3>
          Nooruddin Rahmani is a self-taught web developer. One who finds web
          development to be a fascinating subject in which to learn and advance.
          He fuels his passion by learning what makes programs more interesting
          to users. He is a huge fan of hands-on learning. Nooruddin is
          searching for opportunities as a designer or a Developer right now. To
          connect, mail to nooruddin.rahmani100@gmail.com. Download his resume
          for additional information.
        </h3>
        <button className={styles.button__about}>
          <p>Download My Resume</p>
        </button>
      </div>
      <div className={styles.about__right}>
        <Image src={AboutImage} alt='About' />
      </div>
    </div>
  );
}

export default About;
