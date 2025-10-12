import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes intelligently.
 * @param inputs - The class names to combine.
 * @returns The combined class name string.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
