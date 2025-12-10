import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const AuthModal = ({ isOpen, onClose, onOpenRegister }) => {
  // Добавлен onOpenRegister
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      console.log("Авторизационные данные:", { email, password });
      alert("Вход выполнен!");
      onClose();
    } catch (err) {
      setError("Неверный email или пароль");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="auth-modal-overlay"
      onClick={handleOutsideClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        ref={modalRef}
        className="auth-modal"
        style={{
          background: "#01460bff",
          borderRadius: "8px",
          width: "400px",
          maxWidth: "90vw",
          padding: "24px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>Вход</h2>

        {error && (
          <div
            style={{
              color: "red",
              marginBottom: "16px",
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "4px",
                fontWeight: "500",
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "4px",
                fontWeight: "500",
              }}
            >
              Пароль
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "12px",
              background: isLoading ? "#ccc" : "#03a503ff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: isLoading ? "not-allowed" : "pointer",
              fontSize: "16px",
              marginBottom: "16px", // Отступ снизу для кнопки регистрации
            }}
          >
            {isLoading ? "Вход..." : "Войти"}
          </button>

          {/* Кнопка перехода к регистрации */}
          <button
            type="button"
            onClick={onOpenRegister}
            style={{
              width: "100%",
              padding: "12px",
              background: "#03a503ff",
              color: "#ffffffff",

              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Зарегистрироваться
          </button>
        </form>

        <button
          type="button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "#666",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpenRegister: PropTypes.func.isRequired, // Новый пропс
};

export default AuthModal;
