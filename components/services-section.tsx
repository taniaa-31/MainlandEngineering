// import {
//   Building,
//   Construction,
//   Hammer,
//   Calculator,
//   Zap,
//   Shield,
//   Lightbulb,
//   FileCheck,
//   Leaf,
//   TrendingDown,
//   Clock,
// } from "lucide-react"

// export function ServicesSection() {
//   const services = [
//     {
//       icon: Building,
//       title: "Structural Engineering",
//       description:
//         "We collaborate with builders and architects to design residential, commercial, and industrial structures — from initial concepts to detailed construction plans.",
//       features: [
//         "Project feasibility, structural analysis and code compliance",
//         "Establishing project requirements with achitects and stakeholders",
//         "Detailed structural engineering plans for construction",
//         "Design of wood, steel, concrete, and masonary structures",
//       ],
//     },
//     {
//       icon: Construction,
//       title: "Civil Engineering",
//       description:
//         "Infrastructure planning and design including roads, bridges, water systems, and site development.",
//       features: [
//         "Urban design and Land Development",
//         "Residential and housing land use studies",
//         "Multi-family site development",
//         "Commercial and Industrial Development",
//       ],
//     },
//     {
//       icon: Hammer,
//       title: "Construction Support",
//       description:
//         "Support the construction team throughout all phases to ensure quality and code compliance.",
//       features: [
//         "Conducting engineering field reviews",
//         "Providing practical solutions to on-site construction challenges",
//         "Documenting structural observations throughout all construction phases",
//       ],
//     },
//     {
//       icon: Zap,
//       title: "Retrofit & Renovation",
//       description:
//         "Structural upgrades and renovations of existing buildings for code compliance and improved performance",
//       features: [
//        "Seismic assessment of existing structures",
//     "Feasibility assessments for proposed building alterations",
//       ],
//     },
//   ]

//   // const benefits = [
//   //   {
//   //     icon: Lightbulb,
//   //     title: "Innovative Solutions",
//   //     description:
//   //       "We leverage cutting-edge technology and creative problem-solving to deliver efficient, cost-effective engineering solutions.",
//   //   },
//   //   {
//   //     icon: Shield,
//   //     title: "Safety First",
//   //     description:
//   //       "Safety is our top priority. Every project undergoes rigorous analysis to ensure structural integrity and occupant protection.",
//   //   },
//   //   {
//   //     icon: FileCheck,
//   //     title: "Regulatory Compliance",
//   //     description:
//   //       "Our team stays current with all building codes and regulations to ensure your project meets all legal requirements.",
//   //   },
//   //   {
//   //     icon: Leaf,
//   //     title: "Sustainable Design",
//   //     description:
//   //       "We integrate sustainable practices and materials to create environmentally responsible engineering solutions.",
//   //   },
//   //   {
//   //     icon: TrendingDown,
//   //     title: "Cost Optimization",
//   //     description:
//   //       "Our value engineering approach identifies opportunities to reduce costs without compromising quality or safety.",
//   //   },
//   //   {
//   //     icon: Clock,
//   //     title: "Timely Delivery",
//   //     description:
//   //       "We understand project deadlines and work efficiently to deliver results on schedule without sacrificing quality.",
//   //   },
//   // ]

//   return (
//     <section id="services" className="py-20 bg-white font-['Poppins'] relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-semibold text-[#1B6083] mb-4 tracking-tight">
//             Comprehensive Engineering Services
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             From concept to completion, our team provides tailored engineering solutions that ensure safety, efficiency, and innovation.
//           </p>
//         </div>

//         {/* Services */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group relative border border-[#1B6083]/20 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.02] overflow-hidden"
//             >
//               {/* Card Background Pattern */}
//               <div className="absolute inset-0 opacity-30">
//                 <div className="absolute top-0 left-0 w-40 h-40 bg-[#1B6083] rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
//               </div>

