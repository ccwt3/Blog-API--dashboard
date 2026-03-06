import { useNavigate } from "react-router-dom";
import { post } from "../../services/fetcher";
import { GenericForm } from "./form";

export function RegisterForm() {
  const navigate = useNavigate();

  const registerSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData);

    const response = await post(values, "/auth/register");

    if (response.status === 201) {
      return navigate("./");
    } else {
      console.log(response.status, response.message);
    }
  };

  return <GenericForm handleSubmit={registerSubmit} type={"Register"} />;
}
