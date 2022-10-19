import React from "react";
import Image from "next/image";
import { vectorblack } from "../../../images";
import Link from "next/link";
function Header(props) {
  const styles = props.styles;
  return (
    <div className={styles.app__header}>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <Link href='/'>
            <a> Mootassam</a>
          </Link>
          <div className={styles.logo__vector}>
            <Image src={vectorblack} />
          </div>
        </div>
        <div className={styles.header__links}>
          <ul>
            <Link href='/About' passHref={true}>
              <li>About</li>
            </Link>
            <Link href='/Work'>
              <li>Works</li>
            </Link>
            <Link href='/Contact'>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
