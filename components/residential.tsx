// // // // Residential.tsx
// // // export function Residential({ onClose }: { onClose: () => void }) {
// // //   return (
// // //     <>
// // //       {/* Backdrop */}
// // //       <div
// // //         className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-[fadeIn_0.2s_ease-out]"
// // //         onClick={onClose}
// // //       ></div>

// // //       {/* Modal Card */}
// // //       <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
// // //         <div
// // //           className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full transform transition-all duration-300 animate-[popIn_0.3s_ease-out]"
// // //           style={{ animation: "popIn 0.3s ease-out" }}
// // //         >
// // //           {/* Close Button */}
// // //           <button
// // //             onClick={onClose}
// // //             className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
// // //           >
// // //             <svg
// // //               className="w-6 h-6"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               viewBox="0 0 24 24"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={2}
// // //                 d="M6 18L18 6M6 6l12 12"
// // //               />
// // //             </svg>
// // //           </button>

// // //           {/* Popup Content */}
// // //           <div className="text-center space-y-6">
// // //             <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center">
// // //               <svg
// // //                 className="w-8 h-8 text-white"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 viewBox="0 0 24 24"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth={2}
// // //                   d="M5 13l4 4L19 7"
// // //                 />
// // //               </svg>
// // //             </div>

// // //             <h2 className="text-2xl font-bold text-gray-800">Residential Services</h2>
// // //             <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
// // //               Mainland has designed a vast array of residential dwelling units from complex custom homes to multi story apartment and condo buildings. These buildings have included underground parkades, retaining walls, concrete slabs, non-combustible assemblies, mass timber elements and other innovative building methods. Whether it’s a families dream home or a multi story structure, our high-skilled and experienced team takes pride in designing structures to meet the architectural intent while optimizing the design to relieve client costs. During the conceptual stage we offer the architects and builders various feedback to enhance the structural performance of the building and reduce the construction costs for the client. Mainland utilizes a high standard of internal reviews and accurate detailing of the structure to minimize on site queries and detailed explanation of the structure on the plan.
// // //             </p>

// // //             <ul className="text-gray-700 text-left space-y-2 max-w-sm mx-auto">
// // //               <li>🏠 Custom Home Design & Structural Planning</li>
// // //               <li>🏗️ Renovations & Additions</li>
// // //               <li>🏢 Multi-Family Developments</li>
// // //               <li>📐 Structural Assessments & Inspections</li>
// // //             </ul>

