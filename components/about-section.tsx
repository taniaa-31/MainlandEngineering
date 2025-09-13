import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target, Lightbulb } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in all our engineering solutions and client relationships.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients, architects, and contractors to achieve project success.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Delivering accurate, reliable engineering solutions that meet exact specifications.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new technologies and methodologies to solve complex engineering challenges.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Three Decades of Engineering Excellence
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Since our founding in 1994, Mainland Engineering Consultants Corporation has been at the forefront of
                structural and civil engineering innovation, delivering exceptional results for clients across diverse
                industries and project scales.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide innovative, sustainable, and cost-effective engineering solutions that exceed client
                  expectations while contributing to the development of safe and resilient infrastructure.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Our Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of licensed professional engineers brings extensive experience in structural analysis, civil
                  infrastructure design, and construction management, utilizing cutting-edge technology and industry
                  best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/professional-engineering-team-reviewing-blueprints.jpg"
                alt="Engineering team at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide our work and define our commitment to clients and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card border-border text-center hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
