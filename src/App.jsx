import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import "./App.css";
import Tecnology from "./pages/Tecnology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="tecnology" element={<Tecnology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
