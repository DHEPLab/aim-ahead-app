import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthenticationForm, { FormType } from "../../components/AuthenticationForm";
import Layout from "../../components/Layout";
import { signup } from "../../services/useUserService";
import { passwordPattern } from "../../utils/regexp";
import path from "../../routes/path";
import logo from "../../assets/images/aim_ahead_logo.jpg";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import styles from "./index.module.scss";
import Snackbar from "@mui/material/Snackbar";

const SignUpPage = () => {
  const nav = useNavigate();
  const [slot, setSlot] = useState<React.ReactNode>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSignUp = (email: string, password: string) =>
    signup(email, password)
      .then(() => {
        setShowToast(true);
        setTimeout(function () {
          nav(path.login);
        }, 2000);
      })
      .catch((error) => {
        setSlot(
          <div className={styles.errorContainer}>
            <ErrorOutlineIcon />
            <span className={styles.errorMessage}>{error.message}</span>
          </div>,
        );
      });

  const handleFormchange = () => {
    setSlot(null);
  };

  return (
    <Layout>
      <div className={styles.app}>
        <div className={styles.titleContainer}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <span className={styles.title}>Sign Up</span>
          <p className={styles.subtitle}>
            Welcome to participate in our AIM-AHEAD Clinical Decision Platform testing and shape the future of medical
            decision-making.
          </p>
        </div>
        <AuthenticationForm
          slot={slot}
          onChange={handleFormchange}
          pageType={FormType.SignUp}
          handelSubmit={handleSignUp}
          passwordRegex={passwordPattern}
        />
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={showToast}
          onClose={() => setShowToast(false)}
          autoHideDuration={3000}
          message="Sign up completed! Please log in."
        />
      </div>
    </Layout>
  );
};

export default SignUpPage;
