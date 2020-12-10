import React from "react";
import Link from "next/link";
import styles from "../styles/index.module.scss";

const index = () => {
  return (
    <div className={styles.Home}>
      <h1>This is home page.</h1>
      <Link href="/second">To Second Page</Link>
    </div>
  );
};

export default index;
