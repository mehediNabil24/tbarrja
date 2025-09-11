// lib/response.ts

import { NextResponse } from "next/server";

// Generic response interface
export interface ApiResponse<T> {
	success: boolean;
	message?: string;
	data?: T;
	error?: string;
	meta?: {
		page?: number;
		limit?: number;
		total?: number;
		totalPages?: number;
	};
}

interface SuccessOptions<T> {
	data?: T;
	message?: string;
}

interface CreatedOptions<T> {
	data: T;
	message?: string;
}

interface ErrorOptions {
	error?: string;
	message?: string;
}

interface PaginatedOptions<T> {
	data: T[];
	meta: {
		page: number;
		limit: number;
		total: number;
	};
	message?: string;
}

// Success responses
export const success = <T>({
	data,
	message = "Success",
}: SuccessOptions<T> = {}): NextResponse<ApiResponse<T>> => {
	return NextResponse.json(
		{
			success: true,
			message,
			data,
		},
		{ status: 200 }
	);
};

export const created = <T>({
	data,
	message = "Created successfully",
}: CreatedOptions<T>): NextResponse<ApiResponse<T>> => {
	return NextResponse.json(
		{
			success: true,
			message,
			data,
		},
		{ status: 201 }
	);
};

export const noContent = (): NextResponse => {
	return new NextResponse(null, { status: 204 });
};

// Error responses
export const badRequest = ({
	error = "Bad Request",
	message = "Invalid request",
}: ErrorOptions = {}): NextResponse<ApiResponse<null>> => {
	return NextResponse.json(
		{
			success: false,
			message,
			error,
		},
		{ status: 400 }
	);
};

export const unauthorized = ({
	error = "Unauthorized",
	message = "Authentication required",
}: ErrorOptions = {}): NextResponse<ApiResponse<null>> => {
	return NextResponse.json(
		{
			success: false,
			message,
			error,
		},
		{ status: 401 }
	);
};

export const forbidden = ({
	error = "Forbidden",
	message = "Access denied",
}: ErrorOptions = {}): NextResponse<ApiResponse<null>> => {
	return NextResponse.json(
		{
			success: false,
			message,
			error,
		},
		{ status: 403 }
	);
};

export const notFound = ({
	error = "Not Found",
	message = "Resource not found",
}: ErrorOptions = {}): NextResponse<ApiResponse<null>> => {
	return NextResponse.json(
		{
			success: false,
			message,
			error,
		},
		{ status: 404 }
	);
};

export const conflict = ({
	error = "Conflict",
	message = "Resource already exists",
}: ErrorOptions = {}): NextResponse<ApiResponse<null>> => {
	return NextResponse.json(
		{
			success: false,
			message,
			error,
		},
		{ status: 409 }
	);
};

export const internalError = ({
	error = "Internal Server Error",
	message = "Something went wrong",
}: ErrorOptions = {}): NextResponse<ApiResponse<null>> => {
	return NextResponse.json(
		{
			success: false,
			message,
			error,
		},
		{ status: 500 }
	);
};

// Pagination helper
export const paginated = <T>({
	data,
	meta,
	message = "Success",
}: PaginatedOptions<T>): NextResponse<ApiResponse<T[]>> => {
	return NextResponse.json(
		{
			success: true,
			message,
			data,
			meta: {
				...meta,
				totalPages: Math.ceil(meta.total / meta.limit),
			},
		},
		{ status: 200 }
	);
};
