import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "Metropolitan Office Complex",
      category: "Commercial",
      description: "Structural design for a 25-story mixed-use development in downtown area.",
      image: "/modern-office-building-skyscraper-glass-facade.jpg",
      tags: ["High-rise", "Mixed-use", "Seismic Design"],
    },
    {
      title: "Harbor Bridge Rehabilitation",
      category: "Infrastructure",
      description: "Complete structural assessment and retrofit of a major transportation bridge.",
      image: "/large-suspension-bridge-over-water-engineering.jpg",
      tags: ["Bridge Design", "Retrofit", "Transportation"],
    },
    {
      title: "Green Valley Residential",
      category: "Residential",
      description: "Sustainable housing development with innovative foundation solutions.",
      image: "/modern-residential-housing-development-green-archi.jpg",
      tags: ["Residential", "Sustainable", "Foundation"],
    },
    {
      title: "Industrial Manufacturing Plant",
      category: "Industrial",
      description: "Heavy industrial facility design with specialized structural requirements.",
      image: "/industrial-manufacturing-plant-steel-structure.jpg",
      tags: ["Industrial", "Heavy Load", "Steel Structure"],
    },
    {
      title: "University Science Center",
      category: "Institutional",
      description: "Multi-story research facility with advanced laboratory requirements.",
      image: "/modern-university-science-building-glass-and-concr.jpg",
      tags: ["Institutional", "Laboratory", "Multi-story"],
    },
    {
      title: "Coastal Protection System",
      category: "Infrastructure",
      description: "Seawall and coastal protection infrastructure for waterfront development.",
      image: "/coastal-seawall-protection-infrastructure-ocean.jpg",
      tags: ["Coastal", "Protection", "Marine"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our portfolio of successful engineering projects across various sectors, showcasing our expertise
            and commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2 text-balance">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