// // //             <div className="pt-6">
// // //               <button
// // //                 onClick={onClose}
// // //                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
// // //               >
// // //                 Close
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         @keyframes fadeIn {
// // //           from { opacity: 0; }
// // //           to { opacity: 1; }
// // //         }
// // //         @keyframes popIn {
// // //           from { opacity: 0; transform: scale(0.95); }
// // //           to { opacity: 1; transform: scale(1); }
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // }




// // // import React from "react";

// // // export function Residential({ onClose }: { onClose: () => void }) {
// // //   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
// // //     // Only close if the backdrop itself was clicked (not the inner modal)
// // //     if (e.target === e.currentTarget) {
// // //       onClose();
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       {/* Backdrop with blur */}
// // //       <div
// // //         className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex items-center justify-center animate-[fadeIn_0.2s_ease-out]"
// // //         onClick={handleBackdropClick}
// // //       >
// // //         {/* Modal Card */}
// // //         <div
// // //           className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full transform transition-all duration-300 animate-[popIn_0.3s_ease-out]"
// // //           style={{ animation: "popIn 0.3s ease-out" }}
// // //         >
// // //           {/* Close Button */}
// // //           <button
// // //             onClick={onClose}
// // //             className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
// // //           >
// // //             <svg
// // //               className="w-6 h-6"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               viewBox="0 0 24 24"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={2}
// // //                 d="M6 18L18 6M6 6l12 12"
// // //               />
// // //             </svg>
// // //           </button>

// // //           {/* Popup Content */}
// // //           <div className="text-center space-y-6">
// // //             <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center">
// // //               <svg
// // //                 className="w-8 h-8 text-white"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 viewBox="0 0 24 24"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth={2}
// // //                   d="M5 13l4 4L19 7"
// // //                 />
// // //               </svg>
// // //             </div>

// // //             <h2 className="text-2xl font-bold text-gray-800">
// // //               Residential Services
// // //             </h2>
// // //             <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
// // //               Mainland has designed a vast array of residential dwelling units from complex custom homes to multi story apartment and condo buildings. These buildings have included underground parkades, retaining walls, concrete slabs, non-combustible assemblies, mass timber elements and other innovative building methods. Whether it’s a families dream home or a multi story structure, our high-skilled and experienced team takes pride in designing structures to meet the architectural intent while optimizing the design to relieve client costs. During the conceptual stage we offer the architects and builders various feedback to enhance the structural performance of the building and reduce the construction costs for the client. Mainland utilizes a high standard of internal reviews and accurate detailing of the structure to minimize on site queries and detailed explanation of the structure on the plan.
// // //             </p>

// // //             <ul className="text-gray-700 text-left space-y-2 max-w-sm mx-auto">
// // //               <li>🏠 Custom Home Design & Structural Planning</li>
// // //               <li>🏗️ Renovations & Additions</li>
// // //               <li>🏢 Multi-Family Developments</li>
// // //               <li>📐 Structural Assessments & Inspections</li>
// // //             </ul>

// // //             <div className="pt-6">
// // //               <button
// // //                 onClick={onClose}
// // //                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
// // //               >
// // //                 Close
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         @keyframes fadeIn {
// // //           from { opacity: 0; }
// // //           to { opacity: 1; }
// // //         }
// // //         @keyframes popIn {
// // //           from { opacity: 0; transform: scale(0.95); }
// // //           to { opacity: 1; transform: scale(1); }
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // }



// // // import React from "react";

// // // export function Residential({ onClose }: { onClose: () => void }) {
// // //   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
// // //     if (e.target === e.currentTarget) {
// // //       onClose();
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       {/* Backdrop with blur */}
// // //       <div
// // //         className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 flex items-center justify-center animate-[fadeIn_0.3s_ease-out] p-4"
// // //         onClick={handleBackdropClick}
// // //       >
// // //         {/* Modal Card */}
// // //         <div
// // //           className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl max-w-5xl w-full transform transition-all duration-300 animate-[popIn_0.4s_ease-out] border border-slate-700/50 overflow-hidden max-h-[90vh] overflow-y-auto"
// // //         >
// // //           {/* Decorative Background Pattern */}
// // //           <div className="absolute inset-0 opacity-5">
// // //             <div className="absolute inset-0" style={{
// // //               // backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
// // //               backgroundColor: "#1B6083", animation: "popIn 0.3s ease-out"
// // //             }}></div>
// // //           </div>

// // //           {/* Close Button */}
// // //           <button
// // //             onClick={onClose}
// // //             className=
// // //             // "absolute top-6 right-6 z-10 text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800/50 rounded-lg"
// // //             "absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
// // //           >
// // //             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //             </svg>
// // //           </button>

// // //           {/* Header Section */}
// // //           <div className="relative px-12 pt-12 pb-8 border-b border-slate-700/50">
// // //             <div className="flex items-start gap-6 animate-[slideDown_0.5s_ease-out]">
// // //               <div className="flex-shrink-0">
// // //                 <div className="w-20 h-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
// // //                   <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
// // //                   </svg>
// // //                 </div>
// // //               </div>
// // //               <div>
// // //                 <h2 className="text-5xl font-bold text-white mb-3">
// // //                   Residential
// // //                 </h2>
// // //                 <p className="text-slate-400 text-lg">
// // //                   Engineering excellence for modern living spaces
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Content Section */}
// // //           <div className="relative px-12 py-10">
// // //             {/* Main Description */}
// // //             <div className="space-y-5 text-slate-300 text-lg leading-relaxed mb-10 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
// // //               <p>
// // //                 Mainland has designed a vast array of residential dwelling units from complex custom homes to multi-story apartment and condo buildings. These buildings have included underground parkades, retaining walls, concrete slabs, non-combustible assemblies, mass timber elements and other innovative building methods.
// // //               </p>
              
// // //               <p>
// // //                 Whether it's a family's dream home or a multi-story structure, our high-skilled and experienced team takes pride in designing structures to meet the architectural intent while optimizing the design to relieve client costs.
// // //               </p>
              
// // //               <p>
// // //                 During the conceptual stage we offer the architects and builders various feedback to enhance the structural performance of the building and reduce the construction costs for the client. Mainland utilizes a high standard of internal reviews and accurate detailing of the structure to minimize on-site queries and detailed explanation of the structure on the plan.
// // //               </p>
// // //             </div>

// // //             {/* Services Grid */}
// // //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
// // //               <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
// // //                 <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🏠</div>
// // //                 <h3 className="font-bold text-white text-lg mb-2">Custom Homes</h3>
// // //                 <p className="text-slate-400 text-sm">Design & structural planning</p>
// // //               </div>

// // //               <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
// // //                 <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🏗️</div>
// // //                 <h3 className="font-bold text-white text-lg mb-2">Renovations</h3>
// // //                 <p className="text-slate-400 text-sm">Additions & modifications</p>
// // //               </div>

// // //               <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
// // //                 <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🏢</div>
// // //                 <h3 className="font-bold text-white text-lg mb-2">Multi-Family</h3>
// // //                 <p className="text-slate-400 text-sm">Apartments & condos</p>
// // //               </div>

// // //               <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
// // //                 <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">📐</div>
// // //                 <h3 className="font-bold text-white text-lg mb-2">Assessments</h3>
// // //                 <p className="text-slate-400 text-sm">Structural inspections</p>
// // //               </div>
// // //             </div>

// // //             {/* Features Highlight */}
// // //             {/* <div className="grid md:grid-cols-3 gap-6 mb-10 animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
// // //               <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-slate-700/30">
// // //                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
// // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                   </svg>
// // //                 </div>
// // //                 <div>
// // //                   <h4 className="font-bold text-white mb-1">Quality Assurance</h4>
// // //                   <p className="text-slate-400 text-sm">High standards of internal reviews</p>
// // //                 </div>
// // //               </div> */}
// // // {/* 
// // //               <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-slate-700/30">
// // //                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
// // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                   </svg>
// // //                 </div>
// // //                 <div>
// // //                   <h4 className="font-bold text-white mb-1">Cost Optimization</h4>
// // //                   <p className="text-slate-400 text-sm">Value engineering for clients</p>
// // //                 </div>
// // //               </div> */}

// // //               {/* <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-slate-700/30">
// // //                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
// // //                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// // //                   </svg>
// // //                 </div>
// // //                 <div>
// // //                   <h4 className="font-bold text-white mb-1">Innovation</h4>
// // //                   <p className="text-slate-400 text-sm">Modern building methods</p>
// // //                 </div>
// // //               </div> */}
// // //             </div>

// // //             {/* CTA Button */}
// // //             <div className="flex gap-4 animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
// // //               {/* <button
// // //                 className="flex-1 px-8 py-5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
// // //               >
// // //                 Start Your Project
// // //               </button> */}
// // //               <button
// // //                 onClick={onClose}
// // //                 className="px-8 py-5 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all duration-300"
// // //               >
// // //                 Close
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       {/* </div> */}

// // //       <style>{`
// // //         @keyframes fadeIn {
// // //           from { opacity: 0; }
// // //           to { opacity: 1; }
// // //         }
// // //         @keyframes popIn {
// // //           from { opacity: 0; transform: scale(0.9) translateY(30px); }
// // //           to { opacity: 1; transform: scale(1) translateY(0); }
// // //         }
// // //         @keyframes slideDown {
// // //           from { opacity: 0; transform: translateY(-20px); }
// // //           to { opacity: 1; transform: translateY(0); }
// // //         }
// // //         @keyframes fadeInUp {
// // //           from { opacity: 0; transform: translateY(30px); }
// // //           to { opacity: 1; transform: translateY(0); }
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // }





// // import React from "react";

// // export function Residential({ onClose }: { onClose: () => void }) {
// //   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
// //     if (e.target === e.currentTarget) onClose();
// //   };

// //   return (
// //     <>
// //       {/* Backdrop */}
// //       <div
// //         className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
// //         onClick={handleBackdropClick}
// //       >
// //         {/* Modal */}
// //         <div
// //           className="relative rounded-2xl shadow-2xl p-10 max-w-3xl w-full transform transition-all duration-300 animate-[popIn_0.3s_ease-out] text-white"
// //           style={{ backgroundColor: "#1B6083", zIndex: 50 }}
// //         >
// //           {/* Close (X) Button — always visible */}
// //           <button
// //             onClick={onClose}
// //             className="absolute top-6 right-6 text-white/90 hover:text-white transition-colors z-50"
// //           >
// //             <svg
// //               className="w-6 h-6"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M6 18L18 6M6 6l12 12"
// //               />
// //             </svg>
// //           </button>

// //           {/* Modal Content */}
// //           <div className="text-center space-y-6">
// //             <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
// //               <svg
// //                 className="w-8 h-8 text-white"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d="M5 13l4 4L19 7"
// //                 />
// //               </svg>
// //             </div>

// //             <h2 className="text-3xl font-bold">Residential Services</h2>
// //             <p className="text-white/90 leading-relaxed max-w-xl mx-auto">
// //               Mainland has designed a vast array of residential dwelling units,
// //               from complex custom homes to multi-story apartment and condo
// //               buildings. Our experienced team takes pride in creating structures
// //               that meet architectural intent while optimizing design efficiency
// //               and construction costs.
// //             </p>

// //             <ul className="text-left space-y-2 max-w-sm mx-auto text-white/90">
// //               <li>🏠 Custom Home Design & Structural Planning</li>
// //               <li>🏗️ Renovations & Additions</li>
// //               <li>🏢 Multi-Family Developments</li>
// //               <li>📐 Structural Assessments & Inspections</li>
// //             </ul>

// //             {/* Centered Bottom Close Button */}
// //             <div className="pt-8 flex justify-center">
// //               <button
// //                 onClick={onClose}
// //                 className="px-8 py-3 bg-white text-[#1B6083] rounded-lg font-semibold hover:bg-white/90 hover:scale-105 transform transition-all duration-200"
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Animations */}
// //       <style>{`
// //         @keyframes popIn {
// //           from { opacity: 0; transform: scale(0.95); }
// //           to { opacity: 1; transform: scale(1); }
// //         }
// //       `}</style>
// //     </>
// //   );
// // }





