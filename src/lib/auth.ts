// lib/auth.ts

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prisma } from "./prisma";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function authenticateUser(email: string, password: string) {
	const user = await prisma.user.findUnique({ where: { email } });

	if (!user) return null;

	const isPasswordValid = await compare(password, user.password);
	if (!isPasswordValid) return null;

	const token = sign({ userId: user.id, role: user.role }, JWT_SECRET, {
		expiresIn: "3d",
	});
	return { user, token };
}
