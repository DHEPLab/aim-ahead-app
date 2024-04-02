import React from "react";
import styles from "./index.module.scss";
import logo from "../../assets/images/logo.svg";
import ExampleComponent from "../../components/ExampleComponent";
import { useNavigate } from "react-router-dom";
import { useMount, useRequest } from "ahooks";
import { getUserDetail } from "../../services/userService";

const useGetUserDetail = () => {
  const { loading, runAsync, data } = useRequest(getUserDetail, {
    manual: true,
  });
  return { loading, getUserDetail: runAsync, user: data?.data };
};

const ExampleUserPage = () => {
  const navigate = useNavigate();
  const { getUserDetail, user } = useGetUserDetail();

  useMount(() => {
    getUserDetail();
  });

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>This is User page</p>
        <p style={{ color: "yellow", textDecoration: "underline" }} onClick={() => navigate("/")}>
          Go to Home Page
        </p>
        <p>User Name: {user ? user.name : ""}</p>
        <ExampleComponent />
      </header>
    </div>
  );
};

export default ExampleUserPage;
