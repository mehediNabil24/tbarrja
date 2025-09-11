/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/auth/route.ts

import { NextRequest, NextResponse } from "next/server";
import { authenticateUser } from "@/lib/auth";
import { unauthorized } from "@/lib/response";

export async function POST(req: NextRequest) {
	try {
		const { email, password } = await req.json();

		const result = await authenticateUser(email, password);

		if (!result) {
			return unauthorized({ message: "Invalid Credential" });
		}

		const { token, user } = result;

		return NextResponse.json({
			token,
			user: { id: user.id, email: user.email, role: user.role },
		});
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
