import { post } from "../../services/fetcher";
import { useNavigate } from "react-router-dom";
import { GenericForm } from "./form";

export function LoginForm() {
  const navigate = useNavigate();

  const loginSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData);

    const response = await post(values, "/auth/login");

    if (response.status === 200) {
      return navigate("/");
    } else {
      console.log(response.status, response.message);
    }
  };

  return <GenericForm handleSubmit={loginSubmit} type={"Login"} />;
}
