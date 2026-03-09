export const apiEndpoints = ["/auth/login", "/auth/register", "/users/me", "/posts"];

export const getOptions: object = {
  method: "GET",
  credentials: "include" as const,
  headers: {
    "Content-Type": "application/json",
  },
};

export const postOptions = (params: object)  => {
  return {
    method: "POST",
    credentials: "include" as const,
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    }
  }
}