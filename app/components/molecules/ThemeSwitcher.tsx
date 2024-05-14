"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../icons";

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const renderThemeChanger = () => {
		if (!mounted) return null;
		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<button type="button" onClick={() => setTheme("light")}>
					<SunIcon />
				</button>
			);
		} else {
			return (
				<button type="button" onClick={() => setTheme("dark")}>
					<MoonIcon />
				</button>
			);
		}
	};

	return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
