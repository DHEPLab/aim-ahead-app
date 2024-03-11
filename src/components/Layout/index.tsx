import React from "react";
import styles from "./index.module.scss";
import testId from "../../utils/testId";

const Layout = (props: React.PropsWithChildren) => {
  return (
    <div {...testId("aim-ahead-layout")} className={styles.mainLayout}>
      {props.children}
    </div>
  );
};

export default Layout;
