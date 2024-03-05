import React from "react";
import styles from "./index.module.scss";

const ExampleComponent = () => {
  return (
    <a
      className={styles.AppLink}
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  );
};

export default ExampleComponent;
