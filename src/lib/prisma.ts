/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Create or reuse the Prisma Client

export const prisma: PrismaClient = new PrismaClient({
	log:
		process.env.NODE_ENV === "development"
			? ["query", "info", "warn", "error"]
			: ["error"],
});

// Save the client to the global object in development

/**
 * Lazy connect function.
 * Call this in API routes if you want to explicitly connect to DB.
 */
export async function connectPrisma(): Promise<void> {
	try {
		await prisma.$connect();
		if (process.env.NODE_ENV === "development") {
			console.log("Prisma connected successfully!");
		}
	} catch (error: any) {
		console.error("Prisma connection failed:", error.message || error);
		// Do not call process.exit() — Next.js handles process lifecycle
	}
}

/**
 * Optional helper to disconnect Prisma gracefully.
 * Call this only if your server shuts down manually.
 */
export async function disconnectPrisma(): Promise<void> {
	try {
		await prisma.$disconnect();
		if (process.env.NODE_ENV === "development") {
			console.log("Prisma disconnected successfully!");
		}
	} catch (error: any) {
		console.error("Prisma disconnection failed:", error.message || error);
	}
}
