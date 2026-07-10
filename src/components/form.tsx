import { isUserLoged } from "../../services/isLoged";
import { useNavigate, Link } from "react-router-dom";

type FormProps = {
  type: "Login" | "Register";
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

export function GenericForm({ handleSubmit, type }: FormProps) {
  const navigate = useNavigate();

  isUserLoged().then((res) => {
    if (res) return navigate("/");
  });

  return (
    <div className="authPage">
      <form className="genericForm" onSubmit={handleSubmit}>
        <h1>{type}</h1>
        <p>do no enter real credential</p>

        <div className="genericForm__item">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>

        <div className="genericForm__item">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button className="btn btn-primary btn-block">{type}</button>

        <p className="genericForm__footer">
          {type === "Login" ? (
            <>
              No account yet? <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              Already have an account? <Link to="/login">Login</Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
