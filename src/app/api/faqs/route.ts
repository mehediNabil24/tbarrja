/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/faqs/route.ts

import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import * as response from "@/lib/response";

export async function GET() {
	try {
		const faqs = await prisma.fAQ.findMany({
			orderBy: { createdAt: "desc" },
		});
		return response.success({ data: faqs });
	} catch (error: any) {
		console.log(error.message);
		return response.internalError({
			error: "Failed to fetch FAQs",
			message: "Unable to retrieve FAQs",
		});
	}
}

export async function POST(req: NextRequest) {

	try {
		const body = await req.json();
		const { question, answer } = body;

		// Validate required fields
		if (!question || !answer) {
			return response.badRequest({
				error: "Missing required fields",
				message: "Question and answer are required",
			});
		}

		const faq = await prisma.fAQ.create({
			data: {
				question,
				answer,
			},
		});

		return response.created({
			data: faq,
			message: "FAQ created successfully",
		});
	} catch (error: any) {
		console.log(error.message);
		return response.internalError({
			error: "Failed to create FAQ",
			message: "Unable to create FAQ",
		});
	}
}
