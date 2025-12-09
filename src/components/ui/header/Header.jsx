import React from "react";
import styles from "./header.module.css";
import logo from "./logo2.png";
import logoIcon from "./Accaunt.png";
export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Логотип" className={styles.headerinfo__icon}></img>
      <nav className={styles.headerinformation}>
        <a href="1" className={styles.headerlink}>
          O пекарне
        </a>
        <a href="2" className={styles.headerlink}>
          Tовар
        </a>
        <a href="3" className={styles.headerlink}>
          Kонтакты
        </a>
      </nav>
      <nav className={styles.headericon}>
        <button>
          <img
            href="1"
            className={styles.headerlink}
            src={logoIcon}
            alt="Логотип"
          />
        </button>
      </nav>
    </header>
  );
};
