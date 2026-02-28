export const apiEndpoints = ["/auth/login", "/auth/register", "/users/me"];

export const getOptions = {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
};

export const postOptions = (params)  => {
  return {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    }
  }
}