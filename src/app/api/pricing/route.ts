/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/pricing/route.ts

import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import * as response from "@/lib/response";

export const runtime = "nodejs"; // ensures Node.js runtime

// GET: Get all pricings (public)
export async function GET() {
	try {
		const pricings = await prisma.pricing.findMany({
			orderBy: { createdAt: "desc" },
		});
		return response.success({ data: pricings }); // ← Fixed: data field
	} catch (error: any) {
		console.log(error.message);
		return response.internalError({
			error: "Failed to fetch pricings",
			message: "Unable to retrieve pricing information",
		});
	}
}

// POST: Create pricing (protected - auth handled by middleware)
export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const {
			equityRange,
			productType,
			subscription,
			basePrice,
			additionalLicenses,
		} = body;

		// Validate required fields
		if (
			!equityRange ||
			!productType ||
			!subscription ||
			!basePrice ||
			!additionalLicenses
		) {
			return response.badRequest({
				error: "Missing required fields",
				message: "All pricing fields are required",
			});
		}

		const pricing = await prisma.pricing.create({
			data: {
				// ← Fixed: data property
				equityRange,
				productType,
				subscription,
				basePrice,
				additionalLicenses,
			},
		});

		return response.created({
			data: pricing, // ← Fixed: data field
			message: "Pricing created successfully",
		});
	} catch (error: any) {
		console.log(error.message);
		return response.internalError({
			error: "Failed to create pricing",
			message: "Unable to create pricing",
		});
	}
}

// PUT: Update pricing (protected - auth handled by middleware)
export async function PUT(req: NextRequest) {
	try {
		const url = new URL(req.url);
		const id = url.searchParams.get("id");

		if (!id) {
			return response.badRequest({
				error: "Missing ID",
				message: "Pricing ID is required",
			});
		}

		const body = await req.json();
		const {
			equityRange,
			productType,
			subscription,
			basePrice,
			additionalLicenses,
		} = body;

		const pricing = await prisma.pricing.update({
			where: { id },
			data: {
				// ← Fixed: data property
				equityRange,
				productType,
				subscription,
				basePrice,
				additionalLicenses,
			},
		});

		return response.success({
			data: pricing, // ← Fixed: data field
			message: "Pricing updated successfully",
		});
	} catch (error: any) {
		if (error.code === "P2025") {
			return response.notFound({
				error: "Pricing not found",
				message: "Unable to find pricing with provided ID",
			});
		}
		console.log(error.message);
		return response.internalError({
			error: "Failed to update pricing",
			message: "Unable to update pricing",
		});
	}
}

// DELETE: Delete pricing (protected - auth handled by middleware)
export async function DELETE(req: NextRequest) {
	try {
		const url = new URL(req.url);
		const id = url.searchParams.get("id");

		if (!id) {
			return response.badRequest({
				error: "Missing ID",
				message: "Pricing ID is required",
			});
		}

		await prisma.pricing.delete({
			where: { id },
		});

		return response.noContent();
	} catch (error: any) {
		if (error.code === "P2025") {
			return response.notFound({
				error: "Pricing not found",
				message: "Unable to find pricing with provided ID",
			});
		}
		console.log(error.message);
		return response.internalError({
			error: "Failed to delete pricing",
			message: "Unable to delete pricing",
		});
	}
}
