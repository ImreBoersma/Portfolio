import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./localization/i18n.config.ts";
import Loading from "@/components/Loading.tsx";
import Projects from "@/pages/Projects.tsx";
import Layout from "./components/Layout.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";

const container = document.getElementById("root");

if (!container) {
	throw new Error("Root container not found");
}

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		loader: Loading,
	},
	{
		path: "/loading",
		Component: Loading,
		loader: Loading,
	},
	{
		path: "/projects",
		Component: Projects,
		loader: Loading,
	},
]);
createRoot(container).render(
	<StrictMode>
		<ThemeProvider>
			<Layout>
				<Suspense fallback={<Loading />}>
					<RouterProvider router={router} />
				</Suspense>
			</Layout>
		</ThemeProvider>
	</StrictMode>,
);
