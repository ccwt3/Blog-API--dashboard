//* components
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterForm } from "./components/registerForm";
import { LoginForm } from "./components/loginForm";
import { Home } from "./components/home";

//* app component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
