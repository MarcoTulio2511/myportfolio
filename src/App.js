import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Home/Hero";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
