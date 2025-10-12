import { createContext, type FC, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextProps = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextProps>({
	theme: "system",
	setTheme: () => {},
});

const ThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("system");

	function toggleTheme() {
		setTheme((prevTheme) => {
			if (prevTheme === "light") return "dark";
			if (prevTheme === "dark") return "light";
			return "system";
		});
	}

	return (
		<ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
