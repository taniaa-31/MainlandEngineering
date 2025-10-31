import { Building2, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg">
                <Building2 className="h-7 w-7 text-white" />
              </div> */}
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Mainland Engineering
              </span>
            </div>
            
            {/* <p className="text-slate-300 leading-relaxed max-w-md">
              Mainland Engineering Consultants Corporation has been providing exceptional structural and civil
              engineering services for over 30 years, delivering innovative solutions that build the future.
            </p> */}

            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 text-sm leading-relaxed">
                  #206, 8363 128 Street<br />
                  Surrey, BC 12345 V3W4G1
                </span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 text-sm group-hover:text-cyan-400 transition-colors">
                  +1 (604) 543-8044
                </span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 text-sm group-hover:text-cyan-400 transition-colors">
                  info@mainlandeng.com
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Mainland Engineering Consultants Corporation. All rights reserved.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </a>
              <span className="text-slate-700">|</span>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <span className="text-slate-700">|</span>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                Accessibility
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}