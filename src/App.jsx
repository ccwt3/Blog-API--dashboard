import "./App.css";

function App() {
  return (
    <form className="registerForm">
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
