/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/validate.ts

import { NextRequest } from "next/server";
import { ZodSchema } from "zod";

export async function validateRequest(req: NextRequest, schema: ZodSchema) {
  try {
    // Clone the request to read body
    const clonedReq = req.clone();
    const body = await clonedReq.json();

    const result = schema.safeParse(body);

    if (!result.success) {
      const errorMessage = result.error.errors
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join(", ");
      return {
        success: false,
        error: "Validation failed",
        details: errorMessage
      };
    }

    // Return validated data
    return {
      success: true,
      data: result.data
    };
    
  } catch (e: any) {
    console.log(e.message);
    return {
      success: false,
      error: "Invalid JSON format"
    };
  }
}