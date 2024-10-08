"use client";

import "./globals.css";
import "./components/modal.css";
import "./components/twemoji.css";
import { FontPreloader } from "./components/fontpreload";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* Meta tags */}
				<title>Zoltrack Discord Fake Decoration</title>
				<meta name="description" content="Ayo membuat dekor mu dengan sesukamu tanpa membuang uang banyak!" />

				{/* Open Graph embeds */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Zoltrack Discord Fake Decoration" />
				<meta property="og:description" content="Ayo membuat dekor mu dengan sesukamu tanpa membuang uang banyak!" />
				<meta property="og:image" content="https://discord-decorations.vercel.app/android-chrome-192x192.png" />

				{/* Twitter embeds */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Zoltrack Discord Fake Decoration" />
				<meta name="twitter:description" content="Ayo membuat dekor mu dengan sesukamu tanpa membuang uang banyak!" />
				<meta property="twitter:image" content="https://discord-decorations.vercel.app/android-chrome-192x192.png" />

				{/* Favicon */}
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />

				{/* Fonts */}
				<link rel="stylesheet" href="https://itspi3141.github.io/discord-fonts/font.css" />
			</head>
			<body className="bg-surface4 overflow-x-hidden">
				<FontPreloader />
				{children}
			</body>
		</html>
	);
}
