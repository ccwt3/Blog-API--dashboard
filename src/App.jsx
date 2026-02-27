import "./App.css";
import { postApiFetch, getApiFetch } from "../api/client";

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const values = Object.fromEntries(formData);

  const response = await postApiFetch("/auth/login", values);

  if (response.status === 201) {
    console.log(response.message);
    const me = await getApiFetch("/users/me");
    console.log(me);
  } else if (response.status === 401) {
    console.log("failed");
  } else {
    console.log(response.status);
  }
}

function App() {
  return (
    <form className="registerForm" onSubmit={handleSubmit}>
      <h1>Register</h1>

      <div className="registerForm__item">
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" />
      </div>

      <div className="registerForm__item">
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
      </div>

      <button className="registerForm__button">Submit</button>
    </form>
  );
}

export default App;
