import type React from "react"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["300", "400", "500", "600", "700"],
})

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-mono",
	weight: ["300", "400", "500"],
})

export const metadata = {
	title: "safesenseus.com - Clean Safety Technology",
	description: "See the Invisible. Detect the Danger. Advanced CO, smoke, and gas detection for a safer home.",
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${poppins.variable} ${inter.variable}`}>
			<body className="glass-gradient min-h-screen">
				<Header />
				{children}
			</body>
		</html>
	)
}
