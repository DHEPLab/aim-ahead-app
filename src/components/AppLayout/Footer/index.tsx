import React from "react";
import { Button } from "@mui/material";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import styles from "./index.module.scss";

const menus = [
  {
    Icon: TipsAndUpdatesOutlinedIcon,
    name: "BUILD SKILL",
  },
  {
    Icon: ZoomInOutlinedIcon,
    name: "DIAGNOSE",
  },
  {
    Icon: HelpOutlineOutlinedIcon,
    name: "SUBMIT A CASE",
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      {menus.map((menu) => {
        const { Icon, name } = menu;
        return (
          <Button key={name} className={styles.menu} sx={{ padding: "14px" }}>
            <div className={styles.icon}>
              <Icon sx={{ fontSize: "2rem" }} />
            </div>
            <span className={styles.name}>{name}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default Footer;
