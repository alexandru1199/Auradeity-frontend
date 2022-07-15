


import { NavBar } from "./layout/NavBar";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage"
import {  Routes, Route } from "react-router-dom";
function App() {

  return (
    <div>
<NavBar>
</NavBar>
    <Routes>
  
    <Route path="/" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage/> } />
  </Routes>
  </div>
  );
}

export default App;
