import React from "react";
import styles from "./index.module.scss";
import { useRequest } from "ahooks";
import { getHealthCheck } from "../../services/healthCheckService";

const ExampleHomePage = () => {
  const { loading, data } = useRequest(getHealthCheck);

  return (
    <>
      <div className={styles.app}>Home page: </div>
      <div>{loading ? "loading" : JSON.stringify(data)}</div>
    </>
  );
};

export default ExampleHomePage;
