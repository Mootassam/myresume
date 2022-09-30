import React from "react";
import Image from "next/image";
import { vectorblack } from "../../images";
function Header(props) {
  const styles = props.styles;
  return (
    <div className={styles.app__header}>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          Mootassam
          <div className={styles.logo__vector}>
            <Image src={vectorblack} />
          </div>
        </div>
        <div className={styles.header__links}>
          <ul>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
