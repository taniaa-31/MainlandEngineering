"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCategory = "Residential" | "Commercial" | "Civil";

interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  images: string[];
  location?: string;
  Developer?: string;
  Architect?: string;
  Builder?: string;
  caption?: string;
}

export function OurWork() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "Medical Center",
      category: "Commercial",
      description: "A fifteen story high-rise building for retail areas, four parkade levels, nine medical office levels and a residential floor.",
      images: ["/SMG.png"],
      Developer:"SMG Builders",
      Architect: "Kumar Architecture",
      location: "Fort McMurray, AB",
      caption:"Building Rendering",
    },
    {
      title: "Warehouse and Recreation Facility",
      category: "Commercial",
      description: "Development consisting of more than thirty thousand square feet of concrete tilt up construction designed for warehouses, offices, and recreation facilities.",
      images: ["/W1.png"],
        Developer:"Diyash Investments",
      Architect: "Architecture Panel",
      location: "Surrey, BC",
      caption:"Building Rendering",
    },
    {
      title: "Gurudwara Sahib Sukh Sagar",
      category: "Commercial",
      description: "A two-level temple now home to one of lower mainland’s biggest Sikh congregations.",
      images: ["/Gurudwara.png"],
        Developer:"Gurudwara Sahib Sukh Sagar",
      Architect: "Ramsay Worden Architects",
      location: "New Westminster, BC",
      caption:"Main prayer hall",
    },
    {
      title: "Harlowe",
      category: "Residential",
      description: "A four-story parkade structure surrounded by townhouses and supporting a three story condominium above supporting a 86 unit community.",
      Developer: "Genaris Properties",
      images: ["/T1.png"],
      Architect: "FLAT Architecture",
      location:" Surrey, BC",
      Builder: "ABC Construction Ltd.",
      caption:"Building Rendering",
    },
    {
      title:"Residential Rental Building",
      category: "Residential",
      description:"A 80-unit rental building spanning six stories high with two underground parkades.",
      Developer:"Phoenix Homes",
      images:["/RentalBldg.png"],
      Architect: "Mathew Cheng Architect",
      location: "Surrey, BC",
      caption:"Building Rendering",
    },
    {
      title:"Stowa",
      category:"Residential",
      description:"A condo building supporting 77 units spanning six stories high with two underground parkades.",
      Developer:"Genaris Properties",
      images:["/Stowa.png"],
      Architect: "FLAT Architecture",
      location: "Surrey, BC",
      caption:"Building Rendering",
    },
    // {
    //   title: "Rental Building Project",
    //   category: "Residential",
    //   description: "6 Story Wood Frame + 2 Story Underground Parkades",
    //   images: ["/R1.png"],
    //    Architect: "John Doe Architects",
    //   Builder: "ABC Construction Ltd.",
    // },
    {
      title: "Manorlane Homes",
      category: "Residential",
      description: "A mixed-use development supporting 130 units spanning five stories high with two underground parkades supported by a raft slab.",
      images: ["/Condominium.png"],
       Developer:"BM Group International",
      Architect: "DF Architecture",
      location: "Langley, BC",
      caption:"Raft slab installation progress",
    },
    {
      title: "Solis",
      category: "Residential",
      description: "Part one of a multiphase purpose-built rental project housing 40 units and a penthouse.",
      images: ["/A1.png"],
       Developer:"Genaris Properties",
      Architect: "FLAT Architecture",
      location: "Sechelt, BC",
      caption:"Building Rendering",
    },
    {
      title: "Southridge Housing Development",
      category: "Residential",
      description: "Four story, 60 suite, apartment building part of the new Southridge Housing Development.",
      images: ["/A2.png"],
      Developer:"Hayer Properties",
      Architect: "Igel Architecture",
      location: "Prince George, BC",
      caption:"Suspended slab installation progress",
    },
     {
      title: "Mix-Use Development",
      category: "Residential",
      description: "A steel stud frame supported by a concrete podium supporting commercial and residential space.",
      images: ["/mixedUseBldg.png"],
      Developer:"Tamber Development  ",
      Architect: "DF Architecture",
      location: "Surrey, BC",
      caption:"Building Rendering",
    },
    {
      title: "Custom Residence",
      category: "Residential",
      description: "A custom luxury design built in Blaine, Washington.",
      images: ["/WAResidence.png"],
      Developer:"Anahat Construction ",
      Architect: "Haven Design",
      location: "Blaine, WA",
      caption:"Building Rendering",
    },
     {
      title: "Townhouse Development",
      category: "Residential",
      description: "A 41 building townhouse project consisting of 173 units.",
      images: ["/TownhouseSitePlan.png"],
      Developer:"Namdhari Construction",
      Architect: "DF Architecture",
      location: "Surrey, BC",
      caption:"Site Plan",
    },
      {
      title: "Heath Townhouse Development",
      category: "Residential",
      description: "A multi-phased townhouse development project consisting of more than 120 units.",
      images: ["/HealthTwnSitePlan.png"],
      Developer:"BM Group International",
      Architect: "Focus Architecture",
      location: "Langley, BC",
      caption:"Site plan of first phase of Heath",
    },
      {
      title: "Apartment Development",
      category: "Residential",
      description: "A four-story, 44 unit, apartment building with an underground parkade, large indoor amenity and accessible roof decks.",
      images: ["/Apartment.png"],
      Developer:" Goldenbay Trading Inc",
      Architect: "Architectural Panel",
      location: "Chilliwack, BC",
      caption:"Building Rendering",
    },

    {
      title: "8 Unit Residential Building on Heather Street",
      category: "Residential",
      description: "A three-story wood frame to accommodate luxury residential units supporting cantilevered floor systems and large openings in the walls.",
      images: ["/R2.png"],
       Developer:" Paramax Homes",
      Architect: "b Squared Architecture",
      location: "Vancouver, BC",
      caption:"Building Rendering",
    },
    {
      title: "Single Family Residence",
      category: "Residential",
      description: "A luxury single family residence in the coveted West Vancouver area.",
      images: ["/LuxuryHouse.png"],
       Developer:" Badesha Properties",
      Architect: "Rommel Designb Squared Architecture",
      location: "West Vancouver, BC",
      caption:"Building Rendering",
    },
    // {
    //   title: "Mixed Use Development Building",
    //   category: "Commercial",
    //   description: "Concrete and Steel Stud Frame of Commercial and Residential Spaces",
    //   images: ["/MixedUse.png"],
    //    Architect: "John Doe Architects",
    //   Builder: "ABC Construction Ltd.",
    // },
    {
      title: "Temple Addition",
      category: "Commercial",
      description: "A 20000 square foot two level addition to an existing temple designed with a suspended concrete slab and a steel roof.",
      images: ["/Temple.png"],
      Developer:" Shri Lakshmi Narayan Mandir",
      Architect: "Kumar Architecture",
      location: "Surrey, BC",
      caption:"Building Rendering",
    },
    {
      title: "Four Points by Sheraton",
      category: "Commercial",
      description: "A 105 unit hotel supported by a six story wood frame in the heart of Penticton.",
      images: ["/Sheraton.png"],
       Developer:" Mundi Construction",
      Architect: "JM Architecture",
      location: "Penticton, BC",
      caption:"Building Rendering",
    },
    {
      title: "Hyatt Place",
      category: "Commercial",
      description: "A combination of offices, commercial units and a 160 hotel units supported by a six story wood frame, steel moment frames and CLT canopies.",
      images: ["/Hyatt.png"],
       Developer:" Mundi Construction",
      Architect: "Bluegreen Architecture & Interior Design",
      location: "Kamloops, BC",
      caption:"Building Rendering",
    },
    {
      title: "Best Western Hotel",
      category: "Commercial",
      description: "A five-story hotel consisting of 99 rooms restaurant and pool areas.",
      images: ["/WesternHotel.png"],
       Developer:" Suncity Hotels",
      Architect: "Mara + Natha Architecture",
      location: "Medicine Hat, AB",
      caption:"Building Rendering",
    },
    // {
    //   title: "Hotel",
    //   category: "Commercial",
    //   description: "In Progress - Suspended Slab",
    //   images: ["/H2.png"],
    //    Architect: "John Doe Architects",
    //   Builder: "ABC Construction Ltd.",
    // },
    {
      title: "Industrial Building",
      category: "Commercial",
      description: "More than 50000 square feet of concrete tilt up construction divided into 12 commercial units.",
      images: ["/Industrial.png"],
       Developer:" Golden View Development",
      Architect: "Saturnin Architecture",
      location: "Abbotsford, BC",
      caption:"Steel joist and decking installation progress.",
    },
    {
      title: "Sunrise Kitchen Addition",
      category: "Commercial",
      description: "A 40000 square foot addition to a kitchen cabinet manufacturing building.",
      images: ["/ManufacturingFactory.png"],
      Developer:" Unibuild Construction Management",
      Architect: "projectSUSTAINABLE Architecture",
      location: "Surrey, BC",
      caption:"Steel decking and brace installation progress.",
    },
    {
      title: "Shell Gas Station",
      category: "Commercial",
      description: "A steel gas station canopy for the new Shell Gas Station in Smithers.",
      images: ["/GasStation.png"],
         Developer:" Hemkund Developments",
      location: "Smithers, BC",
      caption:"Steel framing of canopy progress.",
    },
    {
      title: "Farm Equipment Barn",
      category: "Commercial",
      description: "A 10000 square foot barn built for farm equipment storage.",
      images: ["/Barn.jpg"],
          Developer:" Athwal Electrical Corporation",
      Architect: "International Design & Planning Consultants",
      location: "Surrey, BC",
      caption:"Wood frame installation progress.",
    },
    {
      title: "10 Lot Subdivision Project",
      category: "Civil",
      description: "Prepared designs for offsite servicing, grading, and roadworks. Conducted field reviews and coordinated with the City to ensure successful project completion.",
      images: ["ZenithSubDivision.png","/C_1.jpg", "/C_2.jpg", "/C_3.jpg"],
      location: "Surrey, BC",
      Developer : "128 Zenith Development Ltd.",
    },
    {
      title: "7 Lot Subdivision ",
      category: "Civil",
      description: "Prepare designs for off-site servicing, including grading, Storm, Sanitary, and Watermain design, as well as roadworks. Perform field reviews and coordinate with the City to ensure successful project completion.",
      images: ["/Marysville.png"],
      location: "Marysville, WA",
      Developer : "Marysville Investors LLC",
    },
    {
      title: "6 Lot Sub-Division and one Drainage tract",
      category: "Civil",
      description: "Prepare designs for off-site servicing, including grading, Storm, Sanitary, Watermain design and Detention Vault, as well as roadworks. Perform field reviews and coordinate with the City to ensure successful project completion.",
      images: ["/Renton.png"],
      location: "Renton, WA",
      Developer : "Jaswant Dhaliwal",
    },
     {
      title: "Icon Townhomes",
      category: "Civil",
      description: "Prepare designs for off-site servicing, including Onsite grading, Storm, Sanitary, Watermain design and Brentwood Detention Tank, as well as roadworks. Perform field reviews and coordinate with the City to ensure successful project completion.",
      images: ["/Kent.png"],
      location: "Kent, WA",
      Developer : "Amar Properties LLC",
    },
       {
      title: "Arbor Heights Townhomes",
      category: "Civil",
      description: "Prepare designs for off-site servicing, including Onsite grading, Storm, Sanitary, Watermain design and Brentwood Detention Tank, as well as roadworks. Perform field reviews and coordinate with the City to ensure successful project completion.",
      images: ["/ArborHeights.png"],
      location: "Kent, WA",
      Developer : "Amar Properties LLC",
    },
       {
      title: "Elgin Park Commercial Development",
      category: "Civil",
      description: "Prepare designs for off-site servicing, including Onsite grading, Storm, Sanitary, Watermain design and Brentwood Detention Tank, as well as roadworks. Perform field reviews and coordinate with the City to ensure successful project completion.",
      images: ["/ElginParkKeyPlan.png","Elginb1.jpeg","Elginb2.jpeg",],
      location: "Surrey, BC",
      Developer : "0909597 BC LTD",
    },

    {
      title: "Multi-Tenant Commercial Building",
      category: "Civil",
      description: "Prepare designs for onsite and offsite servicing, grading, Storm Management and roadworks. Perform field reviews and coordinate with the City for project completion.",
      images: ["MultiTenantKeyPlan.png","/C_4.jpg", "/C_5.jpg", "/C_6.jpg"],
      location: "Surrey, BC",
      Developer : "Sukhi Sanghe",
    },
    {
      title: "4-Lot Subdivision Project",
      category: "Civil",
      description: "Prepare designs for offsite servicing, grading , roadworks , Utilities coordination and Perform field reviews and coordinate with the City for project completion.",
      images: ["SubdivisionKeyPlan.png","/C7.jpg", "/C8.jpg", "/C9.jpg"],
      location: "Surrey, BC",
      Developer : "Sukhwinder Sethi",
    },
    {
      title: "Townhouse Complex - Woodward Lane 18-Unit",
      category: "Civil",
      description: "Prepare designs for onsite and offsite servicing, grading, Storm Management and roadworks. Perform field reviews and coordinate with the City for project completion.",
      images: ["TownhouseKeyPlan.png","/C11.jpg", "/C12.jpg", "/C13.jpg"],
      location: "Surrey, BC",
      Developer : "Sukhwinder Sethi",
    },
    {
      title: "Townhouse Development",
      category: "Civil",
      description: "Prepare designs for onsite and offsite servicing, grading and roadworks .Perform field reviews and coordinate with the City for project completion.",
      images: ["ZenithDevKeyPlan.png","/C14.jpg", "/C15.jpg", "/C16.jpg"],
      location: "Surrey, BC",
      Developer : "144 Zenith Development Ltd.",
    },
   
  ];

  const categories: (ProjectCategory | "All")[] = ["All", "Residential", "Commercial", "Civil"];

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section id="ourWork" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1B6083] mb-2 tracking-tight relative inline-block mt-8">
              Our Work
            </h2>
            <span className="block w-24 h-1 bg-[#1B6083] mx-auto rounded-full mb-4"></span>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover some of our diverse projects spanning residential, commercial, and civil sectors.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#1B6083] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 shadow-md hover:shadow-lg hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={`${project.category}-${index}`}
                className="bg-white rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-[1.02]"
                style={{ boxShadow: "0 4px 20px rgba(27, 96, 131, 0.15)" }}
                onClick={() => openProject(project)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">More Details</span>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <span className="inline-block px-4 py-1.5 bg-[#1B6083]/10 text-[#1B6083] text-sm font-semibold rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1B6083] transition-colors">
                    {project.title}
                  </h3>
                  <h4 className="text-gray-600 font-semibold font-serif">{project.caption}</h4>
                  <p className="text-gray-600 leading-relaxed text-base">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-7xl w-full max-h-[95vh] bg-white rounded-xl overflow-hidden"
            style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col lg:flex-row max-h-[95vh]">
              {/* Image Carousel */}
              <div className="lg:w-2/3 bg-black flex items-center justify-center relative min-h-[400px] lg:min-h-0">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain max-h-[60vh] lg:max-h-[95vh]"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200 hover:scale-110"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200 hover:scale-110"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Project Info */}
              <div className="lg:w-1/3 p-8 overflow-y-auto bg-white">
                <span className="inline-block px-4 py-1.5 bg-[#1B6083]/10 text-[#1B6083] text-sm font-semibold rounded-full mb-4">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
                <h4 className="text-gray-600 font-semibold font-serif">{selectedProject.caption}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed font-serif">{selectedProject.description}</p>

                {/* Extra Fields */}
                {selectedProject.category === "Civil" && (
                  // selectedProject.Developer && (
                  // <p className="text-gray-700 mb-2">
                  //   <span className="font-semibold">Developer:</span> {selectedProject.Developer}
                  // </p>
                  <>
    {selectedProject.Developer && (
      <p className="text-gray-700 mb-2 font-serif">
        <span className="font-semibold font-serif">Developer:</span> {selectedProject.Developer}
      </p>
    )}
    {selectedProject.location && (
      <p className="text-gray-700 mb-2 font-serif">
        <span className="font-semibold font-serif">Location:</span> {selectedProject.location}
      </p>
    )}
  </>
                )}
                {(selectedProject.category === "Residential" || selectedProject.category === "Commercial") && (
                  <>
                  {selectedProject.Developer && (
                      <p className="text-gray-700 mb-2 font-serif">
                        <span className="font-semibold font-serif">Developer:</span> {selectedProject.Developer}
                      </p>
                    )}
                    {selectedProject.Architect && (
                      <p className="text-gray-700 mb-2 font-serif">
                        <span className="font-semibold font-serif">Architect:</span> {selectedProject.Architect}
                      </p>
                    )}
                    {selectedProject.Builder && (
                      <p className="text-gray-700 mb-2 font-serif">
                        <span className="font-semibold font-serif">Builder:</span> {selectedProject.Builder}
                      </p>
                    )}
                    {selectedProject.location && (
                      <p className="text-gray-700 mb-2 font-serif">
                        <span className="font-semibold font-serif">Location:</span> {selectedProject.location}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
