import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AddUser, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
