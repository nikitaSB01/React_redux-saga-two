import React from "react";
import "./ErrorBlock.css";

interface ErrorBlockProps {
  message: string;
  onRetry: () => void;
}

const ErrorBlock: React.FC<ErrorBlockProps> = ({ message, onRetry }) => {
  return (
    <div className="error-block">
      <span>{message}</span>
      <button onClick={onRetry}>Повторить запрос</button>
    </div>
  );
};

export default ErrorBlock;
