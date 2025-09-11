/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/testimonials/[id]/route.ts

import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import * as response from "@/lib/response";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id;
		const testimonial = await prisma.testimonial.findUnique({
			where: { id },
		});

		if (!testimonial) {
			return response.notFound();
		}

		return response.success({ data: testimonial });
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
		const { clientName, designation, company, imageUrl, review } = body;

		const testimonial = await prisma.testimonial.update({
			where: { id },
			data: {
				clientName,
				designation,
				company,
				imageUrl,
				review,
			},
		});

		return response.success({ data: testimonial });
	} catch (error: any) {
		console.log(error.message);
		return response.internalError();
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const id = (await params).id;
		await prisma.testimonial.delete({
			where: { id },
		});

		return response.success({ message: "deleted successfully" });
	} catch (error: any) {
		console.log(error.message);
		return response.internalError();
	}
}
