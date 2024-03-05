import React from "react";
import styles from "./index.module.scss";
import logo from "../../assets/images/logo.svg";
import ExampleComponent from "../../components/ExampleComponent";

function ExamplePage() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ExampleComponent />
      </header>
    </div>
  );
}

export default ExamplePage;
