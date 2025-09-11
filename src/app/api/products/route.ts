/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/products/route.ts

import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import * as response from "@/lib/response";

export async function GET() {
	try {
		const products = await prisma.product.findMany({
			orderBy: { createdAt: "desc" },
		});
		return response.success({ data: products });
	} catch (error: any) {
		console.log(error.message);
		return response.internalError();
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const {
			date,
			name,
			monthlyAvg,
			dailyAvg,
			equityStopLoss,
			avgTradeLength,
			description,
		} = body;

		const product = await prisma.product.create({
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

		return response.created({ data: product });
	} catch (error: any) {
		console.log(error.message);
		return response.internalError();
	}
}
