import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./component/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashBoard from "./component/DashBoard";

const RootRoute = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const showHome = queryParams.get("home") === "true";
  const token = localStorage.getItem("token");

  if (token && !showHome) {
    return <DashBoard />;
  }
  return <Home />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRoute />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
