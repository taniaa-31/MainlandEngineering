
import React from "react";

export function Commercial({ onClose }: { onClose: () => void }) {
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
              Commercial Services
            </h2>

            <p className="text-white/90 leading-relaxed max-w-xl mx-auto text-justify text-sm sm:text-base">
              From concrete tilt up buildings to steel structures – Mainland has a diverse array of industrial buildings in its portfolio. This includes warehouse buildings, banquet halls, temples, offices and recreational buildings. With its deep understanding of code requirements and municipal guidelines, Mainland aids developers with the concept of the structure from the feasibility stage to construction. This includes guiding consultants to design structures that are not only practical in terms of constructability but also cost-effective. For more than 30 years, Mainland has worked with and developed relationships with numerous local tilt up and steel erector contractors. Depending on the intended occupancy, detailed analysis such as vibration and other performance parameters are conducted with an emphasis on providing a high performing and serviceable structure reducing risks and liabilities for the owners and occupants.
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
