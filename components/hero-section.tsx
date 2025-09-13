import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Expert Engineering Solutions for <span className="text-primary">30 Years</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Mainland Engineering Consultants Corporation delivers comprehensive structural and civil engineering
                services, building safe, sustainable, and innovative solutions for your most complex projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-6 w-6 text-primary mr-2" />
                  <span className="text-3xl font-bold text-foreground">30+</span>
                </div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  <span className="text-3xl font-bold text-foreground">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <span className="text-3xl font-bold text-foreground">50+</span>
                </div>
                <p className="text-sm text-muted-foreground">Expert Engineers</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src="/modern-engineering-building-construction-site-with.jpg"
                alt="Engineering construction site"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <p className="text-sm font-medium">Trusted by</p>
              <p className="text-2xl font-bold">200+ Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
