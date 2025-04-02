import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ServicesPage />} />
      <Route path="/:id/details" element={<ServiceDetailsPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
