import type React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex min-h-screen flex-col justify-between bg-background text-foreground">
			<Nav />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
