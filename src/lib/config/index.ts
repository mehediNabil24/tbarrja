// lib/config.ts

interface Config {
	database: {
		url: string;
	};
	auth: {
		jwtSecret: string;
		admin: {
			email: string;
			password: string;
		};
	};
	server: {
		nodeEnv: string;
		port: number;
	};
	app_url: string;
}

// List of required environment variables
const requiredEnvVars = [
	"DATABASE_URL",
	"JWT_SECRET",
	"NEXT_PUBLIC_ADMIN_EMAIL",
	"NEXT_PUBLIC_ADMIN_PASSWORD",
	"APP_URL",
] as const;

// Check for missing environment variables
function checkMissingEnvVars(): string[] {
	const missing: string[] = [];

	for (const envVar of requiredEnvVars) {
		if (!process.env[envVar]) {
			missing.push(envVar);
		}
	}

	return missing;
}

// Show warnings for missing environment variables
function showEnvWarnings(missingVars: string[]): void {
	if (missingVars.length > 0) {
		console.warn("\n⚠️  WARNING: Missing required environment variables:");
		missingVars.forEach((envVar) => {
			console.warn(`   - ${envVar}`);
		});
		console.warn("\nPlease set these variables in your .env file\n");
	}
}

// Get environment variables with defaults and warnings
export function getConfig(): Config {
	// Check for missing required variables
	const missingVars = checkMissingEnvVars();
	showEnvWarnings(missingVars);

	// Provide defaults for missing variables (for development)
	const getEnv = (key: string, defaultValue?: string): string => {
		const value = process.env[key];
		if (!value && defaultValue !== undefined) {
			if (missingVars.includes(key)) {
				console.warn(`🔧 Using default value for ${key}: ${defaultValue}`);
			}
			return defaultValue;
		}
		return value || "";
	};

	return {
		database: {
			url: getEnv("DATABASE_URL"),
		},
		app_url: getEnv("APP_URL"),
		auth: {
			jwtSecret: getEnv("JWT_SECRET"),
			admin: {
				email: getEnv("NEXT_PUBLIC_ADMIN_EMAIL", "admin@example.com"),
				password: getEnv("NEXT_PUBLIC_ADMIN_PASSWORD", "password123"),
			},
		},
		server: {
			nodeEnv: getEnv("NODE_ENV", "development"),
			port: parseInt(getEnv("PORT", "3000"), 10),
		},
	};
}

// Export the config
export const config = getConfig();

// Export individual sections for easier imports
export const { database, auth, server } = config;
