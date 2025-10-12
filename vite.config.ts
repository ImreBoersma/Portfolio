import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biome";
import { generateCspPlugin } from "vite-plugin-bun-csp";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA(),
		biomePlugin({
			diagnosticLevel: "warn",
			logKind: "compact",
			mode: "check",
			applyFixes: true,
		}),
		Unfonts({
			google: {
				families: ["Roboto", "Roboto Mono"],
			},
		}),
		ViteImageOptimizer(),
		generateCspPlugin(),
		tailwindcss(),
		// After development
		// VitePluginRadar()
	],
	resolve: {
		alias: {
			"@": "/src",
			"@components": "/src/components",
			"@utils": "/src/utils",
			"@hooks": "/src/hooks",
			"@styles": "/src/styles",
		},
	},
});
