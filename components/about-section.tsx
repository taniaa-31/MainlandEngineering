
// ////new one latest -10:26
// import  { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Award, Users, Target, Lightbulb, Home, Building2, HardHat, ArrowRight, UserPlus } from "lucide-react"
// import { ApplicationForm } from "./ApplicationForm"
// import { Residential } from "./residential" 
// import { Commercial } from "./commercial"
// import { Civil } from "./civil"


// export function AboutSection({isFullPage = false}:{isFullPage?:boolean}) {

//   const [showResidential, setShowResidential] = useState(false);
//   const [showCommercial, setShowCommercial] = useState(false);
//   const [showCivil, setShowCivil] = useState(false);


//   //for application form
//   // controls whether the form is visible
//   const [showForm, setShowForm] = useState(false);

//   // 👇 This is the onClose function
//   const handleCloseForm = () => {
//     setShowForm(false)
//   }

//   const values = [
//     {
//       icon: Award,
//       title: "Excellence",
//       description: "We maintain the highest standards in all our engineering solutions and client relationships.",
//     },
//     {
//       icon: Users,
//       title: "Collaboration",
//       description: "Working closely with clients, architects, and contractors to achieve project success.",
//     },
//     {
//       icon: Target,
//       title: "Precision",
//       description: "Delivering accurate, reliable engineering solutions that meet exact specifications.",
//     },
//     {
//       icon: Lightbulb,
//       title: "Innovation",
//       description: "Embracing new technologies and methodologies to solve complex engineering challenges.",
//     },
//   ]

//   return (
    
//     <section id="about" className="py-20 bg-background mt-16">
//        {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-[#1B6083] rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
//                 Three Decades of Engineering Excellence
//               </h2>
//               <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
//                 Since our founding in 1994, Mainland Engineering has been at the forefront of
//                 structural and civil engineering innovation, delivering exceptional results for clients across diverse
//                 industries and project scales.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   To provide innovative, sustainable, and cost-effective engineering solutions that exceed client
//                   expectations while contributing to the development of safe and resilient infrastructure.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-foreground mb-2">Our Expertise</h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   Our team of licensed professional engineers brings extensive experience in structural analysis, civil
//                   infrastructure design, and construction management, utilizing cutting-edge technology and industry
//                   best practices.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="relative">
//             <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
//               <img
//                 src="/SMG.png"
//                 alt="Engineering team at work"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>

//    {/* Decorative Line + Service Regions */}
// <div className="text-center mt-6">
//   <div className="flex justify-center items-center mb-3">
//     <div className="w-16 h-[2px] bg-[#1B6083] rounded-full mr-2"></div>
//     <div className="w-3 h-3 bg-[#1B6083] rounded-full"></div>
//     <div className="w-16 h-[2px] bg-[#1B6083] rounded-full ml-2"></div>
//   </div>
//   <p className="text-lg font-semibold text-[#1B6083] tracking-wide font-serif">
//     We proudly provide our services across <span className="text-[#14536A]">British Columbia</span>, <span className="text-[#14536A]">Alberta</span>, and <span className="text-[#14536A]">Washington</span>.
//   </p>
// </div>

//         </div>
//         </div>
//         <div>

//         </div>

//         {/* Service Categories - only show if full page*/}
//         {isFullPage && (
//           <div className="mb-20 mt-24">
//             <div className="text-center mb-12">
//               <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Explore More Into What We Do!</h3>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 Discover our specialized engineering services across residential, commercial, and civil sectors.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//               {/* Residential Card */}
//               <button
//                 onClick={() => setShowResidential(true)}
//                 className="group relative rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-cyan-50"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 <div className="relative p-8 text-center">
//                   <div className="flex justify-center mb-6">
//                     <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl group-hover:bg-white transition-colors duration-300 shadow-md">
//                       <Home className="h-12 w-12 text-primary" />
//                     </div>
//                   </div>
                  
//                   <h4 className="text-2xl font-bold text-slate-900 mb-4">Residential</h4>
//                   {/* <p className="text-slate-600 leading-relaxed mb-6">
//                     Custom homes, renovations, additions, and multi-family residential projects with structural integrity you can trust.
//                   </p> */}
                  
//                   <div className="flex items-center justify-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
//                     Learn More
//                     <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </button>

//               {/* Commercial Card */}
//               <button
//                 onClick={() => setShowCommercial(true)}
//                 className="group relative rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-indigo-50 to-blue-50"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 <div className="relative p-8 text-center">
//                   <div className="flex justify-center mb-6">
//                     <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl group-hover:bg-white transition-colors duration-300 shadow-md">
//                       <Building2 className="h-12 w-12 text-primary" />
//                     </div>
//                   </div>
                  
