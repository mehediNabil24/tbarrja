/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/faqs/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id;
		const faq = await prisma.fAQ.findUnique({
			where: { id },
		});

		if (!faq) {
			return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
		}

		return NextResponse.json(faq);
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json({ error: "Failed to fetch FAQ" }, { status: 500 });
	}
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id;
		const body = await req.json();
		const { question, answer } = body;

		const faq = await prisma.fAQ.update({
			where: { id },
			data: {
				question,
				answer,
			},
		});

		return NextResponse.json(faq);
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json(
			{ error: "Failed to update FAQ" },
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
		await prisma.fAQ.delete({
			where: { id },
		});

		return new NextResponse(null, { status: 204 });
	} catch (error: any) {
		console.log(error.message);
		return NextResponse.json(
			{ error: "Failed to delete FAQ" },
			{ status: 500 }
		);
	}
}
