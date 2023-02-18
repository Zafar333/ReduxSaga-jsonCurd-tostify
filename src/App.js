import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import Home from "./pages/Home";
import About from "./pages/About";
import AddEditUser from "./pages/AddEditUser";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/edituser/:id" element={<AddEditUser />} />
          <Route path="/adduser" element={<AddEditUser />} />
          <Route path="/userinfo/:id" element={<UserInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
