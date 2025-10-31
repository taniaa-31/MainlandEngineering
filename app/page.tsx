"use client" //This tells Next.js 13+ that this component must run on the client-side (because it uses state and interactivity).
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { OurWork } from "@/components/ourWork"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import {useState} from "react"


export default function HomePage() {
  // const [showServices, setShowServices] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // const handleNavClick = (sectionName)=>{
  //   console.log("Navigating to:", sectionName)
  //   if(sectionName == "Services"){
  //     setShowServices(true);
  //   } else {
  //     setShowServices(false);
  //   }
  // } 
  const handleNavClick = (sectionName: string) => {
    console.log("Navigating to:", sectionName);
    setActiveSection(sectionName);
  };

  return (
    <main className="min-h-screen">
      <Navigation onNavClick={handleNavClick}/>
      {activeSection==="Home" && <HeroSection />}
      {activeSection==="Services" && <ServicesSection />}
      {activeSection === "Our Work" && <OurWork/>}
      {(activeSection === "Home" || activeSection === "About") && (
        <AboutSection isFullPage={activeSection === "About"} />
      )}
      {(activeSection === "Home" || activeSection === "Contact") &&<ContactSection />}
      <Footer />
    </main>
  )
}
