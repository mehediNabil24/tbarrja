/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { validationSchemas } from "@/lib/validation-schemas";
import { validateRequest } from "@/lib/validate";
import * as response from "@/lib/response";
import { TDecodedUser, verifyToken } from "./lib/verify-token";
// import { verify } from "jsonwebtoken";
// import { getConfig } from "./lib/config";
// const envConfig = getConfig();
export async function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const method = request.method;

	// 1. Handle API routes
	if (pathname.startsWith("/api/")) {
		// Handle validation for POST/PUT requests
		if (pathname === "/api/verify-token") {
			return NextResponse.next();
		}
		if (
			(method === "POST" || method === "PUT") &&
			validationSchemas[pathname as keyof typeof validationSchemas]
		) {
			const validationResult = await validateRequest(
				request,
				validationSchemas[pathname as keyof typeof validationSchemas]
			);

			if (validationResult && !validationResult.success) {
				return NextResponse.json(
					{
						success: false,
						error: validationResult.error,
						details: validationResult.details,
					},
					{ status: 400 }
				);
			}
		}

		// Allow all GET requests (public read access)
		if (method === "GET") {
			return NextResponse.next();
		}

		// Allow login endpoint for POST requests
		if (pathname === "/api/auth/login" && method === "POST") {
			return NextResponse.next();
		}

		// Require authentication for POST, PUT, DELETE
		const authHeader = request.headers.get("authorization");
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return response.unauthorized({
				message: "Unauthorized: No token provided",
			});
		}

		const token = authHeader.split(" ")[1];
		const tokenData = (await verifyToken(token)) as TDecodedUser;

		if (!tokenData) {
			return response.unauthorized({ message: "Unauthorized: Invalid token" });
		}

		// Attach user info to request headers
		const requestHeaders = new Headers(request.headers);
		requestHeaders.set("x-user-id", tokenData.userId);
		requestHeaders.set("x-user-role", tokenData.role);

		return NextResponse.next({
			request: {
				headers: requestHeaders,
			},
		});
	}

	// 2. Handle Dashboard routes (protected)
	if (pathname.startsWith("/dashboard")) {
		// Get token from cookies
		const token = request.cookies.get("accessToken")?.value;

		// If no token, redirect to login
		if (!token) {
			const loginUrl = new URL("/login", request.url);
			return NextResponse.redirect(loginUrl);
		}

		// Verify token
		const tokenData = verifyToken(token);

		// If invalid token, redirect to login
		if (!tokenData) {
			const loginUrl = new URL("/login", request.url);
			return NextResponse.redirect(loginUrl);
		}

		// Token is valid, allow access to dashboard
		return NextResponse.next();
	}

	// Allow all other routes
	return NextResponse.next();
}

export const config = {
	matcher: ["/api/:path*", "/dashboard/:path*", "/dashboard"],
};
