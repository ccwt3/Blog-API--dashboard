const BASE_URL = "http://localhost:3000";
import { getOptions, postOptions, apiEndpoints } from "./fetchOptions";

async function post(params = {}, endpoint) {
  if (!apiEndpoints.includes(endpoint)) {
    return {
      status: 401,
      message: "invalid endpoint",
    };
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, postOptions(params));

  const message = await res.json();

  return {
    status: res.status,
    message: message.message,
  };
}

export async function get(endpoint) {
  if (!apiEndpoints.includes(endpoint)) {
    return {
      status: 401,
      message: "invalid endpoint",
    };
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, getOptions);

  const message = await res.json();

  return {
    status: res.status,
    message: message.message,
  };
}
