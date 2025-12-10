import React from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} /> // Главная страница
          <Route path="/Shop" element={<Shop />} /> // Страница магазина
        </Routes>
      </div>
    </Router>
  );
}

export default App;
