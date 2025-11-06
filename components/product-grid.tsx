"use client"

import { ShoppingCart, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
	name: string
	slug: string
	description: string
	image: string
	features: string[]
	amazonLink: string
}

const products: Product[] = [
	{
		name: "SMICO100 AC Interconnect",
		slug: "smico100-ac-interconnect",
		description: "Hardwired combination smoke and CO detector with reliable performance",
		image: "https://m.media-amazon.com/images/I/81szIilT2dL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg",
		features: ["Hardwired", "Combination Detector", "Interconnectable"],
		amazonLink: "https://www.amazon.com/SMICO100-AC-Interconnect-Hardwire-Combination-Monoxide/dp/B0CLVQF7MC"
	},
	{
		name: "Kidde Hardwired Monoxide Detector",
		slug: "kidde-hardwired-monoxide",
		description: "Interconnectable CO detector with LED indicators for enhanced safety",
		image: "https://m.media-amazon.com/images/I/71aZ-ySqxWL._AC_SX679_.jpg",
		features: ["Hardwired", "LED Indicators", "Interconnectable"],
		amazonLink: "https://www.amazon.com/Kidde-Hardwired-Monoxide-Interconnectable-Indicators/dp/B0DDWC1RP9"
	},
	{
		name: "First Alert CO710",
		slug: "first-alert-co710",
		description: "Carbon monoxide detector with digital display and temperature monitoring",
		image: "https://m.media-amazon.com/images/I/51bf1RtcEPL._AC_SX679_.jpg",
		features: ["Digital Display", "Temperature Monitoring", "10-Year Battery"],
		amazonLink: "https://www.amazon.com/First-Alert-Monoxide-Temperature-CO710/dp/B011O2WW1C"
	},
	{
		name: "Kidde Battery Monoxide Detector",
		slug: "kidde-battery-monoxide",
		description: "Battery-operated CO detector with test and hush features",
		image: "https://m.media-amazon.com/images/I/71EIUICeeRL._AC_SX679_.jpg",
		features: ["Battery Operated", "Test/Hush Button", "Easy Installation"],
		amazonLink: "https://www.amazon.com/Kidde-Monoxide-Detector-Battery-Test-Hush/dp/B0DT1MYBNV"
	},
	{
		name: "First Alert PC1210",
		slug: "first-alert-pc1210",
		description: "Combination smoke and CO detector with photoelectric sensor",
		image: "https://m.media-amazon.com/images/I/61EQFiYTBHL._AC_SX679_.jpg",
		features: ["Photoelectric Sensor", "Combination Detector", "Slim Design"],
		amazonLink: "https://www.amazon.com/First-Alert-PC1210-Combination-Photoelectric/dp/B01DXPVYN0"
	},
	{
		name: "Ring Alarm Listener",
		slug: "ring-listener",
		description: "Smart listener for real-time alerts with existing smoke and CO detectors",
		image: "https://m.media-amazon.com/images/I/41dwgKIkTpL._SX679_.jpg",
		features: ["Smart Integration", "Real-Time Alerts", "Works with Existing Detectors"],
		amazonLink: "https://www.amazon.com/Ring-Listener-Real-Time-Existing-Detectors/dp/B0DCX156J7"
	},
	{
		name: "X-Sense SC07-MR51",
		slug: "x-sense-sc07-mr51",
		description: "Battery-operated interconnected smoke and CO detector bundle",
		image: "https://m.media-amazon.com/images/I/71-ZQWqr1iL._AC_SX679_PIbundle-5,TopRight,0,0_SH20_.jpg",
		features: ["Interconnected", "Battery Operated", "Combination Detector"],
		amazonLink: "https://www.amazon.com/X-Sense-Battery-Operated-Interconnected-Combination-SC07-MR51/dp/B0D73KDSXD"
	},
	{
		name: "Kidde KN-COPP-B-LPM",
		slug: "kidde-kn-copp-b-lpm",
		description: "Battery-operated CO detector with digital display for easy monitoring",
		image: "https://m.media-amazon.com/images/I/71Q2PU+ZWVL._AC_SX679_.jpg",
		features: ["Digital Display", "Battery Operated", "Test Button"],
		amazonLink: "https://www.amazon.com/Kidde-Battery-Operated-Monoxide-KN-Copp-B-LPM/dp/B004Y6V5CI"
	},
	{
		name: "Smoke & CO Detector",
		slug: "smoke-co-detector",
		description: "Reliable combination detector for comprehensive home safety",
		image: "https://m.media-amazon.com/images/I/71ba1urVi6L._AC_SX679_.jpg",
		features: ["Combination Detector", "Easy Setup", "Loud Alarm"],
		amazonLink: "https://www.amazon.com/dp/B0CF26RTD9"
	},
]

export default function ProductGrid() {
	return (
		<section className="py-24" id="product-grid">
			<div className="container px-4 mx-auto">
				<div className="text-center space-y-4 mb-16">
					<h2 className="text-3xl md:text-5xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
						Complete Product Catalog
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
						Browse our full range of safety detectors with unique product identifiers
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{products.map((product) => (
						<div
							key={product.slug}
							className="glass-strong rounded-3xl p-6 hover:neon-outline transition-all duration-300 group animate-breathe"
						>
							{/* Product Slug - Primary Focus */}
							<div className="mb-6 text-center">
								<div className="glass-strong rounded-2xl px-6 py-4 inline-block border-2 border-primary/30 hover:border-primary/60 transition-colors">
									<div className="text-xs text-muted-foreground mb-1 font-light">PRODUCT ID</div>
									<code className="text-lg font-bold text-primary font-mono tracking-wide">{product.slug}</code>
								</div>
							</div>

							{/* Product Image */}
							<div className="relative aspect-square mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
								<img
									src={product.image || "/placeholder.svg"}
									alt={product.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs font-medium">
									<Shield className="w-3 h-3 inline mr-1" />
									Certified
								</div>
							</div>

							{/* Product Info */}
							<div className="space-y-4 text-center">
								<h3 className="text-xl font-bold">{product.name}</h3>
								<p className="text-sm text-muted-foreground font-light">{product.description}</p>

								{/* Features */}
								<div className="flex flex-wrap gap-2 justify-center">
									{product.features.map((feature, idx) => (
										<span key={idx} className="text-xs glass rounded-full px-3 py-1 flex items-center gap-1">
											<Zap className="w-3 h-3 text-secondary" />
											{feature}
										</span>
									))}
								</div>

								{/* CTA Button */}
								<a href={product.amazonLink} data-auto>
									<Button
										className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"

									>
										<ShoppingCart className="w-4 h-4 mr-2" />
										View on Amazon
									</Button>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
