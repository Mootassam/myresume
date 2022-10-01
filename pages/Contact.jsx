import React from "react";
import { Header } from "./components";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ContactImage } from "../images";
function Contact() {
  return (
    <>
      <Header styles={styles} />
      <div className={styles.app__contact}>
        <div className={styles.contact__top}>
          <h2>Contact Me </h2>
          <Image src={ContactImage} />
        </div>
        <div className={styles.contact__form}>
          <div className={styles.left}>
            <div className={styles.circle}></div>
            Home
          </div>
          <div className={styles.contact__content}>
            <div className={styles.contact__adresse}>
              nooruddin.rahmani100@gmail.com <br /> +93 774 995 013 <br /> 5th
              Avenue, Kunduz, Afghanistan
            </div>
            <div className={styles.contact__formulaire}>
              <form action=''>
                <input type='text' placeholder='Name' />
                <input type='text' placeholder='Email' />
                <textarea name='' id='' cols='30' rows='10'>
                  Message
                </textarea>
                <button className={styles.button__about}>
                  <p> Send </p>
                </button>
              </form>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.circle}></div>
            Works
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