// import React from "react";

// export function Residential({ onClose }: { onClose: () => void }) {
//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) onClose();
//   };

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
//         onClick={handleBackdropClick}
//       >
//         {/* Modal */}
//         <div
//           className="relative rounded-2xl shadow-2xl p-10 max-w-3xl w-full transform transition-all duration-300 animate-[popIn_0.3s_ease-out] text-white"
//           style={{ backgroundColor: "#1B6083", zIndex: 50 }}
//         >
//           {/* Close (X) Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-6 right-6 text-white/90 hover:text-white transition-colors z-50"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>

//           {/* Modal Content */}
//           <div className="text-center space-y-6">
//             <h2 className="text-3xl font-bold">Residential Services</h2>
//             <p className="text-white/90 leading-relaxed max-w-xl mx-auto text-justify">
//               Mainland has designed a vast array of residential dwelling units from complex custom homes to multi story apartment and condo buildings. These buildings have included underground parkades, retaining walls, concrete slabs, non-combustible assemblies, mass timber elements and other innovative building methods. Whether it’s a families dream home or a multi story structure, our high-skilled and experienced team takes pride in designing structures to meet the architectural intent while optimizing the design to relieve client costs. During the conceptual stage we offer the architects and builders various feedback to enhance the structural performance of the building and reduce the construction costs for the client. Mainland utilizes a high standard of internal reviews and accurate detailing of the structure to minimize on site queries and detailed explanation of the structure on the plan.
//             </p>

