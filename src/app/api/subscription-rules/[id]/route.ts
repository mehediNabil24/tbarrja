/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/subscription-rules/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

import * as response from "@/lib/response";
export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id;
		const rule = await prisma.subscriptionRule.findUnique({
			where: { id },
		});

		if (!rule) {
			return response.notFound();
		}

		return response.success({ data: rule });
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
		const id = (await params).id;
		const body = await req.json();
		const { rule } = body;

		const subscriptionRule = await prisma.subscriptionRule.update({
			where: { id },
			data: {
				rule,
			},
		});

		return NextResponse.json(subscriptionRule);
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json(
			{ error: "Failed to update rule" },
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
		await prisma.subscriptionRule.delete({
			where: { id },
		});

		return new NextResponse(null, { status: 204 });
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json(
			{ error: "Failed to delete rule" },
			{ status: 500 }
		);
	}
}
