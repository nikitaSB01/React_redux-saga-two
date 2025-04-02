import React from "react";
import spinner from "/spinner.png"; // ты загружал spinner.png, положи его в public или в assets

const Loader: React.FC = () => (
  <div style={{ textAlign: "center", padding: "20px" }}>
    <img src={spinner} alt="Загрузка..." />
  </div>
);

export default Loader;
