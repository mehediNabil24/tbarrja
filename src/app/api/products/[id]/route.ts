/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/products/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as response from "@/lib/response";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id;
		const product = await prisma.product.findUnique({
			where: { id },
		});

		if (!product) {
			return response.notFound({ message: "Production not found" });
		}

		return response.success({ data: product });
	} catch (error: any) {
		console.log(error.message);
		return response.internalError();
	}
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const body = await req.json();
		const id = (await params).id;
		const {
			date,
			name,
			monthlyAvg,
			dailyAvg,
			equityStopLoss,
			avgTradeLength,
			description,
		} = body;

		const product = await prisma.product.update({
			where: { id },
			data: {
				date: new Date(date),
				name,
				monthlyAvg: monthlyAvg ? parseFloat(monthlyAvg) : null,
				dailyAvg: dailyAvg ? parseFloat(dailyAvg) : null,
				equityStopLoss: equityStopLoss ? parseFloat(equityStopLoss) : null,
				avgTradeLength,
				description,
			},
		});

		return response.success({ data: product, message: "updated successful" });
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json(
			{ error: "Failed to update product" },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id;
		await prisma.product.delete({
			where: { id },
		});

		return response.success({ message: "deleted successfully" });
	} catch (error: any) {
		console.log(error.message);
		return response.internalError();
	}
}
