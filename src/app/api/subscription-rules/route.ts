/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/subscription-rules/route.ts

import { NextRequest, } from "next/server";
import { prisma } from "@/lib/prisma";

import * as response from "@/lib/response";

export async function GET() {

	try {
		const rules = await prisma.subscriptionRule.findMany({
			orderBy: { createdAt: "desc" },
		});
		return response.success({ data: rules });
	} catch (error: any) {
		console.log(error.message);
		return response.internalError();
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { rule } = body;

		const subscriptionRule = await prisma.subscriptionRule.create({
			data: {
				rule,
			},
		});

		return response.created({ data: subscriptionRule });
	} catch (error: any) {
		console.log(error.message);
		return response.internalError();
	}
}
