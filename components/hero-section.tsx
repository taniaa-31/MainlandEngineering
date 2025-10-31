// //new
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Condo.png')" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Floating Shapes */}
      {/* <div className="absolute top-[10%] left-[10%] w-20 h-20 md:w-24 md:h-24 opacity-10 rounded-full animate-pulse"
           style={{
             background: 'linear-gradient(135deg, #00D9FF, #1B6083)',
             animation: 'float 20s infinite ease-in-out'
           }} /> */}
      {/* <div className="absolute bottom-[20%] right-[10%] w-28 h-28 md:w-36 md:h-36 opacity-10 animate-pulse"
           style={{
             background: 'linear-gradient(135deg, #FF6B35, #FF8E53)',
             borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
             animation: 'float 20s infinite ease-in-out 5s'
           }} /> */}
      <div className="absolute top-[50%] left-[5%] w-16 h-16 md:w-20 md:h-20 opacity-10 rounded-full animate-pulse"
          //  style={{
          //    background: 'linear-gradient(135deg, #00D9FF, #1B6083)',
          //    animation: 'float 20s infinite ease-in-out 10s'
          //  }} 
          />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 py-8 max-w-6xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Expert Engineering Solutions 
            <br className="hidden md:block" />
            {/* for more than <span className="animate-glow text-cyan-400">30 Years</span> */}
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Mainland Engineering Consultants Corporation delivers comprehensive 
            structural and civil engineering services, building safe, sustainable, and 
            innovative solutions for your most complex projects.
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4">
            <button className="group relative px-8 py-3.5 md:px-10 md:py-4 text-base md:text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)',
                      boxShadow: '0 10px 30px rgba(255, 107, 53, 0.4)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 107, 53, 0.5)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.4)'}>
              Start Your Project
            </button>
            
            <button className="px-8 py-3.5 md:px-10 md:py-4 text-base md:text-lg font-semibold text-white rounded-full border-2 border-white/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/50 w-full sm:w-auto"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}>
              View Our Work
            </button>
          </div> */}

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-16 justify-center items-center">
            <div className="text-center min-w-[120px]">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">30+</div>
              <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center min-w-[120px]">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center min-w-[120px]">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 20px rgba(0, 217, 255, 0.5),
                         0 0 40px rgba(0, 217, 255, 0.3);
          }
          to {
            text-shadow: 0 0 30px rgba(0, 217, 255, 0.8),
                         0 0 60px rgba(0, 217, 255, 0.5);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-30px) rotate(90deg);
          }
          50% {
            transform: translateY(0) rotate(180deg);
          }
          75% {
            transform: translateY(30px) rotate(270deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}
