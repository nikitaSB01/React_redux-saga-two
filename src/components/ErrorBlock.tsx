import React from "react";

interface Props {
  message: string;
  onRetry: () => void;
}

const ErrorBlock: React.FC<Props> = ({ message, onRetry }) => (
  <div style={{ backgroundColor: "#f8d7da", padding: "10px" }}>
    <span style={{ color: "#721c24", marginRight: "10px" }}>{message}</span>
    <button
      onClick={onRetry}
      style={{ backgroundColor: "#343a40", color: "#fff" }}
    >
      Повторить запрос
    </button>
  </div>
);

export default ErrorBlock;
