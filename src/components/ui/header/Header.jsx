import React, { useState } from "react";
import styles from "./header.module.css";
import logo from "./logo2.png";
import logoIcon from "./Accaunt.png";
import AuthModal from "./AuthModal"; // путь к файлу Modal.
import RegisterModal from "./RegisterModal";
// js

export const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Открываем окно регистрации из окна авторизации
  const openRegisterModal = () => {
    setIsAuthModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  // Обработчики закрытия
  const closeAuthModal = () => setIsAuthModalOpen(false);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  return (
    <header className={styles.header}>
      <img src={logo} alt="Логотип" className={styles.headerinfo__icon}></img>
      <nav className={styles.headerinformation}>
        <a href="/" className={styles.headerlink}>
          O пекарне
        </a>
        <a href="Shop" className={styles.headerlink}>
          <link to="/Shop"></link>
          Tовар
        </a>
        <a href="modal" className={styles.headerlink}>
          Kонтакты
        </a>
      </nav>
      <nav className={styles.headericon}>
        <button onClick={() => setIsAuthModalOpen(true)}>
          <img className={styles.headerlink} src={logoIcon} alt="Логотип" />
        </button>
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={closeAuthModal}
          onOpenRegister={openRegisterModal} // Передаём обработчик
        />
        {/* Здесь компонент RegisterModal */}
        {isRegisterModalOpen && (
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={closeRegisterModal}
          />
        )}
      </nav>
    </header>
  );
};
