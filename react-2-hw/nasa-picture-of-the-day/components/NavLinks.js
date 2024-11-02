import React from "react";
import styles from "@/app/page.module.css";

const NavLink = ({ title, link, isActive, onClick }) => {
  return (
    <div className={styles.Nav_Link}>
      <ul>
        <li>
          <a href={link} onClick={onClick}>
            {title}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLink;