//               {/* Card Content */}
//               <div className="relative z-10">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-[#1B6083] rounded-lg group-hover:bg-[#1B6083]/90 transition-colors duration-300">
//                     <service.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-[#1B6083] group-hover:text-[#10445C] transition-colors">
//                     {service.title}
//                   </h3>
//                 </div>

//                 <p className="text-gray-700 text-base leading-relaxed mb-6">
//                   {service.description}
//                 </p>

//                 <ul className="space-y-2 text-base text-gray-600">
//                   {service.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       <span className="w-2 h-2 bg-[#1B6083] rounded-full"></span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

      
//         {/* <div className="mt-24">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-semibold text-[#1B6083] mb-4 tracking-tight">
//               Why Choose Our Engineering Services
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Experience excellence through our commitment to quality, innovation, and client satisfaction
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {benefits.map((benefit, index) => (
//               <div
//                 key={index}
//                 className="group relative border border-[#1B6083]/20 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.02] overflow-hidden"
//               >
               
//                 <div className="absolute inset-0 opacity-30">
//                   <div className="absolute top-0 left-0 w-40 h-40 bg-[#1B6083] rounded-full blur-3xl"></div>
//                   <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
//                 </div>

              
//                 <div className="relative z-10">
//                   <div className="mb-4">
//                     <div className="inline-flex p-3 bg-[#1B6083] rounded-lg group-hover:bg-[#1B6083]/90 transition-colors duration-300">
//                       <benefit.icon className="h-6 w-6 text-white" />
//                     </div>
//                   </div>

//                   <h3 className="text-xl font-semibold text-[#1B6083] mb-3 group-hover:text-[#10445C] transition-colors">
//                     {benefit.title}
//                   </h3>

//                   <p className="text-gray-600 text-base leading-relaxed">
//                     {benefit.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}
//       </div>
//     </section>
//   )
// }






"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { Building, Construction, Hammer, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Building,
      title: "Structural Engineering",
      description:
        "We collaborate with builders and architects to design residential, commercial, and industrial structures — from initial concepts to detailed construction plans.",
      features: [
        "Project feasibility, structural analysis and code compliance",
        "Establishing project requirements with architects and stakeholders",
        "Detailed structural engineering plans for construction",
        "Design of wood, steel, concrete, and masonry structures",
      ],
    },
    {
      icon: Construction,
      title: "Civil Engineering",
      description:
        "Infrastructure planning and design including roads, bridges, water systems, and site development.",
      features: [
        "Urban design and Land Development",
        "Residential and Housing land use studies",
        "Multi-family Site Development",
        "Commercial and Industrial Development",
        "Erosion and Sediment Control Plans",
        "Ditch Infill Designs",

      ],
    },
    {
      icon: Hammer,
      title: "Construction Support",
      description:
        "Support the construction team throughout all phases to ensure quality and code compliance.",
      features: [
        "Conducting engineering field reviews",
        "Providing practical solutions to on-site construction challenges",
        "Documenting structural observations throughout all construction phases",
      ],
    },
    {
      icon: Zap,
      title: "Retrofit & Renovation",
      description:
        "Structural upgrades and renovations of existing buildings for code compliance and improved performance",
      features: [
        "Seismic assessment of existing structures",
        "Feasibility assessments for proposed building alterations",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1B6083] mb-2 tracking-tight relative inline-block mt-8">
            Comprehensive Engineering Services
          </h2>
          {/* Line under heading */}
          <span className="block w-24 h-1 bg-[#1B6083] mx-auto rounded-full mb-4"></span>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, our team provides tailored engineering solutions that ensure safety, efficiency, and innovation.
          </p>
        </div>

       {/* Services */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            // Intersection Observer & Animation
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
            const controls = useAnimation()

            useEffect(() => {
              if (inView) controls.start("visible")
            }, [controls, inView])

            const variants = {
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }

            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="p-6 bg-[#1B6083] rounded-full inline-flex items-center justify-center shadow-lg">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-xl">
                  <h3 className="text-2xl font-semibold text-[#1B6083] mb-4">{service.title}</h3>
                  <p className="text-gray-700 text-base mb-4">{service.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}