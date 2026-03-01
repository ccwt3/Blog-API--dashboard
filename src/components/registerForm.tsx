import { post, get } from "../../services/fetcher";
import { GenericForm } from "./form";

async function registerSubmit(event: React.SubmitEvent <HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const values = Object.fromEntries(formData);

  const response = await post(values, "/auth/register");

  if (response.status === 201) {
    console.log(response.message);
    const me = await get("/users/me");
    console.log(me);
  } else if (response.status === 401) {
    console.log("register failed");
  } else {
    console.log(response.status);
  }
}

export function RegisterForm() {
  return <GenericForm handleSubmit={registerSubmit} type={"Register"}/>;
}
