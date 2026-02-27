const BASE_URL = "http://localhost:3000";

const apiEndopoints = ["/auth/login", "/auth/register", "/users/me"];

export async function getApiFetch(endpoint) {
  if (!apiEndopoints.includes(endpoint)) {
    return {
      status: 401,
      message: "invalid enpoint",
    };
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const message = await res.json();

  return {
    status: res.status,
    message: message.message,
  };
}

export async function postApiFetch(endpoint, params = {}) {
  if (!apiEndopoints.includes(endpoint)) {
    return {
      status: 401,
      message: "invalid enpoint",
    };
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const message = await res.json();

  return {
    status: res.status,
    message: message.message,
  };
}
