import React, { useState } from "react";

import AuthenticationForm, { FormType } from "../../components/AuthenticationForm";
import Layout from "../../components/Layout";

import styles from "./index.module.scss";
import { login } from "../../services/useUserService";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/aim_ahead_logo.jpg";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import path from "../../routes/path";

const LoginPage = () => {
  const nav = useNavigate();
  const passwordRegex = /.*/;
  const [slot, setSlot] = useState<React.ReactNode>(null);

  const handleLogin = (email: string, password: string) =>
    login(email, password)
      .then(() => {
        nav(path.root);
      })
      .catch((error) => {
        setSlot(
          <div className={styles.errorContainer}>
            <ErrorOutlineIcon />
            <span className={styles.errorMessage}>{error.message}</span>
          </div>,
        );
      });

  const handleFormChange = () => {
    setSlot(null);
  };

  return (
    <Layout>
      <div className={styles.app}>
        <div className={styles.titleContainer}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <span className={styles.title}>Log In</span>
          <p className={styles.subtitle}>
            Welcome to participate in our AIM-AHEAD Clinical Decision Platform testing and shape the future of medical
            decision-making.
          </p>
        </div>
        <AuthenticationForm
          slot={slot}
          onChange={handleFormChange}
          pageType={FormType.Login}
          handelSubmit={handleLogin}
          passwordRegex={passwordRegex}
        />
      </div>
    </Layout>
  );
};

export default LoginPage;
