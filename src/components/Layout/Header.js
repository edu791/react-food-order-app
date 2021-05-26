import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src="" alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
}
