import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import DashBoard from "./component/DashBoard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
