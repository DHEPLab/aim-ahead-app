import React from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const ExampleHomePage = () => {
  const navigate = useNavigate();

  return <div className={styles.app}>Home page</div>;
};

export default ExampleHomePage;
