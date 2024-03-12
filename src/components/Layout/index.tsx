import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import testId from "../../utils/testId";

import styles from "./index.module.scss";

const Layout = (props: React.PropsWithChildren) => {
  return (
    <div {...testId("aim-ahead-layout")} className={styles.mainLayout}>
      <Header />
      <div className={styles.container}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
