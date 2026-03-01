//* components
import "./App.css";
import { RegisterForm } from "./components/registerForm";
import { LoginForm } from "./components/loginForm";

//* app component
function App() {
  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  );
}

export default App;
