import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Badge as Bridge, Hammer, Calculator, Shield, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Building,
      title: "Structural Engineering",
      description:
        "Complete structural analysis, design, and inspection services for residential, commercial, and industrial buildings.",
      features: ["Structural Analysis", "Foundation Design", "Seismic Assessment", "Building Inspections"],
    },
    {
      icon: Bridge,
      title: "Civil Engineering",
      description: "Infrastructure planning and design including roads, bridges, water systems, and site development.",
      features: ["Site Development", "Transportation Design", "Water Management", "Environmental Planning"],
    },
    {
      icon: Calculator,
      title: "Engineering Analysis",
      description: "Advanced computational analysis using state-of-the-art software for complex engineering problems.",
      features: ["FEA Analysis", "Load Calculations", "Risk Assessment", "Performance Modeling"],
    },
    {
      icon: Hammer,
      title: "Construction Support",
      description: "On-site engineering support during construction phases to ensure quality and compliance.",
      features: ["Construction Oversight", "Quality Control", "Problem Resolution", "Progress Monitoring"],
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Comprehensive safety assessments and regulatory compliance for all engineering projects.",
      features: ["Code Compliance", "Safety Audits", "Regulatory Approval", "Documentation"],
    },
    {
      icon: Zap,
      title: "Retrofit & Renovation",
      description: "Structural upgrades and renovations to improve building performance and extend service life.",
      features: ["Structural Upgrades", "Seismic Retrofitting", "Modernization", "Efficiency Improvements"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Engineering Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From initial concept to final construction, we provide end-to-end engineering solutions tailored to meet
            your project's unique requirements and challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
