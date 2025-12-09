import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer_all}>
        <nav className={styles.footer_information}>
          <nav className={styles.footer_top}>
            <nav className={styles.footer_top_navigation}>
              <a className={styles.footer_link}>
                <span>G</span>лавная
              </a>
              <a className={styles.footer_link}>
                <span>T</span>овар
              </a>
              <a className={styles.footer_link}>
                <span>Z</span>аказы
              </a>
              <a className={styles.footer_link}>
                <span>K</span>онтактная информация
              </a>
            </nav>
          </nav>
          <nav className={styles.footer_bottom}>
            <a className={styles.footer_link} href="#" target="blank">
              © Copyright © 2025 3legant. Все права защищены
            </a>
            <a className={styles.footer_link} target="_blank">
              Privacy Policy
            </a>
            <a className={styles.footer_link}>Terms of use</a>
          </nav>
        </nav>
      </nav>
    </footer>
  );
};
