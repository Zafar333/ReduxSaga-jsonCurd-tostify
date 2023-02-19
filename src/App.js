import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import Home from "./pages/Home";
import About from "./pages/About";
import AddEditUser from "./pages/AddEditUser";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/edituser/:id" element={<AddEditUser />} />
          <Route path="/addedituser" element={<AddEditUser />} />
          <Route path="/userinfo/:id" element={<UserInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
