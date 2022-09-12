import { NavBar } from "./layout/NavBar";
import React from "react";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
export const LoginContext = React.createContext();
function App() {
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  return (
    <div>
      <LoginContext.Provider value={{ token, setToken }}>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={!token ? <LoginPage /> : <Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
