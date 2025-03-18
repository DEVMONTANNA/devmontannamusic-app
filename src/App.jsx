import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./Components/Account";
import Discover from "./Components/Discover";
import Search from "./Components/Search";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
