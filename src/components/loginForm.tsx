import { get, post } from "../../services/fetcher";
import { GenericForm } from "./form";

async function loginSubmit(event: React.SubmitEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const values = Object.fromEntries(formData);

  const response = await post(values, "/auth/login");

  if (response.status === 201) {
    console.log(response.message);
    const me = await get("/users/me");
    console.log(me);
  } else if (response.status === 401) {
    console.log("login failed");
  } else {
    console.log(response.status);
  }
}

export function LoginForm() {
  return <GenericForm handleSubmit={loginSubmit} type={"Login"} />;
}
