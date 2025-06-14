import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import Cookies from "js-cookie";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.thedogapi.com/v1",
  prepareHeaders(headers) {
    // Set the Authorization header if the token exists
    const token = Cookies.get("token");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
