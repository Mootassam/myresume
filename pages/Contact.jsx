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
              <div className='email'>
                <p>mootassame@gmail.com </p>
              </div>
              <div className='phoneNumber'>
                <p>+216 55 169 120 </p>
              </div>
              <div className='address'>
                <p>5th Avenue, Kunduz, Afghanistan </p>
              </div>
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
