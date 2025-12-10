import React, { useState } from "react";
import PropTypes from "prop-types";

type RegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Проверка совпадения паролей
    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      setIsLoading(false);
      return;
    }

    try {
      // Здесь должен быть вызов API регистрации
      console.log("Данные регистрации:", { email, password });
      alert("Регистрация успешна!");
      onClose();
    } catch (err) {
      setError("Ошибка регистрации. Попробуйте ещё раз.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="auth-modal-overlay"
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
        style={{
          background: "#01460bff",
          borderRadius: "8px",
          width: "400px",
          maxWidth: "90vw",
          padding: "24px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ margin: "0 0 16px 0", fontSize: "20px" }}>Регистрация</h2>

        {error && (
          <div
            style={{
              color: "red",
              marginBottom: "16px",
              fontSize: "14px",
              padding: "8px",
              background: "#ffecee",
              borderRadius: "4px",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="register-email"
              style={{
                display: "block",
                marginBottom: "4px",
                fontWeight: "500",
              }}
            >
              Email
            </label>
            <input
              id="register-email"
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

          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="register-password"
              style={{
                display: "block",
                marginBottom: "4px",
                fontWeight: "500",
              }}
            >
              Пароль
            </label>
            <input
              id="register-password"
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

          <div style={{ marginBottom: "24px" }}>
            <label
              htmlFor="confirm-password"
              style={{
                display: "block",
                marginBottom: "4px",
                fontWeight: "500",
              }}
            >
              Подтвердите пароль
            </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              background: isLoading ? "#ccc" : "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: isLoading ? "not-allowed" : "pointer",
              fontSize: "16px",
              marginBottom: "16px",
            }}
          >
            {isLoading ? "Регистрация..." : "Зарегистрироваться"}
          </button>

          <button
            type="button"
            onClick={onClose}
            style={{
              width: "100%",
              padding: "12px",
              background: "#03a503ff",
              color: "#495057",

              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Отмена
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

RegisterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RegisterModal;
