


import { NavBar } from "./layout/NavBar";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <div>
<NavBar>
</NavBar>
    <Routes>
  
    <Route path="/" element={<LoginPage />} />
    
  </Routes>
  </div>
  );
}

export default App;
