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
	"smico100-ac-interconnect": {
		icon: Shield,
		name: "SMICO100 AC Interconnect",
		type: "Combination Detector",
		description: "Hardwired combination smoke and CO detector with reliable performance",
		fullDescription:
			"The SMICO100 AC Interconnect is a reliable hardwired combination smoke and carbon monoxide detector designed for comprehensive home protection. It supports interconnection with other compatible alarms, ensuring that all units trigger simultaneously in case of danger.",
		price: "$44.99",
		rating: 5,
		features: ["Hardwired", "Combination Detector", "Interconnectable"],
		specs: {
			"Power Source": "Hardwired 120V",
			"Sensor Type": "Photoelectric + Electrochemical",
			Connectivity: "Interconnectable up to 12 units",
			Alarm: "Loud 85dB sounder",
			Warranty: "5 Years Limited",
		},
		amazonLink: "https://www.amazon.com/SMICO100-AC-Interconnect-Hardwire-Combination-Monoxide/dp/B0CLVQF7MC",
		slug: "smico100-ac-interconnect",
		image: "https://m.media-amazon.com/images/I/81szIilT2dL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg",
	},

	"kidde-hardwired-monoxide": {
		icon: Shield,
		name: "Kidde Hardwired Monoxide Detector",
		type: "Carbon Monoxide Detector",
		description: "Interconnectable CO detector with LED indicators for enhanced safety",
		fullDescription:
			"The Kidde Hardwired Carbon Monoxide Detector features LED indicators and an electrochemical sensor for reliable CO detection. It can be interconnected with other alarms to ensure a full-home response during emergencies.",
		price: "$39.99",
		rating: 4,
		features: ["Hardwired", "LED Indicators", "Interconnectable"],
		specs: {
			"Power Source": "Hardwired 120V",
			"Sensor Type": "Electrochemical CO Sensor",
			Connectivity: "Interconnectable up to 24 devices",
			Indicators: "Green/Red LEDs for status and alarm",
			Warranty: "5 Years Limited",
		},
		amazonLink: "https://www.amazon.com/Kidde-Hardwired-Monoxide-Interconnectable-Indicators/dp/B0DDWC1RP9",
		slug: "kidde-hardwired-monoxide",
		image: "https://m.media-amazon.com/images/I/71aZ-ySqxWL._AC_SX679_.jpg",
	},

	"first-alert-co710": {
		icon: Flame,
		name: "First Alert CO710",
		type: "Carbon Monoxide Detector",
		description: "CO detector with digital display and temperature monitoring",
		fullDescription:
			"The First Alert CO710 is a sleek, battery-operated carbon monoxide detector featuring a digital display that shows CO levels and room temperature. Its built-in 10-year lithium battery provides long-term, maintenance-free protection.",
		price: "$36.99",
		rating: 5,
		features: ["Digital Display", "Temperature Monitoring", "10-Year Battery"],
		specs: {
			"Power Source": "Sealed 10-Year Lithium Battery",
			"Sensor Type": "Electrochemical CO Sensor",
			Display: "Digital LCD with temperature readout",
			Alarm: "85dB sounder with visual indicators",
			Warranty: "10 Years Limited",
		},
		amazonLink: "https://www.amazon.com/First-Alert-Monoxide-Temperature-CO710/dp/B011O2WW1C",
		slug: "first-alert-co710",
		image: "https://m.media-amazon.com/images/I/51bf1RtcEPL._AC_SX679_.jpg",
	},

	"kidde-battery-monoxide": {
		icon: Shield,
		name: "Kidde Battery Monoxide Detector",
		type: "Carbon Monoxide Detector",
		description: "Battery-operated CO detector with test and hush features",
		fullDescription:
			"The Kidde Battery-Operated Carbon Monoxide Detector provides easy installation and reliable protection. Featuring a test/hush button and loud alarm, it ensures early warning in case of CO buildup.",
		price: "$24.99",
		rating: 4,
		features: ["Battery Operated", "Test/Hush Button", "Easy Installation"],
		specs: {
			"Power Source": "2x AA Batteries",
			"Sensor Type": "Electrochemical CO Sensor",
			Alarm: "85dB horn with LED indicator",
			Buttons: "Test/Reset and Hush",
			Warranty: "7 Years Limited",
		},
		amazonLink: "https://www.amazon.com/Kidde-Monoxide-Detector-Battery-Test-Hush/dp/B0DT1MYBNV",
		slug: "kidde-battery-monoxide",
		image: "https://m.media-amazon.com/images/I/71EIUICeeRL._AC_SX679_.jpg",
	},

	"first-alert-pc1210": {
		icon: Flame,
		name: "First Alert PC1210",
		type: "Combination Detector",
		description: "Combination smoke and CO detector with photoelectric sensor",
		fullDescription:
			"The First Alert PC1210 features a slim profile and uses photoelectric and electrochemical sensors to detect both smoke and carbon monoxide. Ideal for modern homes that prioritize safety and style.",
		price: "$47.99",
		rating: 5,
		features: ["Photoelectric Sensor", "Combination Detector", "Slim Design"],
		specs: {
			"Power Source": "Sealed 10-Year Lithium Battery",
			"Sensor Type": "Photoelectric Smoke + CO Sensor",
			Alarm: "85dB sounder with LED status ring",
			Warranty: "10 Years Limited",
		},
		amazonLink: "https://www.amazon.com/First-Alert-PC1210-Combination-Photoelectric/dp/B01DXPVYN0",
		slug: "first-alert-pc1210",
		image: "https://m.media-amazon.com/images/I/61EQFiYTBHL._AC_SX679_.jpg",
	},

	"ring-listener": {
		icon: Wind,
		name: "Ring Alarm Listener",
		type: "Smart Accessory",
		description: "Smart listener for real-time alerts with existing smoke and CO detectors",
		fullDescription:
			"The Ring Alarm Listener connects to your Ring Alarm system and listens for the sound of smoke or CO alarms. It sends instant alerts to your smartphone, turning existing detectors into smart ones.",
		price: "$34.99",
		rating: 4,
		features: ["Smart Integration", "Real-Time Alerts", "Works with Existing Detectors"],
		specs: {
			"Power Source": "AC Plug-in",
			Connectivity: "Wi-Fi 2.4GHz (Ring App)",
			Compatibility: "Most smoke and CO alarms",
			Warranty: "1 Year Limited",
		},
		amazonLink: "https://www.amazon.com/Ring-Listener-Real-Time-Existing-Detectors/dp/B0DCX156J7",
		slug: "ring-listener",
		image: "https://m.media-amazon.com/images/I/41dwgKIkTpL._SX679_.jpg",
	},

	"x-sense-sc07-mr51": {
		icon: Flame,
		name: "X-Sense SC07-MR51",
		type: "Combination Detector",
		description: "Battery-operated interconnected smoke and CO detector bundle",
		fullDescription:
			"The X-Sense SC07-MR51 bundle provides interconnected smoke and CO protection throughout your home. All units sound simultaneously when one detects danger, ensuring everyone is alerted quickly.",
		price: "$89.99",
		rating: 5,
		features: ["Interconnected", "Battery Operated", "Combination Detector"],
		specs: {
			"Power Source": "Sealed 10-Year Lithium Battery",
			"Sensor Type": "Photoelectric Smoke + Electrochemical CO",
			Connectivity: "Wireless Interconnect (RF)",
			Warranty: "10 Years Limited",
		},
		amazonLink: "https://www.amazon.com/X-Sense-Battery-Operated-Interconnected-Combination-SC07-MR51/dp/B0D73KDSXD",
		slug: "x-sense-sc07-mr51",
		image: "https://m.media-amazon.com/images/I/71-ZQWqr1iL._AC_SX679_PIbundle-5,TopRight,0,0_SH20_.jpg",
	},

	"kidde-kn-copp-b-lpm": {
		icon: Shield,
		name: "Kidde KN-COPP-B-LPM",
		type: "Carbon Monoxide Detector",
		description: "Battery-operated CO detector with digital display for easy monitoring",
		fullDescription:
			"The Kidde KN-COPP-B-LPM provides clear digital readings of carbon monoxide levels and features a convenient battery-powered design. Ideal for portable or backup protection anywhere in your home.",
		price: "$31.99",
		rating: 4,
		features: ["Digital Display", "Battery Operated", "Test Button"],
		specs: {
			"Power Source": "3x AA Batteries",
			Display: "Digital LCD",
			"Sensor Type": "Electrochemical CO Sensor",
			Warranty: "7 Years Limited",
		},
		amazonLink: "https://www.amazon.com/Kidde-Battery-Operated-Monoxide-KN-Copp-B-LPM/dp/B004Y6V5CI",
		slug: "kidde-kn-copp-b-lpm",
		image: "https://m.media-amazon.com/images/I/71Q2PU+ZWVL._AC_SX679_.jpg",
	},

	"smoke-co-detector": {
		icon: Flame,
		name: "Smoke & CO Detector",
		type: "Combination Detector",
		description: "Reliable combination detector for comprehensive home safety",
		fullDescription:
			"This reliable combination smoke and CO detector offers dual protection in one compact unit. It features a loud alarm, easy setup, and provides essential safety for any home environment.",
		price: "$29.99",
		rating: 4,
		features: ["Combination Detector", "Easy Setup", "Loud Alarm"],
		specs: {
			"Power Source": "Battery Operated",
			"Sensor Type": "Photoelectric Smoke + CO",
			Alarm: "Loud 85dB alarm with LED indicator",
			Warranty: "5 Years Limited",
		},
		amazonLink: "https://www.amazon.com/dp/B0CF26RTD9",
		slug: "smoke-co-detector",
		image: "https://m.media-amazon.com/images/I/71ba1urVi6L._AC_SX679_.jpg",
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
									<a href={product.amazonLink} data-auto>
										<Button
											size="lg"
											className="bg-primary text-primary-foreground hover:bg-primary/90 hover:soft-glow transition-all flex-1"
										>
											<ExternalLink className="w-5 h-5 mr-2" />
											Buy on Amazon
										</Button>
									</a>
									<Link href="/products" className="flex-1">
										Back to Products
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
