/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/auth/change-password/route.ts

import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import * as response from "@/lib/response";
import { compare, hash } from "bcryptjs";

export async function PUT(req: NextRequest) {
	try {
		// Get user ID from middleware (attached by authentication middleware)
		const userId = req.headers.get("x-user-id");

		if (!userId || userId === "undefined") {
			return response.unauthorized({
				error: "Unauthorized",
				message: "Authentication required",
			});
		}

		const body = await req.json();
		const { currentPassword, newPassword } = body;

		// Validate input
		if (!currentPassword || !newPassword) {
			return response.badRequest({
				error: "Missing required fields",
				message: "Current password and new password are required",
			});
		}

		// Get current user
		const user = await prisma.user.findUnique({
			where: { id: userId },
		});

		if (!user) {
			return response.notFound({
				error: "User not found",
				message: "Unable to find user account",
			});
		}

		// Verify current password
		const isPasswordValid = await compare(currentPassword, user.password);
		if (!isPasswordValid) {
			return response.badRequest({
				error: "Invalid password",
				message: "Current password is incorrect",
			});
		}

		// Check if new password is same as current password
		const isNewPasswordSame = await compare(newPassword, user.password);
		if (isNewPasswordSame) {
			return response.badRequest({
				error: "Password unchanged",
				message: "New password must be different from current password",
			});
		}

		// Hash new password
		const hashedPassword = await hash(newPassword, 12);

		// Update password
		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: {
				password: hashedPassword,
			},
		});

		return response.success({
			data: { id: updatedUser.id, email: updatedUser.email },
			message: "Password changed successfully",
		});
	} catch (error: any) {
		console.error("Error changing password:", error);
		return response.internalError({
			error: "Failed to change password",
			message: "Unable to update password",
		});
	}
}
