import React, { useState } from "react";

import AuthenticationForm, { FormType } from "../../components/AuthenticationForm";
import Layout from "../../components/Layout";

import styles from "./index.module.scss";
import { login } from "../../services/useUserService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const nav = useNavigate();
  const passwordRegex = /.*/;
  const [slot, setSlot] = useState<React.ReactNode>(null);

  const handleLogin = (email: string, password: string) =>
    login(email, password)
      .then(() => {
        nav("/");
      })
      .catch((error) => {
        setSlot(<div className={styles.error}>{error.message}</div>);
      });

  const handleFormchange = () => {
    setSlot(null);
  };

  return (
    <Layout>
      <div className={styles.app}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Login</span>
        </div>
        <AuthenticationForm
          slot={slot}
          onChange={handleFormchange}
          pageType={FormType.Login}
          handelSubmit={handleLogin}
          passwordRegex={passwordRegex}
        />
      </div>
    </Layout>
  );
};

export default LoginPage;
