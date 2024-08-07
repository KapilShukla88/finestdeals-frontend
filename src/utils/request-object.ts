const hasher = require("hash.js/lib/hash/sha/256");

const xUserAgent = hasher()
  .update(`${Math.floor(Math.random() * Math.floor(1000))}`)
  .digest("hex");

const AUTH_TOKEN_PREFIX = "Bearer ";

export const createRequest = (
  url: string,
  method: string = "get",
  data: any = null,
  token?: any,
  auth?: boolean
) => {
  let headers = {
    "x-user-agent": xUserAgent,
  };

  let request: any = {
    baseURL: "http://localhost:3001/v1/main",
    headers: headers,
    method,
    url,
  };

  if (token) {
    request.headers.authorization = AUTH_TOKEN_PREFIX + token;
  }

  let urlHash = hasher().update(JSON.stringify(request)).digest("hex");

  request.headers["x-hash"] = urlHash;

  // if (auth)
  //   request.headers["authorization"] = "Bearer " + getLocalStorage("token");
  request.data = data;
  return request;
};
