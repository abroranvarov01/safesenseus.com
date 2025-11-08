"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield } from "lucide-react"
import { useState } from "react"

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
    amazonLink: "https://amzn.to/482k4uI",
  },
  {
    name: "Kidde Hardwired Monoxide Detector",
    slug: "kidde-hardwired-monoxide",
    description: "Interconnectable CO detector with LED indicators for enhanced safety",
    image: "https://m.media-amazon.com/images/I/71aZ-ySqxWL._AC_SX679_.jpg",
    features: ["Hardwired", "LED Indicators", "Interconnectable"],
    amazonLink: "https://amzn.to/4hL9oUR",
  },
  {
    name: "First Alert CO710",
    slug: "first-alert-co710",
    description: "Carbon monoxide detector with digital display and temperature monitoring",
    image: "https://m.media-amazon.com/images/I/51bf1RtcEPL._AC_SX679_.jpg",
    features: ["Digital Display", "Temperature Monitoring", "10-Year Battery"],
    amazonLink: "https://amzn.to/4hMTKs3",
  },
]

export default function FeaturedDevices() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="devices" className="py-24 relative overflow-hidden">
      {/* Floating glass particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-20 animate-bubble-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                Math.random() > 0.5 ? "rgba(71, 202, 204, 0.2)" : "rgba(122, 96, 255, 0.2)"
              }, transparent)`,
              backdropFilter: "blur(20px)",
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Smart Protection.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Premium detectors that blend seamlessly with your home while providing advanced safety monitoring
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main product display */}
            <div className="glass-strong rounded-3xl p-8 md:p-12 animate-breathe">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Product image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden glass soft-glow">
                  <img
                    src={products[activeIndex].image || "/placeholder.svg"}
                    alt={products[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 glass-subtle rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Certified
                  </div>
                </div>

                {/* Product details */}
                <div className="space-y-6 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle text-xs font-medium text-secondary">
                    Safety Detector
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold">{products[activeIndex].name}</h3>

                  <p className="text-muted-foreground font-light leading-relaxed">
                    {products[activeIndex].description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {products[activeIndex].features.map((feature, i) => (
                      <span key={i} className="glass-subtle rounded-full px-3 py-1 text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <Link href={products[activeIndex].amazonLink} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 hover:soft-glow transition-all"
                      >
                        Buy on Amazon
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Product thumbnails */}
            <div className="flex justify-center gap-4 mt-8">
              {products.map((product, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`p-4 rounded-2xl transition-all ${
                    activeIndex === index
                      ? "glass-strong neon-outline scale-110"
                      : "glass-subtle hover:glass opacity-60 hover:opacity-100"
                  }`}
                >
                  <Shield className="w-6 h-6 text-primary" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
