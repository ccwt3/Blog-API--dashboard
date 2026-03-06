import { get } from "../services/fetcher";

export async function isUserLoged() {
  const response = await get("/users/me");

  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
}