//                   <h4 className="text-2xl font-bold text-slate-900 mb-4 " >Commercial</h4>
//                   {/* <p className="text-slate-600 leading-relaxed mb-6">
//                     Office buildings, retail spaces, industrial facilities, and mixed-use developments engineered for success.
//                   </p> */}
                  
//                   <div className="flex items-center justify-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
//                     Learn More
//                     <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </button>

//               {/* Civil Card */}
//               <button
//                 onClick={() => setShowCivil(true)}
//                 className="group relative rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-slate-50 to-gray-50"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 <div className="relative p-8 text-center">
//                   <div className="flex justify-center mb-6">
//                     <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl group-hover:bg-white transition-colors duration-300 shadow-md">
//                       <HardHat className="h-12 w-12 text-primary" />
//                     </div>
//                   </div>
                  
//                   <h4 className="text-2xl font-bold text-slate-900 mb-4">Civil</h4>
//                   {/* <p className="text-slate-600 leading-relaxed mb-6">
//                     Infrastructure design, site development, transportation systems, and municipal engineering solutions.
//                   </p> */}
                  
//                   <div className="flex items-center justify-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
//                     Learn More
//                     <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </button>
//             </div>
//           </div>
//         )}

//         {/* 👇 Render the popup when open */}
//       {showResidential && <Residential onClose={() => setShowResidential(false)} />}
//         {showCommercial && <Commercial onClose={() => setShowCommercial(false)} />}
//         {showCivil && <Civil onClose={() => setShowCivil(false)} />}

//         {/* Join Our Team Section - only show if full page */}
//         {isFullPage && (
//           <div className="mt-24 mb-20">
//             <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-cyan-400/10 border-2 border-primary/20">
//               {/* Decorative background elements */}
//               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
//               <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
              
//               <div className="relative grid lg:grid-cols-2 gap-8 items-center">
//                 {/* Content */}
//                 <div className="px-8 py-16 lg:py-20 text-center lg:text-left">
//                   <div className="flex justify-center lg:justify-start mb-6">
//                     <div className="p-4 bg-primary/10 rounded-2xl">
//                       <UserPlus className="h-12 w-12 text-primary" />
//                     </div>
//                   </div>
                  
//                   <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                     Join Our Team
//                   </h3>
//                   <p className="text-lg text-muted-foreground mb-8">
//                     Be part of a dynamic team of engineers shaping the future of infrastructure. We're always looking for talented professionals who share our passion for excellence and innovation.
//                   </p>
                  
//                   <button
//                     onClick={() => setShowForm(true)}
   
//                     className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
//                   >
//                     Apply Now
//                     <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                   </button>

//                   {/* Pass handleCloseForm down as the onClose prop */}
//       {showForm && <ApplicationForm onClose={handleCloseForm} />}
                  
//                   {/* <p className="mt-6 text-sm text-muted-foreground">
//                     Current openings include Structural Engineers, Civil Engineers, and Project Coordinators
//                   </p> */}
//                 </div>

//                 {/* Image */}
//                 <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
//                   <img
//                     src="/Team.jpg"
//                     alt="Engineering team collaboration"
//                     className="absolute inset-0 w-full h-full object-cover lg:rounded-r-3xl"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary/20 to-transparent lg:rounded-r-3xl"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Values */}
//         {!isFullPage && (
//           <div className="mt-20">
//           <div className="text-center mb-12">
//             <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">Our Core Values</h3>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//               The principles that guide our work and define our commitment to clients and communities.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => (
//               <Card
//                 key={index}
//                 className="bg-card border-border text-center hover:shadow-md transition-shadow duration-300"
//               >
//                 <CardContent className="p-6">
//                   <div className="flex justify-center mb-4">
//                     <div className="p-3 bg-primary/10 rounded-full">
//                       <value.icon className="h-8 w-8 text-primary" />
//                     </div>
//                   </div>
//                   <h4 className="text-lg font-semibold text-card-foreground mb-3">{value.title}</h4>
//                   <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//         )}
        
      
//     </section>
//   )
// }







"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Award,
  Users,
  Target,
  Lightbulb,
  Home,
  Building2,
  HardHat,
  ArrowRight,
  UserPlus,
} from "lucide-react"
import { ApplicationForm } from "./ApplicationForm"
import { Residential } from "./residential"
import { Commercial } from "./commercial"
import { Civil } from "./civil"

