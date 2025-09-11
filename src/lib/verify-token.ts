// lib/auth-edge.ts

import { UserRole } from "@prisma/client";
import { config } from "./config";
import { jwtVerify } from "jose";
export type TDecodedUser = {
	userId: string;
	role: UserRole;
};
const secret = new TextEncoder().encode(config.auth.jwtSecret);
export async function verifyToken(token: string) {
	try {
		const { payload } = await jwtVerify(token, secret);

		return payload;
	} catch (err) {
		console.log("Token verification error:", err);
		return null;
	}
}
