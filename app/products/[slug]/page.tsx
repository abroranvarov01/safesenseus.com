"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Shield, Flame, Wind } from "lucide-react"
import GlassBackground from "@/components/glass-background"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"

const productData: Record<string, any> = {
	"first-alert-co615": {
		icon: Shield,
		name: "First Alert CO615",
		type: "Carbon Monoxide Detector",
		description: "Plug-in CO detector with battery backup and digital display for instant readings",
		fullDescription:
			"The First Alert CO615 is a reliable carbon monoxide detector that plugs directly into any standard outlet. It features a digital display that shows CO levels in real-time, providing you with instant awareness of any dangerous conditions. The battery backup ensures continuous protection even during power outages.",
		price: "$39.99",
		rating: 5,
		features: ["Battery Backup", "Digital Display", "Easy Installation", "Loud 85dB Alarm", "Test/Reset Button"],
		specs: {
			"Power Source": "AC Plug-in with 9V Battery Backup",
			"Sensor Type": "Electrochemical CO Sensor",
			"Alarm Level": "85 decibels at 10 feet",
			Display: "Digital LCD",
			Warranty: "5 Years Limited",
		},
		amazonLink: "https://amazon.com/dp/B00000JJFQ",
		slug: "first-alert-co615",
		image: "/modern-white-carbon-monoxide-detector.jpg",
	},
	"kidde-smoke-co-combo": {
		icon: Flame,
		name: "Kidde Smoke & CO Combo",
		type: "Combination Alarm",
		description: "Smart combo alarm with voice alerts and smartphone notifications for complete protection",
		fullDescription:
			"The Kidde Smoke & CO Combo detector provides dual protection against both smoke and carbon monoxide. With smart app integration, you'll receive instant notifications on your smartphone whenever an alarm is triggered. Voice alerts clearly announce the type of danger detected, helping you respond appropriately.",
		price: "$49.99",
		rating: 4,
		features: [
			"App Support",
			"Voice Alerts",
			"10-Year Battery",
			"Dual Sensors",
			"Smart Home Compatible",
			"Wireless Interconnect",
		],
		specs: {
			"Power Source": "Sealed 10-Year Lithium Battery",
			"Sensor Type": "Photoelectric Smoke + Electrochemical CO",
			Connectivity: "Wi-Fi 2.4GHz",
			"Voice Alerts": "English/Spanish",
			Warranty: "10 Years Limited",
		},
		amazonLink: "https://amazon.com/dp/B07KXQF7Y7",
		slug: "kidde-smoke-co-combo",
		image: "/sleek-smoke-and-co-detector-white.jpg",
	},
	"google-nest-protect": {
		icon: Wind,
		name: "Google Nest Protect",
		type: "Smart Detector",
		description: "Premium smart detector with self-testing, pathlight, and seamless app integration",
		fullDescription:
			"Google Nest Protect is the most advanced smoke and CO detector available. It features automatic self-testing to ensure it's always working properly, a gentle pathlight that illuminates your way in the dark, and seamless integration with the Google Home ecosystem. The Split-Spectrum Sensor detects both fast and slow-burning fires.",
		price: "$99.99",
		rating: 5,
		features: [
			"Self-Testing",
			"Pathlight",
			"Premium Design",
			"Split-Spectrum Sensor",
			"App Silence",
			"Google Home Integration",
			"Steam Check",
		],
		specs: {
			"Power Source": "Wired 120V or Battery (6x AA)",
			"Sensor Type": "Split-Spectrum Photoelectric + CO Sensor",
			Connectivity: "Wi-Fi 802.11 b/g/n",
			Pathlight: "Automatic Motion-Activated",
			Warranty: "2 Years Limited",
		},
		amazonLink: "https://amazon.com/dp/B00XV1RD0K",
		slug: "google-nest-protect",
		image: "/google-nest-protect-smoke-detector.jpg",
	},
}

export default function ProductDetailPage() {
	const params = useParams();
	const slug = params.slug;
	const product = productData[params.slug]

	if (!product) {
		return (
			<main className="min-h-screen pt-24 relative">
				<GlassBackground />
				<div className="container px-4 mx-auto relative z-10 py-20 text-center">
					<h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
					<Link href="/products">
						<Button>Back to Products</Button>
					</Link>
				</div>
			</main>
		)
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.seus === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"seus=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	const Icon = product.icon

	return (
		<main className="min-h-screen pt-24 relative">
			<GlassBackground />

			<div className="container px-4 mx-auto relative z-10 py-12">
				{/* Back button */}
				<Link
					href="/products"
					className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
				>
					<ArrowLeft className="w-4 h-4" />
					Back to Products
				</Link>

				{/* Product detail */}
				<div className="max-w-6xl mx-auto">
					<div className="glass-strong rounded-3xl p-8 md:p-12 animate-fade-in-up">
						<div className="grid md:grid-cols-2 gap-12 items-start">
							{/* Product image */}
							<div className="space-y-6">
								<div className="relative aspect-square rounded-2xl overflow-hidden glass soft-glow">
									<img
										src={product.image || "/placeholder.svg"}
										alt={product.name}
										className="w-full h-full object-cover"
									/>
									<div className="absolute top-4 right-4 glass-subtle rounded-full px-4 py-2 text-sm font-semibold">
										{"⭐".repeat(product.rating)}
									</div>
								</div>

								{/* Slug display */}
								<div className="glass-subtle rounded-2xl p-4 border border-primary/20">
									<div className="text-xs text-muted-foreground mb-1">PRODUCT ID</div>
									<div className="font-mono text-lg text-primary font-semibold">{product.slug}</div>
								</div>
							</div>

							{/* Product info */}
							<div className="space-y-6">
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle text-xs font-medium text-secondary">
									<Icon className="w-4 h-4" />
									{product.type}
								</div>

								<h1 className="text-4xl md:text-5xl font-bold">{product.name}</h1>

								<p className="text-xl text-muted-foreground font-light leading-relaxed">{product.fullDescription}</p>

								{/* Features */}
								<div className="space-y-3">
									<h3 className="text-lg font-semibold">Key Features</h3>
									<div className="flex flex-wrap gap-2">
										{product.features.map((feature: string, i: number) => (
											<span key={i} className="glass-subtle rounded-full px-4 py-2 text-sm">
												{feature}
											</span>
										))}
									</div>
								</div>

								{/* Specifications */}
								<div className="space-y-3">
									<h3 className="text-lg font-semibold">Specifications</h3>
									<div className="glass-subtle rounded-2xl p-4 space-y-2">
										{Object.entries(product.specs).map(([key, value]) => (
											<div key={key} className="flex justify-between text-sm">
												<span className="text-muted-foreground">{key}:</span>
												<span className="font-medium">{value as string}</span>
											</div>
										))}
									</div>
								</div>

								{/* CTA Buttons */}
								<div className="flex flex-col sm:flex-row gap-4 pt-4">
									<Button
										size="lg"
										className="bg-primary text-primary-foreground hover:bg-primary/90 hover:soft-glow transition-all flex-1"
										onClick={() => window.open(product.amazonLink, "_blank")}
									>
										<ExternalLink className="w-5 h-5 mr-2" />
										Buy on Amazon
									</Button>
									<Link href="/products" className="flex-1">

									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
