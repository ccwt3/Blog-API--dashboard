const BASE_URL = "http://localhost:3000";
import { getOptions, postOptions /*apiEndpoints*/ } from "./fetchOptions";

export async function post(params = {}, endpoint: string) {
  //if (!apiEndpoints.includes(endpoint)) {
  //  return {
  //    status: 401,
  //    message: "invalid endpoint",
  //  };
  //}

  const res = await fetch(`${BASE_URL}${endpoint}`, postOptions(params));
  const resJson = await res.json();

  const { message, ...resBody } = resJson;

  return {
    status: res.status,
    message,
    resBody,
  };
}

export async function get(endpoint: string) {
  //if (!apiEndpoints.includes(endpoint)) {
  //  return {
  //    status: 401,
  //    message: "invalid endpoint",
  //  };
  //}

  const res = await fetch(`${BASE_URL}${endpoint}`, getOptions);
  const resJson = await res.json();
  const { message, ...resBody } = resJson;

  return {
    status: res.status,
    message,
    resBody,
  };
}
