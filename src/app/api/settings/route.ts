// app/api/settings/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { settingSchema } from "@/lib/validation-schemas";
import { validateRequest } from "@/lib/validate";
import * as response from "@/lib/response";

// GET: Get settings (public)
export async function GET() {
	try {
		// Get the first (and only) settings record
		const settings = await prisma.setting.findFirst();

		// If no settings exist, return default empty settings
		if (!settings) {
			return NextResponse.json({
				id: "",
				privacyPolicy: "",
				termsAndCondition: "",
				createdAt: new Date(),
				updatedAt: new Date(),
			});
		}

		return response.success({ data: settings });
	} catch (error) {
		console.error("Error fetching settings:", error);
		return NextResponse.json(
			{ error: "Failed to fetch settings" },
			{ status: 500 }
		);
	}
}

// PUT: Update/Create settings (protected)
export async function PUT(req: NextRequest) {
	try {
		// Validate request body
		const validation = await validateRequest(req, settingSchema);
		if (validation instanceof NextResponse) {
			return validation; // Return validation error
		}

		const body = await req.json();

		// Use upsert to create or update settings
		// Since there's only one settings record, we use a fixed ID
		const settings = await prisma.setting.upsert({
			where: { settingId: "SINGLE_SETTINGS_RECORD" }, // Fixed ID for single record
			update: {
				...body,
			},
			create: {
				settingId: "SINGLE_SETTINGS_RECORD",
				...body,
			},
		});

		return response.success({ data: settings });
	} catch (error) {
		console.error("Error updating settings:", error);
		return response.internalError();
	}
}
