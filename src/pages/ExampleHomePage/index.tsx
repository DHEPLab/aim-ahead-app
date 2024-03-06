import React from "react";
import styles from "./index.module.scss";
import logo from "../../assets/images/logo.svg";
import ExampleComponent from "../../components/ExampleComponent";
import { useNavigate } from "react-router-dom";

const ExampleHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>This is Home Page</p>
        <p style={{ color: "yellow", textDecoration: "underline" }} onClick={() => navigate("/user")}>
          Go to User Page
        </p>
        <ExampleComponent />
      </header>
    </div>
  );
};

export default ExampleHomePage;
