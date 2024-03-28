import React from "react";
import classnames from "classnames";

import testId from "../../utils/testId";

import styles from "./index.module.scss";

const Layout = (props: React.PropsWithChildren<{ className?: string; style?: React.CSSProperties }>) => {
  return (
    <div {...testId("aim-ahead-layout")} className={classnames(styles.mainLayout, props.className)} style={props.style}>
      {props.children}
    </div>
  );
};

export default Layout;
