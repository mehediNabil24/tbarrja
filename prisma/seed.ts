// prisma/seed.ts

import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { config } from "@/lib/config";

async function seedDatabase() {
	try {
		console.log("🌱 Starting database seeding...");

		// 1. Create Admin User
		const existingAdmin = await prisma.user.findUnique({
			where: { email: config.auth.admin.email },
		});

		if (!existingAdmin) {
			const hashedPassword = await hash(config.auth.admin.password, 12);
			const admin = await prisma.user.create({
				data: {
					email: config.auth.admin.email,
					password: hashedPassword,
					role: "ADMIN",
				},
			});
			console.log("✅ Admin user created:", admin.email);
		} else {
			console.log("ℹ️  Admin user already exists");
		}

		// 2. Create Sample Products

		console.log("🌱 Database seeding completed successfully!");
	} catch (error) {
		console.error("❌ Error seeding database:", error);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
}

// Run the seed function
seedDatabase();
