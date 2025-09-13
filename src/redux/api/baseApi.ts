/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { RootState } from "../store";
import { logout, setAccessToken } from "../features/auth";

const baseQuery = fetchBaseQuery({
	baseUrl: "/api",
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth?.accessToken;
		console.log(token, "token");
		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}
		return headers;
	},

	credentials: "include", // ✅ includes HttpOnly cookies like refresh token
});

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result.error && result.error.status === 403) {
		// Refresh access token
		const refreshResult = await baseQuery(
			{
				url: "/auth/refresh-token",
				method: "POST",
			},
			api,
			extraOptions
		);

		if (refreshResult.data) {
			const newAccessToken = (refreshResult.data as any).accessToken;

			api.dispatch(setAccessToken(newAccessToken));

			// Retry the original request
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logout());
		}
	}

	return result;
};

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: [
		"auth",
		"roofing",
		"window",
		"Product",
		"Pricing",
		"Rules",
		"Faq",
		"Privacy",
	],
	endpoints: () => ({}),
});

export default baseApi;
