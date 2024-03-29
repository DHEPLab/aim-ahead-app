import React from "react";
import { Avatar } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

import avatar from "../../../assets/images/defalt_avatar.jpg";
import styles from "./index.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div>Collective Goods</div>
      <div className={styles.right}>
        <Avatar className={styles.avatar} src={avatar} />
        <DensityMediumIcon />
      </div>
    </div>
  );
};

export default Header;
