import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Layout from "../Layout";

import styles from "./index.module.scss";

const AppLayout = (props: React.PropsWithChildren) => {
  return (
    <Layout className={styles.mainLayout}>
      <Header />
      <div className={styles.container}>{props.children}</div>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