export function AboutSection({ isFullPage = false }: { isFullPage?: boolean }) {
  const [showResidential, setShowResidential] = useState(false)
  const [showCommercial, setShowCommercial] = useState(false)
  const [showCivil, setShowCivil] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const handleCloseForm = () => setShowForm(false)

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in all our engineering solutions and client relationships.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working closely with clients, architects, and contractors to achieve project success.",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Delivering accurate, reliable engineering solutions that meet exact specifications.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Embracing new technologies and methodologies to solve complex engineering challenges.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background mt-16 relative overflow-hidden scroll-mt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1B6083] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance scroll-mt-28">
                Three Decades of Engineering Excellence
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Since our founding in 1994, Mainland Engineering has been at the forefront of
                structural and civil engineering innovation, delivering exceptional results for
                clients across diverse industries and project scales.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide innovative, sustainable, and cost-effective engineering solutions that
                  exceed client expectations while contributing to the development of safe and
                  resilient infrastructure.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Our Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of licensed professional engineers brings extensive experience in
                  structural analysis, civil infrastructure design, and construction management,
                  utilizing cutting-edge technology and industry best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-lg">
              <img
                src="/SMG.png"
                alt="Engineering team at work"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Decorative Line + Service Regions */}
        <div className="text-center mt-20">
          <div className="flex justify-center items-center mb-3">
            <div className="w-16 h-[2px] bg-[#1B6083] rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-[#1B6083] rounded-full"></div>
            <div className="w-16 h-[2px] bg-[#1B6083] rounded-full ml-2"></div>
          </div>
          {/* <p className="text-lg font-semibold text-[#1B6083] tracking-wide font-serif">
            We proudly provide our services across{" "}
            <span className="text-[#14536A]">British Columbia</span>,{" "}
            <span className="text-[#14536A]">Alberta</span>, and{" "}
            <span className="text-[#14536A]">Washington</span>.
          </p> */}
          <p className="text-lg font-semibold text-[#1B6083] tracking-wide font-serif">
  We proudly provide our services across{" "}
  <span className="text-[#14536A]">British Columbia</span>,{" "}
  <span className="text-[#14536A]">Alberta</span>,{" "}
  <span className="text-[#14536A]">Washington</span>, and we are happy to work all over <span className="text-[#14536A]">Canada</span>.
</p>
        </div>

        {/* Service Categories */}
        {isFullPage && (
          <div className="mb-20 mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let's Explore More Into What We Do!
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our specialized engineering services across residential, commercial, and
                civil sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Residential */}
              <button
                onClick={() => setShowResidential(true)}
                className="group relative rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-cyan-50"
              >
                <div className="relative p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md">
                      <Home className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">Residential</h4>
                  <div className="flex items-center justify-center text-primary font-semibold gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>

              {/* Commercial */}
              <button
                onClick={() => setShowCommercial(true)}
                className="group relative rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-indigo-50 to-blue-50"
              >
                <div className="relative p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md">
                      <Building2 className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">Commercial</h4>
                  <div className="flex items-center justify-center text-primary font-semibold gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>

              {/* Civil */}
              <button
                onClick={() => setShowCivil(true)}
                className="group relative rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-slate-50 to-gray-50"
              >
                <div className="relative p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md">
                      <HardHat className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">Civil</h4>
                  <div className="flex items-center justify-center text-primary font-semibold gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Popups */}
        {showResidential && <Residential onClose={() => setShowResidential(false)} />}
        {showCommercial && <Commercial onClose={() => setShowCommercial(false)} />}
        {showCivil && <Civil onClose={() => setShowCivil(false)} />}

        {/* Join Our Team */}
        {isFullPage && (
          <div className="mt-24 mb-20">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-cyan-400/10 border-2 border-primary/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>

              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div className="px-8 py-16 lg:py-20 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <UserPlus className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Join Our Team
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Be part of a dynamic team shaping the future of infrastructure. We’re always
                    looking for talented professionals who share our passion for excellence and
                    innovation.
                  </p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    Apply Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {showForm && <ApplicationForm onClose={handleCloseForm} />}
                </div>

                <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                  <img
                    src="/Team.jpg"
                    alt="Engineering team collaboration"
                    className="absolute inset-0 w-full h-full object-cover lg:rounded-r-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary/20 to-transparent lg:rounded-r-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Core Values */}
        {!isFullPage && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Core Values
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and define our commitment to clients and
                communities.
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
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
