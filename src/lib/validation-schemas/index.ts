// lib/validation-schemas.ts

import { z } from "zod";

// Auth Schema
export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

export type LoginInput = z.infer<typeof loginSchema>;

// Product Schema
export const productSchema = z.object({
	date: z.string().datetime(),
	name: z.string().min(1).max(100),
	monthlyAvg: z.number().nullable().optional(),
	dailyAvg: z.number().nullable().optional(),
	equityStopLoss: z.number().nullable().optional(),
	avgTradeLength: z.string().max(50).nullable().optional(),
	description: z.string().min(1),
});

export type ProductInput = z.infer<typeof productSchema>;

// Pricing Schema
export const pricingSchema = z.object({
	equityRange: z.string().min(1).max(100),
	productType: z.string().min(1).max(50),
	subscription: z.string().min(1).max(50),
	basePrice: z.string().min(1).max(20),
	additionalLicenses: z.string().min(1).max(100),
});

export type PricingInput = z.infer<typeof pricingSchema>;

// Subscription Rule Schema
export const ruleSchema = z.object({
	rule: z.string().min(1),
});

export type RuleInput = z.infer<typeof ruleSchema>;

// Testimonial Schema
export const testimonialSchema = z.object({
	clientName: z.string().min(1).max(50),
	designation: z.string().min(1).max(50),
	company: z.string().min(1).max(100),
	imageUrl: z.string().url(),
	review: z.string().min(1),
});

export type TestimonialInput = z.infer<typeof testimonialSchema>;

// FAQ Schema
export const faqSchema = z.object({
	question: z.string().min(1),
	answer: z.string().min(1),
});

export type FAQInput = z.infer<typeof faqSchema>;

export const settingSchema = z.object({
	privacyPolicy: z.string().optional(),
	termsAndCondition: z.string().optional(),
	socialLinks: z
		.array(
			z.object({
				name: z.string(),
				link: z.string().url(), // stricter validation
			})
		)
		.default([]),
	investorLogin: z.string().default(""),
});

export type SettingInput = z.infer<typeof settingSchema>;

export const changePasswordSchema = z
	.object({
		currentPassword: z
			.string()
			.min(6, "Current password must be at least 6 characters"),
		newPassword: z
			.string()
			.min(8, "New password must be at least 8 characters")
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
				"Password must contain at least one uppercase letter, one lowercase letter, and one number"
			),
		confirmNewPassword: z.string(),
	})
	.refine((data) => data.newPassword === data.confirmNewPassword, {
		message: "New passwords don't match",
		path: ["confirmNewPassword"],
	});

export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;

export const validationSchemas = {
	"/api/auth/login": loginSchema,
	"/api/products": productSchema,
	"/api/pricing": pricingSchema,
	"/api/subscription-rules": ruleSchema,
	"/api/testimonials": testimonialSchema,
	"/api/faqs": faqSchema,
	"/api/settings": settingSchema, // Add this line
	"/api/auth/change-password": changePasswordSchema,
};
