import React from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

const NavLink = ({ title, link, isActive, onClick }) => {
  return (
    <div className={styles.Nav_Link}>
      <ul>
        <li>
          <Link href={link} passHref>
            <a onClick={onClick} className={isActive ? styles.active : ""}>
              {title}
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLink;
