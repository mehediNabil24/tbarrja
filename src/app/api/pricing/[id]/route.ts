/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/pricing/[id]/route.ts

import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import * as response from "@/lib/response";

// GET: Get pricing by ID (authentication handled by middleware)
export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const id = (await params).id;

	try {
		const pricing = await prisma.pricing.findUnique({
			where: { id },
		});

		if (!pricing) {
			return response.notFound({
				error: "Pricing not found",
				message: "Unable to find pricing with provided ID",
			});
		}

		return response.success({ data: pricing }); // ← Fixed: use data property
	} catch (error: any) {
		console.log(error.message);
		return response.internalError({
			error: "Failed to fetch pricing",
			message: "Unable to retrieve pricing information",
		});
	}
}

// PUT: Update pricing by ID (authentication handled by middleware)
export async function PUT(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id;
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

		const pricing = await prisma.pricing.update({
			where: { id },
			data: {
				// ← Fixed: use data property
				equityRange,
				productType,
				subscription,
				basePrice,
				additionalLicenses,
			},
		});

		return response.success({
			data: pricing,
			message: "Pricing updated successfully",
		}); // ← Fixed: use data property
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

// DELETE: Delete pricing by ID (authentication handled by middleware)
export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id;
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
