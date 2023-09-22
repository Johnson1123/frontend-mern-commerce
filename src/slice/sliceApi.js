import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { backend_url } from "../server.js";

const baseQuery = fetchBaseQuery({
  baseUrl: backend_url,
  prepareHeaders: (headers, { getState, endpoint }) => {
    let { token } = getState();
    token = token.token;
    if (token) {
      headers.set("Authorization", `${token}`);
    }

    return headers;
  },
});
const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
  credentials: "include",
});

export default apiSlice;
