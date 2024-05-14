import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "./ThemeProvider";
import Navbar from "./components/organisms/Navbar";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Arcvats | Home",
	description:
		"Welcome to the portfolio of Archit. Explore my projects, skills, and blog.",
	keywords: "archit, arcvats, portfolio, blog, projects, skills",
	authors: [{ name: "Archit", url: "https://arcvats.com" }],
	// openGraph: {
	// 	title: "Arcvats | Home",
	// 	description:
	// 		"Welcome to the portfolio of Archit. Explore my projects, skills, and blog.",
	// 	images: {
	// 		url: "https://arcvats.com/og-image.png",
	// 		alt: "Arcvats",
	// 	},
	// },
	// twitter: {
	// 	title: "Arcvats | Home",
	// 	description:
	// 		"Welcome to the portfolio of Archit. Explore my projects, skills, and blog.",
	// 	images: {
	// 		url: "https://arcvats.com/og-image.png",
	// 		alt: "Arcvats",
	// 	},
	// },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className}`}>
				<Suspense fallback={<Loading />}>
					<ThemeProvider>
						<header className="fixed w-full z-30">
							<Navbar />
						</header>
						<main className="p-6 mx-auto max-w-7xl relative top-10">
							{children}
						</main>
					</ThemeProvider>
				</Suspense>
			</body>
		</html>
	);
}
