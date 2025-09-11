/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/testimonials/route.ts

import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import * as response from "@/lib/response";

export async function GET() {
	try {
		const testimonials = await prisma.testimonial.findMany({
			orderBy: { createdAt: "desc" },
		});
		return response.success({ data: testimonials });
	} catch (error: any) {
		console.log(error.message);
		return response.internalError();
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { clientName, designation, company, imageUrl, review } = body;

		const testimonial = await prisma.testimonial.create({
			data: {
				clientName,
				designation,
				company,
				imageUrl,
				review,
			},
		});

		return response.created({ data: testimonial });
	} catch (error: any) {
		console.log(error.message);
		return response.internalError();
	}
}