//             {/* Centered Close Button */}
//             <div className="pt-8 flex justify-center">
//               <button
//                 onClick={onClose}
//                 className="px-8 py-3 bg-white text-[#1B6083] rounded-lg font-semibold hover:bg-white/90 hover:scale-105 transform transition-all duration-200"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>{`
//         @keyframes popIn {
//           from { opacity: 0; transform: scale(0.95); }
//           to { opacity: 1; transform: scale(1); }
//         }
//       `}</style>
//     </>
//   );
// }




import React from "react";

export function Residential({ onClose }: { onClose: () => void }) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4 sm:p-6"
        onClick={handleBackdropClick}
      >
        {/* Modal */}
        <div
          className="relative rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-3xl transform transition-all duration-300 animate-[popIn_0.3s_ease-out] text-white max-h-[90vh] overflow-y-auto"
          style={{ backgroundColor: "#1B6083", zIndex: 50 }}
        >
          {/* Close (X) Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/90 hover:text-white transition-colors z-50"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Residential Services
            </h2>

            <p className="text-white/90 leading-relaxed max-w-xl mx-auto text-justify text-sm sm:text-base">
              Mainland has designed a vast array of residential dwelling units
              from complex custom homes to multi story apartment and condo
              buildings. These buildings have included underground parkades,
              retaining walls, concrete slabs, non-combustible assemblies, mass
              timber elements and other innovative building methods. Whether
              it’s a families dream home or a multi story structure, our
              high-skilled and experienced team takes pride in designing
              structures to meet the architectural intent while optimizing the
              design to relieve client costs. During the conceptual stage we
              offer the architects and builders various feedback to enhance the
              structural performance of the building and reduce the construction
              costs for the client. Mainland utilizes a high standard of
              internal reviews and accurate detailing of the structure to
              minimize on site queries and detailed explanation of the structure
              on the plan.
            </p>

            {/* Centered Close Button */}
            <div className="pt-6 sm:pt-8 flex justify-center">
              <button
                onClick={onClose}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#1B6083] rounded-lg font-semibold hover:bg-white/90 hover:scale-105 transform transition-all duration-200 text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
